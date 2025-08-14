import mongoose, { Schema, Model, Document } from 'mongoose'

interface UserType extends Document {
    _id: string,
    fname: string,
    lname: string,
    email: string,
    ph: string,
    pw: string,
    type: string,
    account_type: string,
    created_at: Date,
}

const UserSchema: Schema<UserType> = new Schema({
    _id: String,
    fname: String,
    lname: String,
    email: String,
    ph: String,
    pw: String,
    type: String,
    account_type: String,
    created_at: { type: Date, default: Date.now }
}, {
    collection: 'users'
})

const UserData: Model<UserType> = mongoose.models.UserData ? (mongoose.models.UserData as Model<UserType>) : (mongoose.model<UserType>('UserData', UserSchema))

export default UserData