import mongoose from "mongoose";

const product_schema = new mongoose.Schema({
    name: String,
    subame: String,
    price: Number,
    quantity: Number,
    category: String,
    brand: String
});

const user_webshop_schema = new mongoose.Schema({
    id: String,
    purchases: [
        {
            date: Date,
            products: [product_schema],
            location: String,
        }
    ]
});    

const webshop_schema = new mongoose.Schema({
    id: String,
    name: String,
    url: String,
    created_at: Date,
    updated_at: Date,
    categories: [String],
    products: [{
            name: String,
            description: String,
            price: Number,
            category: String
        }],
});


// export schemas
module.exports = {
    UserWebshop: mongoose.model("UserWebshop", user_webshop_schema),
    Webshop: mongoose.model("Webshop", webshop_schema),
    Product: mongoose.model("Product", product_schema),
};