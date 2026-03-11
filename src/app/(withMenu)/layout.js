import Link from "next/link"
export default function WithMenuLayout({ children }) {
    return (
        <>
            {children}
            <div className="bg-black text-xl font-white" >
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/task">Task</Link>
            </div>
        </>
    )
}