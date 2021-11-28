import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import UserService from "./userService.js"

export default class EmployeeService extends UserService {

    constructor(loggerService) {
        super(loggerService);
        
        this.requiredFields = [
            'id',
            'firstName',
            'lastName',
            'age',
            'city',
            'salary'
        ];

        console.log("EmployeeService yüklendi");       

    }

    add(user) {
        if (this.valid(user, this.requiredFields)) {
            this.employees.push(user);
        } else {
            this.log(user);
        }
    }

    load() {
        for (const user of users) {
            if (user.type == "employee" && this.valid(user, this.requiredFields)) {
                this.employees.push(user);
            }
        }
    }

    list() {
        return this.employees;
    }

}