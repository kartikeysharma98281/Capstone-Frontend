import express from 'express';
import { signup, login } from '../components/auth_info.js';
import { createEducation, getEducation, updateEducation, deleteEducation } from '../components/education_info.js';
import { createInfo, getInfo, updateInfo, deleteInfo } from '../components/full_info.js';
import { createProject, getProjects, updateProject, deleteProject } from '../components/project_info.js';
import { jobPost, getJobPost } from '../components/jobPost.js';

const router = express.Router();

// Authentication routes
router.post('/signup', signup);
router.post('/login', login);

// Education routes
router.post('/education', createEducation);
router.get('/education', getEducation);
router.put('/education/:id', updateEducation);
router.delete('/education/:id', deleteEducation);

// Full info routes
router.post('/info', createInfo);
router.get('/info', getInfo);
router.put('/info/:id', updateInfo);
router.delete('/info/:id', deleteInfo);

// Project routes
router.post('/projects', createProject);
router.get('/projects', getProjects);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);


// Job posting routes
router.post('/job-posting', jobPost);
router.get('/job-posting', getJobPost);

export default router;
