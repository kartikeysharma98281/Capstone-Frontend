import Projects from '../models/Project.js';

// Create project info
export const createProject = async (req, res) => {
  try {
    const projects = new Projects(req.body);
    const savedProjects = await projects.save();
    res.status(201).json(savedProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read project info
export const getProjects = async (req, res) => {
  try {
    const projects = await Projects.findOne();
    if (!projects) {
      return res.status(404).json({ msg: 'Projects info not found' });
    }
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update project info
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProjects = await Projects.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProjects) {
      return res.status(404).json({ msg: 'Projects info not found' });
    }
    res.status(200).json(updatedProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete project info
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProjects = await Projects.findByIdAndDelete(id);
    if (!deletedProjects) {
      return res.status(404).json({ msg: 'Projects info not found' });
    }
    res.status(200).json({ msg: 'Projects info deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
