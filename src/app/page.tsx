import { headers } from 'next/headers';
import React from 'react';
import { Article } from './utils/types';
import YoutubeContent from './components/YoutubeContent';
import ArticlesList from './components/ArticlesList';
import DiscList from './components/DiscList';
import ContactList from './components/ContactList';

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/article/news`
  const res = await fetch(url, {
    cache: 'no-store',
    headers: Object.fromEntries(headers())
  });
  if (!res.ok) throw new Error('Failed to fetch data')
  const articles: Article[] = await res.json()

  return (
    <main className='text-center'>
      <div className='py-6'>
        <p className='text-2xl font-bold text-center my-6'>features</p>
        <div className='md:px-[5%] md:grid md:grid-cols-2'>
          <YoutubeContent videoId='iI8b0GckrcQ' label='Shintaro Tanaka Winter Light Ensemble / Live at echo and cloud studio' />
          <YoutubeContent videoId='hdodgI_VKzk' label='Shintaro Tanaka Ototote Ensemble / Live at Waseda Scott Hall' />
        </div>
      </div>
      <div className='py-6'>
        <p className='text-2xl font-bold text-center my-6'>news</p>
        <section>
          <ArticlesList articles={articles} />
        </section>
      </div>
      <div className='py-6'>
        <p className='text-2xl font-bold text-center my-6'>discography</p>
        <DiscList />
      </div>
      <div className='py-6'>
        <p className='text-2xl font-bold text-center my-6'>contact</p>
        <div className='pt-2'>
          <ContactList />
        </div>
      </div>
      <div className='mt-6 mb-12 border-t'>
      </div>
    </main>
  )
}
