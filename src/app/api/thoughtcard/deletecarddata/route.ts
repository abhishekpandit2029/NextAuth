import { connect } from "@/dbConfig/dbConfig";
import ThoughtCard from "@/models/thoughtCardModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();

        // Ensure that an ID is provided
        if (!id) {
            return NextResponse.json({ error: "Something went wrong, please try again later" }, { status: 400 });
        }

        // Find the thought card by ID and delete it
        const deletedThoughtCard = await ThoughtCard.findByIdAndDelete(id);

        // If the thought card is not found
        if (!deletedThoughtCard) {
            return NextResponse.json({ error: "Something went wrong, please try again later" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Content deleted successfully",
            success: true,
            deletedThoughtCard,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
