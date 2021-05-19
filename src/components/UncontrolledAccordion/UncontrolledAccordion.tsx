import React, {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";
import {reducer} from "./reducer";

type AccordionTitleType = {
    title :string
    onClick : () => void
}




function UncontrolledAccordion(props:AccordionTitleType) {

    let [collapsed, dispatch] = useReducer(reducer,{collapsed: false});

    return <div>
        {/*<AccordionTitle title={props.title} onClick ={() => {setCollapsed(!collapsed) } } />*/}
        <AccordionTitle title={props.title} onClick ={() => {dispatch({type:"TOGGLE-COLLAPSED"}) } } />
        {!collapsed && <AccordionBody/>}
    </div>

}

function AccordionTitle (prors:AccordionTitleType) {
    return <h3 onClick ={() => {prors.onClick() }}>{prors.title}</h3>
}
function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion