"use strict";
var Alert = (function () {
    function Alert(type, message) {
        this.type = type;
        this.message = message;
    }
    return Alert;
}());
Alert.TYPE_DANGER = 'danger';
Alert.TYPE_SUCCESS = 'success';
Alert.TYPE_INFO = 'info';
Alert.TYPE_WARNING = 'warning';
exports.Alert = Alert;

//# sourceMappingURL=alert.model.js.map
