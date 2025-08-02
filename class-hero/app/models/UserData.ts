import mongoose, { Schema, Model, Document } from 'mongoose'

interface UserType extends Document {
    fname: string,
    lname: string,
    email: string,
    ph: string,
    pw: string,
    type: string,
    account_type: string
    created_at: Date
}

const UserSchema: Schema<UserType> = new Schema({
    fname: String,
    lname: String,
    email: String,
    ph: String,
    pw: String,
    type: String,
    account_type: String,
    created_at: Date
})

const UserData: Model<UserType> = mongoose.models.User ? (mongoose.models.User as Model<UserType>) : (mongoose.model<UserType>('User', UserSchema))

export default UserData