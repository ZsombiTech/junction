import mongoose from "mongoose";
const { UserWebshop } = require("./webshops");

const creditcard_schema = new mongoose.Schema({
    number: String,
    name: String,
    expiration: String,
    cvv: String,
    created_at: Date,
    updated_at: Date,
});

const user_schema = new mongoose.Schema({
    names: [String],
    emails: [String],
    addresses: [String],
    phones: [String],
    credit_cards: [creditcard_schema],
    created_at: Date,
    updated_at: Date,
    webshops_data: [ UserWebshop.schema ],
});

const user_data_schema = new mongoose.Schema({
    name: String,
    email: String,
    address: {
            street: String,
            city: String,
            state: String,
            zip: String
        },
    phone: String,
    date_of_birth: Date,
    creditCard: {
            type: String,
            number: String,
            expiration: Date,
            cvv: String
        },
    gender: String,
});

// export schemas
module.exports = {
    User: mongoose.model("User", user_schema),
    UserData: mongoose.model("UserData", user_data_schema),
    CreditCard: mongoose.model("CreditCard", creditcard_schema),
};