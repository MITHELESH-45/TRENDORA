import express from 'express';
import adminauth from '../middleware/adminauth.js'
import authUser from '../middleware/auth.js';
import {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,updateStatus,userOrders} from '../controllers/orderController.js';

const orderRouter=express.Router()

//admin features
orderRouter.post('/list',adminauth,allOrders)
orderRouter.post('/status',adminauth,updateStatus)

//payment features

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
orderRouter.post('/stripe',authUser,placeOrderStripe)

//User Feature

orderRouter.post('/userorders',authUser,userOrders)


export default orderRouter;