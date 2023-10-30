import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LeftNav from './defualtLayout/LeftNav'

const inter = Inter({ subsets: ['latin'] })
const bodyStyle = ` `

export const metadata: Metadata = {
	title: 'this is a Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className + ` flex flex-nowrap `}>
				<LeftNav />
				<div className='w-full ms-20 ps-4 '>
					{children}
				</div>
			</body>
		</html>
	)
}
