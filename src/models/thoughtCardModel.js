import mongoose from "mongoose";

const thoughtCardSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a Title"],
        },
        content: {
            type: String,
            required: [true, "Please provide a Content"],
        },
        tags: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true },
);

const ThoughtCard = mongoose.models.thoughtcard || mongoose.model("thoughtcard", thoughtCardSchema);

export default ThoughtCard;
