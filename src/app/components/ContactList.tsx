import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const ContactList = () => {
	const contentList = [
		{
			link: 'https://twitter.com/tanakashintaro',
			icon: faTwitter,
			label: 'Twitter',
		},
		{
			link: 'https://www.instagram.com/shintaro_tanaka/',
			icon: faInstagram,
			label: 'Instagram',
		},
		{
			link: 'https://www.youtube.com/@ototote',
			icon: faYoutube,
			label: 'Youtube',
		},
		{
			link: 'mailto:info@ototote.net',
			icon: faEnvelope,
			label: 'Email',
		},
	];

	return (
		<div>
			<ul className='flex justify-center gap-12'>
				{contentList.map((item, index) => (
					<li key={index}>
						<Content link={item.link} icon={item.icon} label={item.label} />
					</li>
				))}
			</ul>
		</div>
	)
}

type ContentProps = {
	link: string,
	icon: IconDefinition,
	label: string,
}

const Content = ({ link, icon, label }: ContentProps) => {
	return (
		<Link href={link} target='_blank' className='flex justify-center items-center'>
			<FontAwesomeIcon icon={icon} className='h-[20px] mr-2' />
			<label className='cursor-pointer'>{label}</label>
		</Link>
	)
}

export default ContactList
