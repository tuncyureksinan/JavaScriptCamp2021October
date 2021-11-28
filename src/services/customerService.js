import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import UserService from "./userService.js"

export default class CustomerService extends UserService {

    constructor(loggerService) {
        super(loggerService);
        
        this.requiredFields = [
            'id',
            'firstName',
            'lastName',
            'age',
            'city',
            'creditCardNumber'
        ];

        console.log("CustomerService yüklendi");       

    }

    add(user) {
        if (this.valid(user, this.requiredFields)) {
            this.customers.push(user);
        } else {
            this.log(user);
        }
    }

    load() {
        for (const user of users) {
            if (user.type == "customer" && this.valid(user, this.requiredFields)) {
                this.customers.push(user);
            }
        }
    }

    list() {
        return this.customers;
    }

}