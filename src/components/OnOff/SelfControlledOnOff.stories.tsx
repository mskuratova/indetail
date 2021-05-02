import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import SelfControlledOnOff from "./SelfControlledOnOff";

export default {
    title: 'SelfControlledOnOff',
    components: SelfControlledOnOff
}

export const OnMode = () => <SelfControlledOnOff on={true} onChange={action("on or off clicked")}/>
export const OffMode = () => <SelfControlledOnOff on={false} onChange={action("on or off clicked")}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <SelfControlledOnOff on={value} onChange={setValue} />
};