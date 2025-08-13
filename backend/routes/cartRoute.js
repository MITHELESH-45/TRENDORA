import express from 'express';
import authUser from '../middleware/auth.js';
import { addToCart,getUserCart,upadateCart } from '../controllers/CartController.js';


const cartRouter=express.Router()


cartRouter.post('/get',authUser,getUserCart);
cartRouter.post('/add',authUser,addToCart);
cartRouter.post('/update',authUser,upadateCart);


export default cartRouter;