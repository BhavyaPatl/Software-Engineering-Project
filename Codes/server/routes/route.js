import express from 'express';

import { userSignup , userLogin, forgot_password, verify_otp} from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { sellerSignup, sellerLogin} from '../controller/seller-controller.js'
import { addProduct } from '../controller/addProduct-controller.js';
import { authenticateTokenSeller } from '../middleware/authentication.js';


const router = express.Router();

router.post('/sellersignup',sellerSignup);
router.post('/sellerlogin',sellerLogin);

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.post('/forgot-password',forgot_password);
router.post('/verify-otp',verify_otp);

router.get('/products',getProducts);
router.get('/product/:id', getProductById);

router.post('/addproduct', authenticateTokenSeller, addProduct);

export default router;
 