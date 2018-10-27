var Customer6 = /** @class */ (function () {
    function Customer6() {
        this.name = "";
        this._customerName = "";
    }
    Object.defineProperty(Customer6.prototype, "CustomerName", {
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
    Customer6.prototype.Add = function () {
    };
    Customer6.prototype.Validate = function () {
        alert("test");
    };
    return Customer6;
}());
//# sourceMappingURL=Customer6.js.map