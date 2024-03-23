import { ReactNode } from "react"

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const layout = ({children}: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-800">
        {children}
    </div>
  )
}

export default layout