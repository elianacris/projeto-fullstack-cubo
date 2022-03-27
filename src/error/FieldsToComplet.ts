import { BaseError } from "./BaseError";

export class FieldsToComplet extends BaseError{
    constructor(){
        super("To an incomplete field")
    }
}