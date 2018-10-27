class Customer5 {
    private _customerName: string = "";
    public set CustomerName(value: string) {
        if (value.length == 0) {
            throw "Customer Name is required";
        }
        this._customerName = value;
    }
    public get CustomerName() {
        return this._customerName;
    }
    Validate() {
        alert("test");
    }
}
