var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer4 = /** @class */ (function () {
    function Customer4() {
        this.CustomerName = "";
    }
    Customer4.prototype.Validate = function () {
        alert("test");
    };
    return Customer4;
}());
var SomeOtherCustomer = /** @class */ (function (_super) {
    __extends(SomeOtherCustomer, _super);
    function SomeOtherCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomeOtherCustomer.prototype.Validate = function () {
        alert("this is a new customer");
    };
    return SomeOtherCustomer;
}(Customer4));
//# sourceMappingURL=Customer4.js.map