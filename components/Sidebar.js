import Image from "next/image";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";

import SidebarRow from "./SidebarRow";
import {getSession, signIn, signOut, useSession} from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

function Sidebar() {
    const {data : session} = useSession()

    return(
        <div className="bg-slate-50">
        {!session ? 
        (<div className="flex items-center justify-center h-auto w-40 cursor-pointer rounded-md border border-y-gray-300"
        onClick={signIn}>
        <FcGoogle fontSize={30} className="mr-2"/>
        <p>Log in to see something</p> 
        </div>) : (
        <div className="flex flex-col items-center justify-center">
        <div className="flex h-auto w-40 cursor-pointer items-center justify-center rounded-md border border-y-gray-300"
        onClick={signIn}>
        <img src={session.user.image}
                        width={35}
                        height={35}
                        layout="fixed"
                        alt="profileimage" 
                        onClick={signOut}/>
        </div>
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] cursor-pointer">
        <SidebarRow Icon={UsersIcon} title="Friends" />
        <SidebarRow Icon={UserGroupIcon} title="Groups" />
        <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
        <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
        <SidebarRow Icon={CalendarIcon} title="Events" />
        <SidebarRow Icon={ClockIcon} title="Memories" />
        <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
        <br></br>
        <p>Posts you are following</p>
        <SidebarRow Icon={ClockIcon} title="Peter's post: 12/05/2020 - 20:15" />
        <SidebarRow Icon={ClockIcon} title="Derek's post: 12/05/2020 - 20:15" />
        <SidebarRow Icon={ClockIcon} title="Erik's post: 12/05/2020 - 20:15" />
        <SidebarRow Icon={ClockIcon} title="Hans's post: 12/05/2020 - 20:15" />
        <SidebarRow Icon={ClockIcon} title="Lars's post: 12/05/2020 - 20:15" />
        </div>
      )}
        </div>
    )
}

export default Sidebar;