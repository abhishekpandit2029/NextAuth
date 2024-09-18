import { connect } from "@/dbConfig/dbConfig";
import ThoughtCard from "@/models/thoughtCardModel";
import { NextResponse } from "next/server";

connect();

export async function GET() {
    try {
        // Fetch all thought cards from the database
        const thoughtCards = await ThoughtCard.find();

        // Return the fetched data as JSON
        return NextResponse.json({
            message: "Thoughts fetched successfully",
            success: true,
            thoughtCards, // Send the list of thought cards
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
