import { Schema, model } from "mongoose";

const projectSchema = Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    deadLine: {
        type: Date,
        default: Date.now(),
    },
    client: {
        type: String,
        trim: true,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    partners: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
})

const Project = model('Project', projectSchema)
export default Project