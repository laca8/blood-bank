const Donor = require("../models/Donor");
const addDonor = async (req, res) => {
  try {
    const donor = await Donor.create(req.body);
    return res.json(donor);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  addDonor,
  getDonors,
};
