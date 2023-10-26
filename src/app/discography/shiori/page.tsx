import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div className='mx-4 md:px-[25%]'>
			<title>Frozen Dream in Midwinter Memories</title>
			<h1 className='text-title'>夢は真冬の追憶のうちに凍る</h1>
			<iframe
				width="100%"
				height="300"
				allow="autoplay"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1273334239&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
			/>
			<div className='text-center'>
				<Link
					href='https://soundcloud.com/user-654950188'
					target="_blank"
					className="text-center text-gray-400 no-underline"
				>
					takanori niimura
				</Link>
				<Link
					href='https://soundcloud.com/user-654950188/sets/frozen-dream-in-midwinter'
					target="_blank"
					className="text-gray-400 no-underline"
				>
					「夢は真冬の追憶のうちに凍る」 (&quot;Frozen Dream in Midwinter Memories&quot;)
				</Link>
			</div>
			<div className='text-center my-6 whitespace-pre-line'>
				<p className='py-2'>
					{`詩音李
						piano: shintaro tanaka
						violin: takanori niimura`}
				</p>
				<p className='py-2'>
					{`mix:
						shintaro tanaka`}
				</p>
				<p className='py-2'>
					{`mastering:
						katsunori fukuoka (flysound)`}
				</p>
				<p className='py-2'>
					{`cover design:
						kaho hakoda`}
				</p>
				<h2 className='text-lg font-bold mt-4 py-4'>「夢は真冬の追憶のうちに凍る」に寄せて</h2>
				<p>
					{`　田中慎太郎と新村隆慶によるデュオ『詩音李』による1stアルバム。すべての楽曲を通じてアップライトピアノは弱音ペダルを踏み、ヴァイオリンにも弱音器がつけられている。楽器が発音できる極限まで弱音で時間を紡ぐ行為は、意識は楽曲の構造から息遣いへと移り、音楽はやがて音に還ろうとする。記譜と即興、音と沈黙。そのような様々な「あいだ」を弱音を手がかりに手繰り寄せる試み。
						
						　もともと多くの楽曲は記譜されていたが、半年ほどの準備や練習はそれを即興演奏と呼べるまで抽象化するプロセスだった。弱音で演奏するために耳の帆を張るとき、その日の楽器のコンディションや体調、湿度といった外的要素から記譜された音とは別の可能性を手が探り始める。記譜から外れることはvulnerableな響きを奏でる結果だった。それはリスやウサギなどの小動物がわずかな風や葉の落ちる気配を頼りに外の世界を警戒することと似ているかもしれない。
						
						　録音は2020年の真冬、長野県にある新村の祖父が生前使っていた山荘の倉庫を音楽室に改装した、小さな空間で行われた。軒先に吊るされた餌場に小鳥たちが集まり、すこし歩けばレタス畑の背にアルプスが広がる。豊かな自然に囲まれて、子どもの頃連れて行ってもらったキャンプのことを思い出した。日が沈みランタンに集まる蛾が目の前に飛び出してきて、そのとき確かに蛾の羽音を聴いたのだった。それからその音を聴いたことはない。聴こえるほど近くに顔を近づけたくもないのだけど。たとえ実際に聴くことはできなくても、雪が車窓に当たり溶けゆく音や、カメムシの足音、小鳥がついばんだエサを嚥下するときの音を想像することはできる。
						
						　アルバムの表題は立原道造の詩『のちのおもひに』からの引用。真冬の雪に覆われた清里や野辺山の景色が、詩と重なり合うように感じた。記憶は音楽を通じて結晶化することはできるだろうか。例えば永久凍土層のマンモスやホラアナライオンの化石のように。（テキスト：田中慎太郎）`}
				</p>
			</div>
			<div className='md:grid grid-cols-2'>
				<Content url='https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/shiori-jac1.jpg' alt='shiori-jac1'/>
				<Content url='https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/shiori-jac2.jpg' alt='shiori-jac2'/>
				<Content url='https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/shiori-jac3.jpg' alt='shiori-jac3'/>
				<Content url='https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/shiori-jac4.jpg' alt='shiori-jac4'/>
			</div>
			<div className='mt-6'>
				<p className='text-center'>CDのご購入はこちらから</p>
				<Link
					href='https://ototote.official.ec/items/67881465'
					className='hover:opacity-75 text-center text-blue-500'
					target='_blank'
				>
					<p>https://ototote.official.ec/items/67881465</p>
				</Link>
			</div>
		</div>
	)
}

type ContentProps = {
	url: string,
	alt: string
}
const Content = ({ url, alt }: ContentProps) => {
	return (
		<Image
			className='m-auto md:p-4 md:max-w-md md:max-h-md'
			src={url}
			alt={alt}
			width={756}
			height={210}
		/>
	)
}

export default page
