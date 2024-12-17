import { createContext } from "react"
import axios from "axios"
export const DashContext=createContext()
export default function DashboardContext({children}) {
  
  return (
    <DashContext.Provider>
      {children}
    </DashContext.Provider>
  )
}
