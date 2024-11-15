import Seller from '../model/seller-schema.js';


export const sellerSignup = async(request,response) =>{
    try{

       const exist = await Seller.findOne({username:request.body.username});
        
       if(exist){
        return response.status(401).json({message:'Username already exist'});
       }

        const seller = request.body;
        const newSeller = new Seller(seller);
        await newSeller.save();

        response.status(200).json({message: seller });
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}

export const sellerLogin = async (request,response) => {
    try{
        const username = request.body.username;
        const password = request.body.password;

        let user = await Seller.findOne({username: username, password: password});

        if(user){
            return response.status(200).json({data : user});
        }
        else{
            response.status(401).json('Invalid Login');
        }
    }
    catch(error){
        response.status(500).json('Error',error.message);
    }
}