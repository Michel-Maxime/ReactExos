import { format, formatDistance, formatDistanceToNow  } from 'date-fns'
import { useEffect, useState } from "react";

function Winter(){
    const [start, setStart] = useState(new Date(2021, 12, 21))
    const [end, setEnd] = useState(new Date(2022, 03, 23))

    const [dateTime, setDateTime] = useState();

    useEffect(() => {
        setDateTime(formatDistanceToNow(start))
    }, [])
    return(
        <>
            <h1>Winter</h1>
            <p>depuis {dateTime}</p>
        </>
    )
}

export default Winter