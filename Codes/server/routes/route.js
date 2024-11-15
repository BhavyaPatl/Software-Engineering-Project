import express from 'express';

import { userSignup , userLogin} from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { sellerSignup, sellerLogin} from '../controller/seller-controller.js'
import { addProduct } from '../controller/addProduct-controller.js';


const router = express.Router();

router.post('/sellersignup',sellerSignup);
router.post('/sellerlogin',sellerLogin);

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/product/:id', getProductById);

router.post('/addproduct',addProduct);

export default router;
 