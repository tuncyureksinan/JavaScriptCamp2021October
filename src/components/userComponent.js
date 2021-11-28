import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/EmployeeService.js"


let logger1 = new MongoLogger();
let customerService = new CustomerService(logger1);
let userService = new UserService(logger1);
let employeeService = new EmployeeService(logger1);

// let user1 = new User(1,"Engin","Demiroğ","Ankara", 10);
// let user2 = new User(2,"Baran","Gökçekli","Muğla", 12);
// userService.add(user1);
// userService.add(user2);

userService.load();
customerService.load();
employeeService.load();

console.log(userService.list());
console.log(employeeService.list());
console.log(customerService.list());
console.log(userService.getErrors());
console.log(employeeService.getErrors());
console.log(customerService.getErrors());

// console.log(userService.getErrors());
// console.log(userService.getById(2));






// let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");
// customerToAdd.type = "customer"

// userService.add(customerToAdd)
// console.log(userService.customers)
// console.log(userService.employees)
// console.log(userService.errors)
// console.log(userService.getUsersSorted())
