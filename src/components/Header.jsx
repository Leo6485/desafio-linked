export default function Header({children}) {
    return (
        <div className="flex bg-white border-b py-2 pl-2 border-gray-500 w-full justify-between">
        Nome/Logo
        <div className="justify-around">
        {children}
        </div>
        </div>
    )
}