import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Grid, Card, CardContent, CardMedia, Select, MenuItem, InputLabel, FormControl, ThemeProvider, createTheme } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { addProduct } from "../../../service/api";
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const categories = [
  'Top Offers',
  'Grocery',
  'Mobile',
  'Fashion',
  'Electronics',
  'Home',
  'Appliances',
  'Beauty'
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
    },
  },
  typography: {
    allVariants: {
      color: '#FFFFFF',
    },
  },
});

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: '',
    category: '',
    url: '',
    detailUrl: '',
    title: {
      shortTitle: '',
      longTitle: '',
    },
    price: {
      mrp: '',
      cost: '',
      discount: '',
    },
    quantity: '',
    description: '',
    discount: '',
    tagline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProduct((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Product details submitted:', product);

    const response = await addProduct(product);
    
    if (!response) return;
    navigate('./');
  };

  return (
    <ThemeProvider theme={theme}>
    <Box className="add-product-container gradient-background">
      <Typography variant="h4" align="center" gutterBottom className="page-title">
        Add a New Product
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={4} className="form-paper glass-effect">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Product ID"
                    name="id"
                    fullWidth
                    variant="outlined"
                    value={product.id}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                      labelId="category-label"
                      name="category"
                      value={product.category}
                      onChange={handleChange}
                      label="Category"
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Image URL"
                    name="url"
                    fullWidth
                    variant="outlined"
                    value={product.url}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Detail Image URL"
                    name="detailUrl"
                    fullWidth
                    variant="outlined"
                    value={product.detailUrl}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Short Title"
                    name="title.shortTitle"
                    fullWidth
                    variant="outlined"
                    value={product.title.shortTitle}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Long Title"
                    name="title.longTitle"
                    fullWidth
                    variant="outlined"
                    value={product.title.longTitle}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="MRP"
                    name="price.mrp"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={product.price.mrp}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Cost"
                    name="price.cost"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={product.price.cost}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Discount"
                    name="price.discount"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={product.price.discount}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Quantity"
                    name="quantity"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={product.quantity}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Discount Tag"
                    name="discount"
                    fullWidth
                    variant="outlined"
                    value={product.discount}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    name="description"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    value={product.description}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Tagline"
                    name="tagline"
                    fullWidth
                    variant="outlined"
                    value={product.tagline}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>

              <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<AddPhotoAlternateIcon />}
                  className="submit-button glass-effect"
                >
                  Add Product
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="product-preview glass-effect">
            <CardMedia
              component="img"
              height="200"
              image={product.url || 'https://via.placeholder.com/300'}
              alt={product.title.shortTitle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title.shortTitle || 'Product Title'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category || 'Not specified'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description || 'Product description will appear here.'}
              </Typography>
              <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                Price: ${product.price.cost || '0.00'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                MRP: ${product.price.mrp || '0.00'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discount: {product.price.discount || '0%'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity: {product.quantity || '0'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tagline: {product.tagline || 'Product tagline'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
};

export default AddProduct;

