import { supabase } from "@/app/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
	const { data, error } = await supabase.from('concerts').select('*').order('date', { ascending: false })

	if (error) {
		return NextResponse.json(error);
	}

	return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
	const AuthEmail = process.env.AUTH_EMAIL || ''
	const AuthPw = process.env.AUTH_PW || ''

	await supabase.auth.signInWithPassword({
		email: AuthEmail,
		password: AuthPw,
	})

	const { title, date, open, start, venue, price, memo } = await req.json();

	const { data, error } = await supabase
		.from('concerts').insert([{
			title, date, open, start, venue, price, memo, createdAt: new Date().toISOString()
		}]);

	if (error) {
		return NextResponse.json(error);
	}

	return NextResponse.json(data, { status: 201 });
}
