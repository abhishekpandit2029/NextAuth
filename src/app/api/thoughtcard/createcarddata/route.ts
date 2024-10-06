import { connect } from "@/dbConfig/dbConfig";
import getThoughtCardModel from "@/models/thoughtCardModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, title, content, tags, isSoftDelete } = reqBody;

        if (!username) {
            return NextResponse.json({ error: "Username is required" }, { status: 400 });
        }

        const ThoughtCard = getThoughtCardModel(username);

        const newThoughtCard = new ThoughtCard({
            title,
            content,
            tags,
            isSoftDelete,
            username
        });

        const savedThoughtCard = await newThoughtCard.save();

        return NextResponse.json({
            message: "Thought created successfully",
            success: true,
            savedThoughtCard,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
