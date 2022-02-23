import seasons from '../../seasons.json'

import { useEffect, useState } from "react/cjs/react.development";

import Card from "./card";


function AllCards({index}) {

    const [allSeasons, setAllSeasons] = useState([])

    useEffect(() => {
        seasons.map(season => {
            setAllSeasons(oldAllSeasons => [...oldAllSeasons, <Card season={season} />])
        })

    }, [])

    return (
        <>
            {allSeasons[index]}
        </>

    )
}

export default AllCards