import User from "../models/User.js"

// Update User CartData : /api/cart/update



export const updateCart = async (req, res)=>{
    try {
        const userId=req.userId;
        const { cartItems } = req.body
        console.log(userId,cartItems);
        const result=await User.findByIdAndUpdate(userId,{cartItems})
        console.log(result);
        res.json({ success : true, message: "Cart Updated"})
    } catch (error) {
        console.log(error.message)
        res.json({ success : false, message: error.message})
    }
}