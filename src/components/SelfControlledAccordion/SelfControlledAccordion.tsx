import React from "react";

type ItemType = {
    title : string
    value : any
}

type AccordionTitleType = {
    title :string
    collapsed :boolean
    onChange : () => void
    items: Array<ItemType>
    onClick: (value:any)=> void
}

export function SelfControlledAccordion(props: AccordionTitleType) {
    return <div>
        <AccordionTitle title={props.title}
        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle (prors:AccordionTitlePropsType) {
    return <h3 onClick={(e) =>prors.onChange()}>{prors.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any) => void
}
function AccordionBody(props:AccordionBodyPropsType) {
    return <ul>
        { props.items.map(( i, index) =>
            <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}
