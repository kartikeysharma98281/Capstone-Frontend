import Info from '../models/Info.js';

// Create full info
export const createInfo = async (req, res) => {
  try {
    const info = new Info(req.body);
    const savedInfo = await info.save();
    res.status(201).json(savedInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read full info
export const getInfo = async (req, res) => {
  try {
    const info = await Info.findOne();
    if (!info) {
      return res.status(404).json({ msg: 'Info not found' });
    }
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update full info
export const updateInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = await Info.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedInfo) {
      return res.status(404).json({ msg: 'Info not found' });
    }
    res.status(200).json(updatedInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete full info
export const deleteInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInfo = await Info.findByIdAndDelete(id);
    if (!deletedInfo) {
      return res.status(404).json({ msg: 'Info not found' });
    }
    res.status(200).json({ msg: 'Info deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
