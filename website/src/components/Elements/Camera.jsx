import { useEffect } from "react"

export const useCountdown = (initialTime: number, interval = 1000) => {
    useEffect(() => {
        const interval = setInterval(() => {
            
        }, interval ?? 1000)
    }, [])
}