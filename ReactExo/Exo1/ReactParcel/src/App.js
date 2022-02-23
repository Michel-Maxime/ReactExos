import { useState } from "react/cjs/react.development";

import AllCards from "./components/allCards";

export function App() {

    const [index, setIndex] = useState(0)

    const ChangeCard = () => {
        index < 3 ? setIndex(index+1) : setIndex(0)
    }
    
    return (
        <>
            <button onClick={() => ChangeCard()}> CLick </button>
            <AllCards index={index}/>
        </>

    )
}