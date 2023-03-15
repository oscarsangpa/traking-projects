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
    deliveryDate: {
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
    timestamps: true,
    toJSON: {
        transform: (document, returnedObjectId) => {
            returnedObjectId.id = returnedObjectId._id
            delete returnedObjectId.__v
            return returnedObjectId
        }
    }
});

const Project = model('Project', projectSchema)
export default Project