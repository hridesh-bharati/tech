import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    demoLink: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true,
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
