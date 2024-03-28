import mongoose, { Schema } from "mongoose";


const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,        // Who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,        // Whom to subscribe
        ref: User
    }
}, {timestamps: true})


export const Subscription = mongoose.model("Subscription", subscriptionSchema);