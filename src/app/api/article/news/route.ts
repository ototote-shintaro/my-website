import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
	const { data, error } = await supabase
		.from('posts')
		.select('*')
		.order('createdAt', { ascending: false })
		.limit(6)

	if (error) {
		return NextResponse.json(error);
	}

	return NextResponse.json(data, { status: 200 });
}
