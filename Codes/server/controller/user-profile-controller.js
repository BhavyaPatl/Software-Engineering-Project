import User from '../model/user-schema.js';  


export const getUserProfile = async (req, res) => {
    try {
        
        const { username } = req.query;  
        console.log(username)
        
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        res.json({
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            phone: user.phone,
            cart: user.cart,  
     
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
