const Gift = require('../../Database/Models/GiftsHome');

exports.addProduct = async (req, res) => {
  try {
    const { image, name, description, price } = req.body;
    console.log('new product is ', req.body)
    // Create a new gift product
    const newProduct = new Gift({
      image,
      name,
      description,
      price
    });

    // Save the new product to the database
    await newProduct.save();

    res.status(200).json({ success: true, message: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Failed to add product' });
  }
};

exports.removeProduct = async (req, res) => {
    try {
      
      console.log(req.body)
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, message: 'Failed to remove product' });
    }
  };
  