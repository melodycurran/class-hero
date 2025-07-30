import mongoose, { Schema, Model, Document } from 'mongoose'

interface WorksheetType extends Document {
    image: string,
    alt: string,
    title: string,
    price: number,
    long_desc: string,
    short_desc: string
}

//Change schema to reflect the most accurate shape
const worksheetSchema: Schema<WorksheetType> = new Schema({
    image: String,
    alt: String,
    title: String,
    price: Number,
    long_desc: String,
    short_desc: String
})

const Worksheet: Model<WorksheetType> = mongoose.models.Worksheet ? (mongoose.models.Worksheet as Model<WorksheetType>) : (mongoose.model<WorksheetType>('Worksheet', worksheetSchema))

export default Worksheet