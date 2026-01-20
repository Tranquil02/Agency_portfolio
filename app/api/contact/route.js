import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, whatsappNo, lookingFor, message } = body;

    if (!name || !email || !whatsappNo || !lookingFor) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const phone = String(whatsappNo).trim();

    if (!/^\+?\d{10,15}$/.test(phone)) {
      return NextResponse.json(
        { error: "Invalid WhatsApp number" },
        { status: 400 }
      );
    }

    const { error } = await supabaseServer
      .from("contact_us")
      .insert([
        {
          name,
          email,
          whatsapp_no: whatsappNo,
          looking_for: lookingFor,
          message
        }
      ]);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
