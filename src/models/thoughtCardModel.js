import mongoose from 'mongoose';

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
            required: false,
        },
        isSoftDelete: {
            type: Boolean,
            default: false,
            required: false,
        },
        username: {
            type: String,
            required: [true, "Please provide a username"],
        },
    },
    { timestamps: true }
);

const getThoughtCardModel = (username) => {
    const collectionName = `thoughtcard_${username}`;
    return mongoose.models[collectionName] || mongoose.model(collectionName, thoughtCardSchema);
};

export default getThoughtCardModel;
