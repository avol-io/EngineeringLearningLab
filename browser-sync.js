'use strict';

module.exports = (function () {
    return {
        options: {
            "port": 8080,
            "https": false,
            "open": true,
            "server": {
                baseDir: ["./dist", "./"]
            }
        }
    }
})();

