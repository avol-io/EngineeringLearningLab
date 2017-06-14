"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./user.model");
var Speaker = (function (_super) {
    __extends(Speaker, _super);
    function Speaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Speaker;
}(user_model_1.User));
exports.Speaker = Speaker;

//# sourceMappingURL=speaker.models.js.map
