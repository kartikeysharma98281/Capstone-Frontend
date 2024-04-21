import JobPosting from "../models/PostJob.js"; // Import the JobPost model

export const jobPost = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            organizationName,
            monthlyStipend,
            location,
        } = req.body;

        console.log(req.body);

        const newJobPost = new JobPosting({
            title,
            description,
            requirements,
            organizationName,
            monthlyStipend, 
            location,
        });

        const savedJobPost = await newJobPost.save();

        res.status(201).json(savedJobPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getJobPost = async (req, res) => {
    try {
        // console.log("Get Job Post");
        const jobPosts = await JobPosting.find();
        res.status(200).json(jobPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}