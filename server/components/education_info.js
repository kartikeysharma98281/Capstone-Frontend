import Education from '../models/Education.js';

// Create education info
export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    const savedEducation = await education.save();
    res.status(201).json(savedEducation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read education info
export const getEducation = async (req, res) => {
  try {
    const education = await Education.findOne();
    if (!education) {
      return res.status(404).json({ msg: 'Education info not found' });
    }
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update education info
export const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEducation = await Education.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEducation) {
      return res.status(404).json({ msg: 'Education info not found' });
    }
    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete education info
export const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEducation = await Education.findByIdAndDelete(id);
    if (!deletedEducation) {
      return res.status(404).json({ msg: 'Education info not found' });
    }
    res.status(200).json({ msg: 'Education info deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
