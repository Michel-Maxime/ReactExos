import { format, formatDistance, formatDistanceToNow  } from 'date-fns'
import { useEffect, useState } from "react";


function Spring(){
    const [start, setStart] = useState(new Date(2022, 03, 20))
    const [end, setEnd] = useState(new Date(2022, 06, 21))

    const [dateTime, setDateTime] = useState();
    const [rangeDate, setRangeDate] = useState();


    useEffect(() => {
        setDateTime(formatDistanceToNow(start))
        setRangeDate(formatDistance(start, end))
    }, [])

    return(
        <>
            <h1>Spring</h1>
            <p>Dure {rangeDate}</p>
            <p>Commence dans {dateTime}</p>

        </>
    )
}

export default Spring