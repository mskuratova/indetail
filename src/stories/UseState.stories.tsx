import React, {useState} from "react";

export default {
    title: "useState demo",
}
function generateData() {
    return 44444444
}

export const Example1 =() => {
    const [counter, setCounter] = useState(generateData);

    const changer =(state:number) => {
        return state+1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}