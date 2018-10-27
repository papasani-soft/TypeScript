var Customer5 = /** @class */ (function () {
    function Customer5() {
        this._customerName = "";
    }
    Object.defineProperty(Customer5.prototype, "CustomerName", {
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
    Customer5.prototype.Validate = function () {
        alert("test");
    };
    return Customer5;
}());
//# sourceMappingURL=Customer5.js.map