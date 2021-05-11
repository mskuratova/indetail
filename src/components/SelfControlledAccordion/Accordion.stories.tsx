import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {SelfControlledAccordion} from "./SelfControlledAccordion";



export default {
    title: 'Accordion',
    components: SelfControlledAccordion
}
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const CollapsedMode = () => <SelfControlledAccordion title={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback} />
export const UnCollapsedMode = () => <SelfControlledAccordion title={"Users"} collapsed={false} onChange={callback} items={[{title:"I",value: 1},{title: "My", value:2}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <SelfControlledAccordion title={"Hi"} collapsed={value} onChange={() => setValue(!value)}
                                    items={[{title:"I",value: 1},{title: "My", value:2}]}
                                    onClick={(value)=>{alert(`user with ID ${value} shold be happy`)}}/>
};