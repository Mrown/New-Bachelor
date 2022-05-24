import Image from "next/image"

function SidebarRow({ Icon, title }) {
    return (
        <div className="flex items-center space-x-2 p-4">
            {Icon && (
                <Icon className="h-8 w-8 text-blue-500"/>
            )}
            <p className="hidden sm:inline-flex font-medium justify-items-start">{title}</p>
        </div>
    )
}
export default SidebarRow