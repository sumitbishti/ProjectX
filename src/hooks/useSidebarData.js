'use client'
import { useState, useEffect } from "react"

export const useSidebarData = () => {
    const [data, setData] = useState({ name: 'side', city: 'bar' })

    useEffect(() => {
        //fetch data
        // setData()
    }, [])

    return {
        name: data?.name || 'sumi',
        city: data?.city || 'doon'
    }
}