/**
 * SISP Gulpfile
 */

var fs = require('fs'),
    gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    sass = require('node-sass'),
    Builder = require('systemjs-builder'),
    runSequence = require('run-sequence'),
    htmlMinifier = require('html-minifier'),
    inlineNg2TemplateStyle = require('gulp-inline-ng2-template'),
    plugins = require('gulp-load-plugins')({lazy: true}),
    tsProject = plugins.typescript.createProject('tsconfig.json'),
    browserSync = require("browser-sync"),
    browserSyncConfig = require("./browser-sync"),
    preprocess = require('gulp-preprocess');
/*
 * Global variables
 */
var environment = 'development';
if(plugins.util.env.env) environment = plugins.util.env.env;

/*
 * Paths
 */
var paths = {
    systemjs: {
        polyfills: 'node_modules/systemjs/dist/system-polyfills.js',
        config: {
            development:'systemjs/config.development.js',
            production:'systemjs/config.production.js'
        }
    },
    configurations: {
        development: 'config/configurations.development.js',
        production: 'config/configurations.production.js'
    },
    assets: {
        images: 'src/images/**/*.*',
        src: [
            'src/**/*.html',
            'src/**/*.js',
            'src/**/*.json'
        ],
        css: [
             'src/main.css'
           
        ],
        fonts: [
          
        ]
    },
    vendors: [
        'node_modules/core-js/client/shim.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js'
    ],
    dist: "dist",
    build: "build",
    tmp: "tmp"
};

/*
 * Plugin configurations
 */
var config = {
    systemjs: {
        builder: {
            minify: false,
            mangle: false,
            uglify: {
                mangle: false,
                preserveComments:'all'
            },
            sourceMaps: false
        }
    },
    sourcemaps: {
        includeContent: false,
        sourceRoot: '/src/app'
    }
};

/**
 * Main Tasks:
 *
 * - build
 * - start
 *
 * Other Tasks:
 *
 * - logs
 * - clean
 *      - *:src:js
 *      - *:dist
 *      - *:build
 *      - *:tmp
 * - copy
 *      - *:assets
 *          - *:images
 *          - *:src
 *          - *:css
 *          - *:fonts
 *      - *:configurations
 *      - *:systemjs
 * - sass
 *      - *:start
 *      - *:build
 * - inline
 * - bundle
 *      - *:vendors
 * - builder
 *      - *:bundles
 *      - *:static
 * - serve
 * - watch
 *
 */

/*
 * Set default gulp.dest folder
 */
var dest = paths.dist;

/*
 * This task run in sequence all tasks needed to build files for release.
 * (npm run build)
 */
gulp.task('build', function (done) {
    // override destination folder
    dest = paths.build;
    // run sequence tasks
    runSequence(
        'logs',
        'clean:build',
        ['copy:assets:images', 'copy:assets:css', 'copy:assets:fonts', 'copy:systemjs:polyfills'], // lancia in sequenza i seguenti task
        'sass:build',
        'inline',
        'bundle:vendors',
        'builder:static',
        'inject:index',
        'htmlTemplate',
        'clean:tmp',
        done
    );
});

/*
 * This task run in sequence all tasks needed to build files for the developement
 * (npm run start)
 */
gulp.task('start', function (done) {
    runSequence(
        'logs',
        'clean:dist',
        ['copy:assets:images', 'copy:assets:src','copy:assets:css'], // lancia in sequenza i seguenti task
        'copy:configurations',
        ['copy:systemjs:polyfills', 'copy:systemjs:config'], // lancia in sequenza i seguenti task
        'sass:start',
        'htmlTemplate',
        'tsc',
        'watch',
        'serve',
        done
    );
});

/* ------------------------------------------------------------------------------------------------------------------ */

// logs
gulp.task('logs', function(done) {
    plugins.util.log(plugins.util.colors.white('ENVIRONMENT'), ':', plugins.util.colors.green(environment));
    plugins.util.log(plugins.util.colors.white('CONFIGURATION FILE'), ':', '\''+plugins.util.colors.green(paths.configurations[environment])+'\'');
    done();
});

// clean
gulp.task('clean:src:js', function () {
    del.sync("src/**/*.js");
});
gulp.task('clean:dist', function () {
    del.sync(paths.dist);
});
gulp.task('clean:build', function () {
    del.sync(paths.build);
});
gulp.task('clean:tmp', function () {
    del.sync(paths.tmp);
});
gulp.task('clean', function (done) {
    runSequence('clean:tmp','clean:build','clean:dist',done);
});

// copy
gulp.task('copy:assets:images', function() {
    return gulp.src(paths.assets.images)
        .pipe(gulp.dest(dest + "/images"));
});
gulp.task('copy:assets:src', function () {
    return gulp.src(paths.assets.src)
        .pipe(gulp.dest(dest));
});
gulp.task('copy:assets:css', function () {
    return gulp.src(paths.assets.css)
        .pipe(gulp.dest(dest + "/styles"));
});
gulp.task('copy:assets:fonts', function () {
    return gulp.src(paths.assets.fonts)
        .pipe(gulp.dest(dest + "/styles/themes/default/assets/fonts"));
});
gulp.task('copy:configurations', function () {
    return gulp.src(paths.configurations[environment])
        .pipe(plugins.rename(function(path) {
            path.dirname = './app';
            path.basename = 'configurations';
            path.extname = '.js';
        }))
        .pipe(gulp.dest(dest));
});
gulp.task('copy:systemjs:polyfills', function () {
    return gulp.src(paths.systemjs.polyfills)
        .pipe(gulp.dest(dest));
});
gulp.task('copy:systemjs:config', function () {
    return gulp.src(paths.systemjs.config.development)
        .pipe(plugins.rename(function(path) {
            path.dirname = './';
            path.basename = 'systemjs.config';
            path.extname = '.js';
        }))
        .pipe(gulp.dest(dest));
});

// typescript
gulp.task('tsc', function () {
    return gulp.src('src/**/*.ts')
        .pipe(plugins.sourcemaps.init())
        .pipe(tsProject())
        .pipe(plugins.sourcemaps.write('/'))
        .pipe(gulp.dest(dest));
});

// sass
gulp.task('sass:build', function () {
    return gulp.src("src/styles/main.scss")
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
        .pipe(plugins.sourcemaps.write('./', config.sourcemaps))
        .pipe(plugins.concat('main.min.css'))
        .pipe(gulp.dest(dest+'/styles'));
});
gulp.task('sass:start', function () {
    return gulp.src(["src/styles/main.scss","src/app/**/*.scss"])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.sourcemaps.write('/', config.sourcemaps))
        .pipe(plugins.if(fileIsStyleMain,gulp.dest(dest+'/styles'),gulp.dest(dest+'/app')));
});

// inline templates & styles
gulp.task('inline', function () {
    // before copy configuration into tmp folder
    gulp.src(paths.configurations[environment])
        .pipe(plugins.rename(function(path) {
            path.dirname = './app';
            path.basename = 'configurations';
            path.extname = '.js';
        }))
        .pipe(gulp.dest(paths.tmp));
    // put template and style into typescript file (ignore .e2e and spec file) and transpile
    return gulp.src(['src/**/*.ts', '!src/**/*.e2e.ts','!src/**/*.spec.ts'])
        .pipe(plugins.replace('.css', '.scss'))
        .pipe(plugins.sourcemaps.init())
        .pipe(inlineNg2TemplateStyle({
            base: 'src',
            useRelativePaths: true,
            indent: 0,
            removeLineBreaks: true,
            templateProcessor: minifyTemplate,
            styleProcessor: processingSass
        }))
        .pipe(tsProject())
        .pipe(gulp.dest(paths.tmp));
});

// inject
gulp.task('inject:index', function () {
    var styleStream = gulp.src([
        'build/styles/*.min.css',
        'build/styles/semantic.min.css',
        'build/styles/main.min.css'
    ], {read: false});
    var jsStream = gulp.src([
        'build/vendors.min.js',
        'build/app.*'
    ], {read: false});
    return gulp.src('src/index.html')
        // injecting stylesheet
        .pipe(plugins.inject(styleStream, {ignorePath: dest, addRootSlash: false}))
        // injecting javascript
        .pipe(plugins.inject(jsStream, {ignorePath: dest, addRootSlash: false}))
        // replace base href
        .pipe(plugins.replace('href="/"', 'href="/sisp-frontend/"'))
        .pipe(gulp.dest(dest));
});

// bundle
gulp.task('bundle:vendors', function () {
    return gulp.src(paths.vendors)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('vendors.min.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('/'))
        .pipe(gulp.dest(dest));
});
gulp.task('bundle:dependencies', function (done) {
    var file = require('./'+paths.systemjs.production);
    var builder = new Builder('', file);
    // dependencies
    builder.bundle(
        '(app - [app/**/*]) + @angular/core + @angular/common + @angular/compiler + @angular/platform-browser + @angular/platform-browser-dynamic + @angular/http + @angular/router + @angular/forms + rxjs + jquery + lodash + semantic + moment',
        dest + '/dependencies.js',
        config.systemjs.builder
    ).then(function() {
        done();
    });
});
gulp.task('bundle:app', function () {
    var file = require('./'+paths.systemjs.production);
    var builder = new Builder('', file);// app
    return builder.buildStatic(
        'app + configurations - (app - [app/**/*])',
        dest + '/app.js',
        config.systemjs.builder
    );
});


// builder
gulp.task('builder:bundles', function (done) {
    runSequence('bundle:dependencies', 'bundle:app', done);
});
gulp.task('builder:static', function () {
    var file = require('./'+paths.systemjs.config.production);
    var builder = new Builder('', file);
    return builder.buildStatic(
        'app',
        dest + '/app.min.js',
        config.systemjs.builder
    );
});

// serve
gulp.task('serve', function(done) {
    browserSync(browserSyncConfig.options, function () {
        done();
    });
});

// watch
gulp.task("watch", function () {
    // copy tasks
    gulp.watch(paths.assets.images, ['copy:assets:images', browserSync.reload]);
    gulp.watch(paths.assets.src, ['copy:assets:src', browserSync.reload]);
    gulp.watch(paths.configurations[environment], ['copy:configurations', browserSync.reload]);
    gulp.watch(paths.systemjs.config.development, ['copy:systemjs:config', browserSync.reload]);
    // sass tasks
    gulp.watch(["src/styles/**/*.scss","src/app/**/*.scss"], ['sass:start', browserSync.reload]);
    // ts tasks
    gulp.watch("src/**/*.ts", ['tsc', browserSync.reload]);
});

/* ------------------------------------------------------------------------------------------------------------------ */

// utility functions
function minifyTemplate(path, ext, file, cb) {
    try {
        var minifiedFile = htmlMinifier.minify(file, {
            collapseWhitespace: true,
            caseSensitive: true,
            removeComments: true,
            removeRedundantAttributes: true
        });
        cb(null, minifiedFile);
    }
    catch (err) {
        cb(err);
    }
}
function processingSass(path, ext, file, cb) {
    try {
        var result = sass.renderSync({
            file: path,
            data: file,
            outputStyle: 'compressed'
        });
        cb(null, result.css);
    }
    catch (err) {
        cb(err);
    }
}
function isProduction() {
    return environment === 'production' || false;
}
function fileIsStyleMain(file) {
    return path.basename(file.path, path.extname(file.path)).indexOf("main") != -1;
}
function fileIsConfigurations(file) {
    return path.basename(file.path, path.extname(file.path)).indexOf("configurations") != -1;
}

gulp.task('htmlTemplate', function() {
    gulp.src(dest + '/index.html')
        .pipe(preprocess({context: { JIRA: environment === 'collaudo'}})) //To set environment variables in-line
        .pipe(gulp.dest(dest))
});