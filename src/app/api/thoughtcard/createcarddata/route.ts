import { connect } from "@/dbConfig/dbConfig";
import ThoughtCard from "@/models/thoughtCardModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { title, content, tags } = reqBody;

        const newThoughtCard = new ThoughtCard({
            title,
            content,
            tags,
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
