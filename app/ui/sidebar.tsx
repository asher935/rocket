'use client'
import { useState, createContext, useContext } from 'react'
import { BsChevronRight, BsChevronLeft, BsFileEarmark, BsFolder2Open, BsChat, BsThreeDotsVertical } from "react-icons/bs";

const SidebarContext = createContext(false)
export default function Sidebar() {
    const [expanded, setExpanded] = useState(false)
    return (
        <aside className={`h-screen transition-all`} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
            <nav className="flex flex-col gap-2 h-full border-r shadow-sm items-center border-black/[.08] dark:border-white/[.145] border-opacity-25 justify-between w-full">
                <div className="h-full items-center flex flex-col gap-2 p-4 w-full">
                    <div className={`${expanded ? " w-full flex flex-col" : ''}`}>
                        {/* <button onClick={() => setExpanded(curr => !curr)} className="hover:bg-black/[.05] hover:dark:bg-white/[.08] rounded-lg p-2 self-end text-lg">
                            {expanded ? <BsChevronLeft /> : <BsChevronRight />}
                        </button> */}
                    </div>
                    {/* <button className="dark:bg-white/[.05] hover:bg-black/[.05] hover:dark:bg-white/[.08] border border-opacity-25 border-gray-100 rounded p-1 text-md transition-all duration-300 ease-in-out">
                        {expanded ? "New Chat" : <FaPlus />}
                    </button> */}
                    <SidebarContext.Provider value={expanded}>
                        <SidebarItem icon={<BsFileEarmark />} text="Artifacts" active={false} />
                        <SidebarItem icon={<BsFolder2Open />} text="Projects" active={false} />
                        <SidebarItem icon={<BsChat />} text="Chats" active={false} />
                    </SidebarContext.Provider>

                </div>

                <div className="border-t border-black/[.08] dark:border-white/[.145] flex p-4">
                    <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" className="rounded-full w-10 h-10" />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>
                        <div className="flex flex-col">
                            John Doe
                            <span className="text-xs text-gray-500">john.doe@example.com</span>
                        </div>
                        <BsThreeDotsVertical />
                    </div>
                </div>

            </nav>

        </aside>
    );
}

export function SidebarItem({ icon, text, active }: { icon: React.ReactNode, text: string, active: boolean }) {
    const expanded = useContext(SidebarContext);
    return (
        <li className={`relative flex items-center p-4 rounded-lg text-lg group
        ${active ? "bg-black/[.05]" : "hover:bg-black/[.05] hover:dark:bg-white/[.08]"} `} >
            {icon}
            <span className={`overflow-hidden transition-all text-base ${expanded ? "w-40 ml-4" : "w-0"}`}>{text}</span>
            {!expanded &&
                <span className="absolute left-full ml-8 p-2 text-base bg-black/[.05] dark:bg-white/[.08] rounded-md invisible group-hover:visible ">{text}</span>
            }
        </li>
    )
}