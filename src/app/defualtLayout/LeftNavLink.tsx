"use client"
import React, { ReactNode, forwardRef, useEffect, useState } from 'react';
import Link from 'next/link'

interface childrenType {
    type: "Button" | "Link",
    payload: string | React.MouseEventHandler,
    status: boolean,
    text: string,
    children: ReactNode
}
const menuButton: string = `flex items-center  h-12 rounded
                transition ease-in-out
                hover:transition hover:ease-in-out hover:bg-slate-700`
const linkStr = {
    open: " w-36 ",
    close: " w-0 ",
}


export default function LeftNav({ type, payload, status, text, children }: childrenType) {
    const [linkStrClass, setLinkStrClass] = useState(linkStr.close)
    useEffect(() => {
        if (status) {
            setLinkStrClass(linkStr.open)
        }
        else {
            setLinkStrClass(linkStr.close)
        }

    }, [status])

    switch (type) {
        case "Button":
            if (typeof payload === "string") return;
            return (
                <button onClick={payload} className={menuButton + " justify-center ms-auto w-14"}>
                    {children}
                </button>
            )
        case "Link":
            if (typeof payload !== "string") return;
            return (
                <Link href={payload} className={menuButton + ' transition-[margin] justify-center mb-2 px-2 '}>
                    <div className={linkStrClass + ' overflow-hidden transition-[width] ease-in-out '}>
                        <div className='w-20'>
                            {text}
                        </div>
                    </div>
                    <div className='min-w-[30px]'>
                        {children}
                    </div>
                </Link>
            )
    }

}