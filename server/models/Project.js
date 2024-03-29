import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
     project1:{
        title:{
            type: String,
            required: true
        },
        role:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        link:{
            type: String,
            required: true
        }
     },
     project2:{
        title:{
            type: String,
            required: true
        },
        role:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        link:{
            type: String,
            required: true
        }
     },
     project3:{
        title:{
            type: String,
            required: true
        },
        role:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        link:{
            type: String,
            required: true
        }
     }

});

const Projects = mongoose.model("Projects", ProjectSchema);
export default Projects;