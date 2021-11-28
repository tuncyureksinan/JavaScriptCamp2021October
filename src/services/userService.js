import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import { users } from "../data/users.js"
import DataError from "../models/dataError.js"


export default class UserService {

    constructor(loggerService)  {
        this.users = [];
        this.customers = [];
        this.employees = [];
        this.errors = [];
        this.loggerService = loggerService;
    

        this.requiredFields = [
            'id',
            'firstName',
            'lastName',
            'age',
            'city'
        ];

        console.log("UserService yüklendi");
    }

    add(user) {
        if (this.valid(user, this.requiredFields)) {
            this.users.push(user);
        } else {
            this.log(user);
        }
    }

    valid(user, requiredFields) {
        let isValid = false;

        for (const field of requiredFields) {
            if (user[field] && this.validAge(user)) {
                isValid = true;
            } else {

                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, user));
                
                isValid = false;
                continue; 
            }
        }

        return isValid;
    }

    validAge(user) {
        if (Number.isNaN(Number.parseInt(+user.age))) {
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user));
            return false;
        }

        return true;
    }

    log(user) {
        this.loggerService.log(user)
    }

    load() {
        for (const user of users) {
            this.add(user);
        }
    }

    list() {
        return this.users;
    }

    getEmployees() {
        return this.employees;
    }

    getUsers() {
        return this.users;
    }

    getCustomers() {
        return this.customers;
    }

    getErrors() {
        return this.errors;
    }

    getById(id) {
        return this.users.find(u=>u.id ===id);
    }

    getUsersSorted(){
        return this.users.sort((user1, user2) => {
            if(user1.firstName > user2.firstName){
                return 1;
            } else if(user1.firstName === user2.firstName){
                return 0;
            }else{
                return -1
            }
        });
    }

}