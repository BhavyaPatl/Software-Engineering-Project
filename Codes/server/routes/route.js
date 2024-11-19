import express from 'express';

import { userSignup , userLogin, forgot_password, verify_otp} from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { sellerSignup, sellerLogin,forgot_password_seller,verify_otp_seller} from '../controller/seller-controller.js'
import { addProduct } from '../controller/addProduct-controller.js';
import { authenticateTokenSeller } from '../middleware/authentication.js';
import { submitReview } from '../controller/submitReview-controller.js'
import { getreviews } from '../controller/getreviews-controller.js'


const router = express.Router();

router.post('/sellersignup',sellerSignup);
router.post('/sellerlogin',sellerLogin);

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.post('/forgot-password',forgot_password);
router.post('/verify-otp',verify_otp);

router.post('/forgot-password-seller',forgot_password_seller);
router.post('/verify-otp-seller',verify_otp_seller);

router.get('/products',getProducts);
router.get('/product/:id', getProductById);

router.post('/addproduct', authenticateTokenSeller, addProduct);

router.post('/submitreview', submitReview);
router.get('/reviews/:productId', getreviews);


export default router;
 