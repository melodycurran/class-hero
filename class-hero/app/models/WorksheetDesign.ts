import mongoose, { Schema, Model, Document } from 'mongoose'

interface WorksheetDesignType extends Document {
    name: string,
    width: string,
    height: string,
    jsonTemplate: object,
    userId: string
}

const WorksheetDesignSchema: Schema<WorksheetDesignType> = new Schema({
    name: String,
    width: String,
    height: String,
    jsonTemplate: Object,
    userId: String
})

const WorksheetDesign: Model<WorksheetDesignType> = mongoose.models.WorksheetDesign ? (mongoose.models.WorksheetDesign as Model<WorksheetDesignType>) : (mongoose.model<WorksheetDesignType>('WorksheetDesign', WorksheetDesignSchema))

export default WorksheetDesign