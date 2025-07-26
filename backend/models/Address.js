import mongoose from "mongoose";

const addressSchema =new mongoose.Schema({
    userId: {type: String, reuired: true},
    firstName: {type: String, reuired: true},
    lastName: {type: String, reuired: true},
    email: {type: String, reuired: true},
    street: {type: String, reuired: true},
    city: {type: String, reuired: true},
    state: {type: String, reuired: true},
    zipcode: {type: Number, reuired: true},
    country: {type: String, reuired: true},
    phone: {type: String, reuired: true},
})

const Address = mongoose.models.address || mongoose.model('address', addressSchema)

export default Address