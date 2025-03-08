import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Assets from "../../../../../../models/assets";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const assets = await Assets.find({ type: "btn" });

    return NextResponse.json({
      success: true,
      data: assets,
      message: "Data fetched successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong, please try again",
    });
  }
}
