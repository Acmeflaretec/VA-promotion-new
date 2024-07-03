const Payment = require('../models/payment')


const createPayment = async (req, res) => {
  // console.log('sam12');
  const { name,email,phone,url,location,type } = req.body
  // console.log('sam1',name,email,phone,url,location,type );
  const image = req?.file?.filename
  
  try {
      const payment = new Payment({ name,email,phone,url,location,type,paymentimage:image});
      await payment.save();
      res.status(201).json({ message: ' created successfully', data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const updatePaymentById = async (req, res) => {
  try {
    const { _id, status } = req.body;

    const user = await Payment.findById(_id);
    if(status === 'true') {
      user.status = 'false'
    }else{
      user.status = 'true'
    }
    await user.save()
    res.json({ message: ' updated successfully', data: user });
  } catch (error) { 
      res.status(400).json({ error: error.message });
  }
};
const updateVideo = async (req, res) => {
  try {
    const { _id, status ,isActive} = req.body;
    // console.log(_id, status ,isActive);

    const user = await Payment.findById(_id);
    if(!user){
      return res.status(404).json({ message: ' not found' });
    }
    if(status) user.status = status
    if(isActive) user.isActive = isActive
    // if(url) user.url = url
    // if(description) user.description = description
    // if(status) user.status = status
    // if(image) user.image = image
    
    await user.save()
    res.json({ message: ' updated successfully', data: user });
  } catch (error) { 
      res.status(400).json({ error: error.message });
  }
};

const getPayment = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
      const payment = await Payment.find().sort({ createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
          .exec();

      res.json({ data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};
const getChannel = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
      const payment = await Payment.find({type: 'channel'}).sort({ createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
          .exec();

      res.json({ data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};
const getVideo = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
      const payment = await Payment.find({type: 'video'}).sort({ createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
          .exec();

      res.json({ data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getIsActiveVideo = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const payment = await Payment.find({ type: 'video', isActive: true }).sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    res.json({ data: payment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deletePaymentById = async (req, res) => {
  try {
      const payment = await Payment.findByIdAndDelete(req.params.id);
      res.json({ message: ' deleted successfully', data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
      const payment = await Payment.findById(req.params.id);
      
      if (!payment) {
          return res.status(404).json({ message: ' not found' });
      }
      
      res.json({ data: payment });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports ={
  createPayment,
  updatePaymentById,
  getPayment,
  deletePaymentById,
  getPaymentById,
  getChannel,
  getVideo,
  updateVideo,
  getIsActiveVideo,
  
}