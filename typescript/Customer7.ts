﻿
import { Address } from "./Address";
export class Customer7 {
    protected name: string = "";
    private _customerName: string = "";
    public addressobj: Address = new Address();
    public set CustomerName(value: string) {
        if (value.length == 0) {
            throw "Customer Name is required";
        }
        this._customerName = value;
    }
    public get CustomerName() {
        return this._customerName;
    }
    Add() {
    }
    Validate() {
        alert("test");
    }
}
