import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {SelfControlledAccordion} from "./SelfControlledAccordion";



export default {
    title: 'Accordion',
    components: SelfControlledAccordion
}
const callback = action("accordion mode change event fired")

export const CollapsedMode = () => <SelfControlledAccordion title={"Menu"} collapsed={true} onChange={callback} />
export const UnCollapsedMode = () => <SelfControlledAccordion title={"Users"} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <SelfControlledAccordion title={"Hi"} collapsed={value} onChange={() => setValue(!value)} />
};