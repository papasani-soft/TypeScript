"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address");
var Customer7 = /** @class */ (function () {
    function Customer7() {
        this.name = "";
        this._customerName = "";
        this.addressobj = new Address_1.Address();
    }
    Object.defineProperty(Customer7.prototype, "CustomerName", {
        get: function () {
            return this._customerName;
        },
        set: function (value) {
            if (value.length == 0) {
                throw "Customer Name is required";
            }
            this._customerName = value;
        },
        enumerable: true,
        configurable: true
    });
    Customer7.prototype.Add = function () {
    };
    Customer7.prototype.Validate = function () {
        alert("test");
    };
    return Customer7;
}());
exports.Customer7 = Customer7;
//# sourceMappingURL=Customer7.js.map