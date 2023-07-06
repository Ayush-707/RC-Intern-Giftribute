const Flower = require('../../Database/Models/Flowers');
const Gift = require('../../Database/Models/GiftsHome')

exports.getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    //console.log('hello')

    res.status(200).json(flowers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllGifts = async (req, res) => {
  try {
    const gifts = await Gift.find();
    console.log('hello')

    res.status(200).json(gifts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

