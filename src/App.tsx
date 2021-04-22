import React, {useState} from 'react';
import './App.css';
// import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
 import {RatingValueType} from "./components/Rating/Rating";
import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";
import OnOff from "./components/OnOff/SelfControlledOnOff";
import {UncontrolledOnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className = 'App'>
            {/*<PageTitle title={"This is APP component"}/>*/}
            <UncontrolledRating/>
            {/*<Rating value ={ratingValue} onClick ={setRatingValue}/>*/}
            {/*<Rating value ={2}/>*/}
            {/*<Rating value ={3}/>*/}
            {/*<Rating value ={4}/>*/}
            {/*<Rating value ={5}/>*/}
            {/*<UncontrolledAccordion title={"Menu"} />*/}
            <SelfControlledAccordion title={"Menu"} collapsed={accordionCollapsed} onChange = {() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<UncontrolledAccordion title={"Users"} />*/}
            {/*<OnOff  />*/}
            <OnOff  on ={switchOn} onChange = {setSwitchOn}/>
            <UncontrolledOnOff  onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

type PageTitleType = {
    title:string
}
function PageTitle (props:PageTitleType) {
    return <>{props.title}</>
}



export default App;
