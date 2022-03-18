const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


class User {
    constructor() {
        this._id = 0;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumberFormat(5);
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = 0;
        this.name = faker.company.companyName();
        this.address = [faker.address.streetAddress(),faker.address.city(),faker.address.state(),faker.address.zipCodeByState(),faker.address.country()];
    }
}

app.get("/api", (req,res)=>{
    res.json({msg: "hey"})
})

app.get("/api/users/new", (req,res)=>{
    res.json({count: 1, results: new User()});
})

app.get("/api/companies/new", (req,res)=>{
    res.json({count:1, results: new Company()});
})

app.get("/api/user/company", (req,res)=>{
    res.json({count: 1, user: new User(), company: new Company()});
})



app.listen( port, () => console.log(`Listening on port: ${port}`) );