import { useEffect, useState } from 'react'
import '../../src/css/style.css'

import { format, formatDistance, formatDistanceToNow, formatDistanceToNowStrict  } from 'date-fns'


//pas ouf mais complexe avec parcel de charger dynamiquement
import winter from "../img/winter.png"
import spring from "../img/spring.png"
import summer from "../img/summer.png"
import autumn from "../img/autumn.png"

function Card({season}) {

    const [start, setStart] = useState()
    const [end, setEnd] = useState()

    const [dateTime, setDateTime] = useState();

    //bricolage pour charger dynamiquement
    const getImg = () => {
        let isSeason
        switch(season.season){
            case "Winter":
                isSeason = winter
                break
            case "Spring":
                isSeason = spring
                break            
            case "Summer":
                isSeason = summer
                break
            case "Autumn":
                isSeason = autumn
                break
        }
        return isSeason
    }

    //Manque plus qu'à imlementer l'algo de comparaison
    const isDateInRage = (startDate, endDate) => (dateToCheck) => {
        return dateToCheck >= startDate && dateToCheck <= endDate
    }

    useEffect(() => {
        let startDateSplit = season.start.split("-")
        setStart(format(new Date(startDateSplit[0], startDateSplit[1], startDateSplit[2]), 'MM/dd/yyyy'))

        let endDateSplit = season.end.split("-")
        setEnd(format(new Date(endDateSplit[0], endDateSplit[1], endDateSplit[2]), 'MM/dd/yyyy'))

        setDateTime(formatDistanceToNowStrict(new Date(startDateSplit[0], startDateSplit[1], startDateSplit[2])))
    }, [season])

    useEffect(() => {
        console.log(start);
    }, [start])


    return(
        
        <div className='UserCard'>
        <div className='UserCardTop'>
            <img src={getImg()}/>
        </div>
        <div className='UserCardBottom'>
            <h3>Season</h3>
            <p>{season.season}</p>
            <h5>StartDate</h5>
            <p>{start}</p>
            <h5>EndDate</h5>
            <p>{end}</p>
            <h5>Depuis {dateTime}</h5>
        </div>
    </div>
    )
}

export default Card