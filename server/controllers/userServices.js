const userModel = require('../model/User');

module.exports.findUserControllerDBService = async (city) => {
  try {
    const result = await userModel.find({ city: city });
    return result;
  } catch (error) {
    throw false;
  }
};
