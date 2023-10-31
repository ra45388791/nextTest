'use client'
import { ReactNode, useState } from "react"

export default function Page({ params }: { params: { id: string[] } }) {
    return (
        <>
            <div>
                {params.id.map((e) => <div key={e}>{e}</div>)}
            </div>
        </>
    )
}