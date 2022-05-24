import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    SearchIcon,
} from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";


function Header() {
    const {data : session} = useSession()
    console.log(session)
    return (
        <div >
            <div className="flex ml-2">
                {/* Left Side of Header */}
                <Image src="/images/Unlisted Leaf.jpg" 
                width={40}
                height={40}
                layout="fixed"
                alt="website logo"
                />
                    
                    <div className="flex left ">
                    <SearchIcon className="h-6 flex ml-2 "/>
                    <input className="hidden md:inline-flex ml-2 outline-none" type="text" placeholder="Search Pokesale" ></input>
                    </div>

                    {/* Middle of Header */}
                    <div className="flex justify-center flex-grow">
                        <div className="flex space-x-6 md:space-x-2">
                        <HeaderIcon active Icon={HomeIcon} />
                        <HeaderIcon Icon={FlagIcon} />
                        <HeaderIcon Icon={PlayIcon} />
                        <HeaderIcon Icon={ShoppingCartIcon} />
                        <HeaderIcon Icon={UserGroupIcon} />
                        </div>
                        
                    </div>

                    {/* Right Side of Header */}
                    <div className="flex item-end sm:space-x-2 justify-end ">
                    {!session ? 
                    (<div className="flex items-end justify-end">
                    <FcGoogle fontSize={30} className="mr-2"/>
                    </div>) : (
                    <div className="flex flex-col items-end justify-end">
                        <img src={session.user.image}
                        width={35}
                        height={35}
                        layout="fixed"
                        alt="profileimage" 
                        onClick={signOut}/>
                        <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
                        </div>
                        )}
                        <ViewGridIcon className="icon"/>
                        <ChatIcon className="icon"/>
                        <BellIcon className="icon"/>
                        <ChevronDownIcon className="icon"/>
                    </div>
            </div>
        </div>
    )
}

export default Header;