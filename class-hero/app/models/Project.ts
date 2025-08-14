import mongoose, { Schema, Model, Document } from 'mongoose'

interface ProjectType extends Document {
    projectId: string;
    projectName: string;
    width: string;
    height: string;
    jsonTemplate: string;
    userId: string;
    created_at: Date;
}

const ProjectSchema: Schema<ProjectType> = new Schema({
    projectId: { type: String, required: true },
    projectName: { type: String, required: true },
    width: { type: String, required: true },
    height: { type: String, required: true },
    jsonTemplate: { type: String, required: true },
    userId: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
}, {
    collection: 'worksheet_designs'
})

const Project: Model<ProjectType> = mongoose.models.Project
    ? (mongoose.models.Project as Model<ProjectType>)
    : (mongoose.model<ProjectType>('Project', ProjectSchema))

export default Project