"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(name, surname, email, password, venue, id) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._password = password;
        this._venue = venue;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "venue", {
        get: function () {
            return this._venue;
        },
        set: function (value) {
            this._venue = value;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.stringify = function () {
        return this.name + ' ' + this.surname;
    };
    return User;
}());
exports.User = User;

//# sourceMappingURL=user.model.js.map
