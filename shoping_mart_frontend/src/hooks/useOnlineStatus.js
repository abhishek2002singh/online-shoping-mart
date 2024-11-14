import { useEffect, useState } from 'react'

const useOnlineStatus = () => {

    //check if online
    const [onLineStatus, setonLineStatus] = useState(true);

    useEffect(() => {

        window.addEventListener('offline', () => {
            setonLineStatus(false)
        })

        window.addEventListener('online', () => {
            setonLineStatus(true)
        })

    }, [])

    return onLineStatus;

}

export default useOnlineStatus