import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await connectMongo();

    const newContact = await Contact.create({ name, email, message });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error("Contact POST Error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
