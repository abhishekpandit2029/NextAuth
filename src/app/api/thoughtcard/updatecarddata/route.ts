import { connect } from "@/dbConfig/dbConfig";
import ThoughtCard from "@/models/thoughtCardModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PATCH(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { id, title, content, tags } = reqBody;

        // Ensure that an ID is provided
        if (!id) {
            return NextResponse.json({ error: "Something went wrong, please try again later" }, { status: 400 });
        }

        // Find the thought card by ID and update it
        const updatedThoughtCard = await ThoughtCard.findByIdAndUpdate(
            id,
            { title, content, tags },
            { new: true } // Returns the updated document
        );

        // If the thought card is not found
        if (!updatedThoughtCard) {
            return NextResponse.json({ error: "Something went wrong, please try again later" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Content updated successfully",
            success: true,
            updatedThoughtCard,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
