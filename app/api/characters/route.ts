import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const params = searchParams.toString(); 

  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character?${params}`);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Veri alınamadı" }, { status: 500 });
  }
}