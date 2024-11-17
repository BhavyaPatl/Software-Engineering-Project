import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import Header from './sellerheader/sellerheader';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './SellerPage.css';
import { useNavigate } from 'react-router-dom';


function SellerPage() {

  const navigate = useNavigate();

  const handleAddProduct = () => {
    
    navigate('/add-product');
  };

  return (
    <div>
        <Header />
      
      {/* Hero Section */}
      <Box className="hero-section" sx={{ textAlign: 'center', padding: 5, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h3" gutterBottom>
          Start Selling Online with Ease
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Reach millions of customers and grow your business with our platform.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddCircleIcon />}
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: 5 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Why Sell with Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
              <CardContent>
                <ShoppingCartIcon color="primary" sx={{ fontSize: 50 }} />
                <Typography variant="h6" gutterBottom>
                  45 Crore+ Customers
                </Typography>
                <Typography color="text.secondary">
                  Connect with millions of customers nationwide to boost your sales.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
              <CardContent>
                <AddCircleIcon color="primary" sx={{ fontSize: 50 }} />
                <Typography variant="h6" gutterBottom>
                  Secure Payments
                </Typography>
                <Typography color="text.secondary">
                  Receive secure and timely payments every week without any hassle.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
              <CardContent>
                <ShoppingCartIcon color="primary" sx={{ fontSize: 50 }} />
                <Typography variant="h6" gutterBottom>
                  Seller Support
                </Typography>
                <Typography color="text.secondary">
                  Access 24/7 seller support to help you through any challenges.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#051922', padding: 3, textAlign: 'center', color: 'white' }}>
        <Typography variant="body1">© 2024 DealsDone | All rights reserved.</Typography>
      </Box>
    </div>
  );
}

export default SellerPage;
