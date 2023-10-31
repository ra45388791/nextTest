'use client'
import Link from "next/link"
export default function learn() {
    return (
        <div>
            this is a learn page.
            <Link href={"/Learn/1"}>連結1</Link>
            <Link href={"/Learn/2/john"}>連結2</Link>
            <Link href={"/Learn/3/lilyth/ssss"}>連結3</Link>
            <div className='h-96'>123</div>
            <div className='h-96'>456</div>
            <div className='h-96'>123</div>
            <div className='h-96'>456</div>
        </div >
    )

}