'use client'
//圖片
import Image from 'next/image'
import memoImg from '../../../public/memo.svg'
import nav from '../../../public/nav.svg'
//自訂模板
import LeftNavLink from "./LeftNavLink"
import { useEffect, useState } from 'react';

import { Button as NextButton } from '@nextui-org/react';

//開啟菜單
const open = {
    menu: " w-0 ",
    Layout: " w-60 ",
    buttonList: " w-full",
}
//關閉菜單
const close = {
    menu: "",
    Layout: "",
    buttonList: " w-full",
}

//固定樣式
const layout_Defualt = ` fixed left-0 top-0  flex flex-col items-center 
                            py-2 h-screen bg-black border-r-2 border-zinc-600 
                            transition-[width] ease-in-out `;
const buttonList_Defualt = ` flex flex-col justify-center p-2 `



export default function LeftNav({ leftDistance }: { leftDistance: number }) {
    close.Layout = ` w-${leftDistance} `
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [menu, setMenu] = useState("");
    const [menu_Layout, setMenu_Layout] = useState(close.Layout);
    const [buttonList, setButtonList] = useState(close.buttonList)

    useEffect(() => {
        if (menuIsOpen) {
            setMenu(open.menu);
            setMenu_Layout(open.Layout);
            setButtonList(open.buttonList);
        } else {
            setMenu(close.menu);
            setMenu_Layout(close.Layout);
            setButtonList(close.buttonList);
        }
    }, [menuIsOpen])

    function openMenu() {
        let menuState = menuIsOpen
        menuState = !menuState
        setMenuIsOpen(menuState)
    }

    return (
        <div className={'relative h-screen ' + menu}>
            <div className={layout_Defualt + menu_Layout}>
                <div className={buttonList_Defualt + buttonList}>
                    <LeftNavLink type="Button" payload={openMenu} status={menuIsOpen} text="">
                        <Image src={nav} width={30} height={30} alt="note.png"></Image>
                    </LeftNavLink>
                </div>

                <div className='my-2 w-10/12 border-b-2 border-zinc-700' />

                <div className={buttonList_Defualt + buttonList}>
                    <LeftNavLink type="Link" status={menuIsOpen} payload="/About" text="關於" >
                        <Image src={memoImg} width={30} height={30} alt="note.png"></Image>
                    </LeftNavLink>
                    <LeftNavLink type="Link" status={menuIsOpen} payload="/Learn" text="學習">
                        <Image src={memoImg} width={30} height={30} alt="note.png"></Image>
                    </LeftNavLink>
                    <NextButton size='sm' variant="shadow">123</NextButton>
                    <NextButton size='md' variant="shadow">123</NextButton>
                    <NextButton size='lg' variant="shadow" isLoading>123</NextButton>
                </div>
            </div>
        </div>
    )
}