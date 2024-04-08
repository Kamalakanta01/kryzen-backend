let mongoose = require("mongoose");

let todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["rework", "in-progress", "done"],
        default: "in-progress"
    },
    date: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModule"
    }
}, { timestamps: true });

let todosModule = mongoose.model("todo", todoSchema);

module.exports = { todosModule };