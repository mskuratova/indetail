import React, {useState} from "react";

type AccordionTitleType = {
    title :string
    onClick : () => void
}



function UncontrolledAccordion(props:AccordionTitleType) {

    let [collapsed, setCollapsed] = useState(false);

    return <div>
        <AccordionTitle title={props.title} onClick ={() => {setCollapsed(!collapsed) } } />
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