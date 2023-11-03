"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateConcert = () => {
	const router = useRouter();

	const [title, setTitle] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [open, setOpen] = useState<string>("");
	const [start, setStart] = useState<string>("");
	const [venue, setVenue] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [memo, setMemo] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		const API_URL = process.env.NEXT_PUBLIC_API_URL;
  	await fetch(`${API_URL}/api/concert`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title, date, open, start, venue, price, memo })
		});

		setLoading(false);

		router.push('/concert');
		router.refresh();
	};

	return (
		<div className='min-h-screen py-8 px-4 md:px-[15%]'>
			<h2 className='text-2xl font-bold mb-4 '>新規作成</h2>

			<form
				className='bg-slate-200 p-6 rounded shadow-lg'
				onSubmit={handleSubmit}
			>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
					<input
						type='text'
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold mb-2'>日付</label>
					<input
						type='date'
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold mb-2'>開場</label>
					<input
						type='time'
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setOpen(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold mb-2'>開演</label>
					<input
						type='time'
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setStart(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold mb-2'>会場</label>
					<textarea
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setVenue(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold mb-2'>料金</label>
					<textarea
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold mb-2'>メモ（共演・プログラムなど）</label>
					<textarea
						className='shadow border rounded w-full py-12 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setMemo(e.target.value)}
					/>
				</div>
				<button
					type='submit'
					className={`px-2 py-4 border rounded-md ${
						loading
							? "bg-orange-300 cursor-not-allowed"
							: "bg-orange-400 hover:bg-orange-500"
					}`}
					disabled={loading}
				>
					投稿
				</button>
			</form>
		</div>
	)
}

export default CreateConcert;
