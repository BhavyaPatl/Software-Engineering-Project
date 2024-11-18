import Seller from '../model/seller-schema.js';
import {sendMailtoSeller} from '../Mail/email.js';
import { generateToken } from '../config/jwtUtils.js';
import bcrypt from 'bcrypt';

export const sellerSignup = async(request,response) =>{
    try{

       const exist = await Seller.findOne({username:request.body.username});
        
       if(exist){
        return response.status(401).json({message:'Username already exist'});
       }

        let seller = request.body;

        const hashedPassword = await bcrypt.hash(seller.password, 10);
    

        const newSeller = new Seller({
            ...seller,
            password: hashedPassword
        });
        await newSeller.save();

        const username = newSeller.username;
        const email = newSeller.email;

        sendMailtoSeller(username, email)
        .then((result) => console.log("Email sent successfully:", result))
        .catch((error) => console.error("Error:", error.message));

        const token = generateToken({
            _id: newSeller._id,
            username: newSeller.username,
            role: "Seller"
        });

        // seller.token = token;

        return response.status(200).json({seller : newSeller,token});
    }
    catch(error){
        return response.status(500).json({message:error.message});
    }
}

export const sellerLogin = async (request,response) => {
    try{
        const username = request.body.username;
        const password = request.body.password;

        let user = await Seller.findOne({username: username});

        if(!user){
            return response.status(401).json('Invalid Login');
        }

        const passMatch = await bcrypt.compare(password, user.password);

        if(passMatch){

            const token = generateToken({
                _id: user._id,
                username: user.username,
                role: "Seller"
            });

            // user.token = token;
            return response.status(200).json({user,token});
        }
        else{
            return response.status(401).json('Invalid Login');
        }
    }
    catch(error){
        return response.status(500).json('Error',error.message);
    }
}