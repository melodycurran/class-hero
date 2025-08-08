import mongoose, { Schema, Model, Document } from 'mongoose'

interface WorksheetDesignType extends Document {
    projectId: string,
    projectName: string,
    width: string,
    height: string,
    jsonTemplate: object,
    userId: string,
    created_at: Date,
}

const WorksheetDesignSchema: Schema<WorksheetDesignType> = new Schema({
    projectId: String,
    projectName: String,
    width: String,
    height: String,
    jsonTemplate: Object,
    userId: String,
    created_at: Date
}, {
    collection: 'worksheet_designs'
})

const WorksheetDesign: Model<WorksheetDesignType> = mongoose.models.WorksheetDesign ? (mongoose.models.WorksheetDesign as Model<WorksheetDesignType>) : (mongoose.model<WorksheetDesignType>('WorksheetDesign', WorksheetDesignSchema))

export default WorksheetDesign