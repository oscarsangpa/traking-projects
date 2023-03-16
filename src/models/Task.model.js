import { model, Schema } from "mongoose";

const taskSchema = Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    state: {
        type: Boolean,
        default: false,
    },
    deadLine: {
        type: Date,
        required: true,
        default: Date.now()
    },
    priority: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High']
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
},
    {
        timestamp: true
    })

const Task = model('Task', taskSchema)
export default Task

