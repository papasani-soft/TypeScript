class Customer4 {
    public CustomerName: string = "";
    Validate() {
        alert("test"); 
    }
}
class SomeOtherCustomer extends Customer4 {
    Validate() {
        alert("this is a new customer");
    }
}