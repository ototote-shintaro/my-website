"use client";

import { supabase } from '@/app/utils/supabaseClient';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

const CreateArticle = () => {
	const router = useRouter();
	const [id, setId] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [imageUrl, setImageUrl] = useState<string | undefined>();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		const API_URL = process.env.NEXT_PUBLIC_API_URL;
  	await fetch(`${API_URL}/api/article`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id, title, content, imageUrl })
		});

		setLoading(false);

		router.push('/');
		router.refresh();
	};

	const handleImageChange = async (
		e: ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		if (!e.target.files || e.target.files.length == 0) return;

		const file = e.target.files[0]
		const filePath = `posts/${file.name}`
		const { error } = await supabase.storage
			.from('website-images')
			.upload(filePath, file)

		if (error) {
			// TODO::error handling
			console.log(error);
			return;
		}

		const { data } = supabase.storage.from('website-images').getPublicUrl(filePath)
		setImageUrl(data.publicUrl);
	}

	return (
		<div className='min-h-screen px-4 md:px-[15%]'>
			<h2 className='text-2xl font-bold mb-4 '>新規作成</h2>
			<form
				className='bg-slate-200 p-6 rounded shadow-lg'
				onSubmit={handleSubmit}
			>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold pb-2'>URL</label>
					<input
						type='text'
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setId(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold pb-2'>タイトル</label>
					<input
						type='text'
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className='mb-4'>
					<label className='text-gray-700 text-sm font-bold pb-2'>本文</label>
					<textarea
						className='shadow border rounded w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='file-upload'>
						<span className='text-blue-500 cursor-pointer'>画像アップロード</span>
						<input
							id='file-upload'
							name='file-upload'
							type='file'
							className='sr-only'
							accept='image/png, image/jpeg'
							onChange={handleImageChange}
						/>
					</label>
					<p>{imageUrl?.split("/").pop()}</p>
					<Image
						className='py-2'
						src={imageUrl || ''}
						alt=''
						width='500'
						height='400'
					/>
				</div>
				<button
					type='submit'
					className={`px-4 py-2 border rounded-md ${
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

export default CreateArticle