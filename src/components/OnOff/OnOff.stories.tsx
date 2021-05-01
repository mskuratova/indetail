import React, {useState} from "react";
import OnOff from "./SelfControlledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    components: OnOff
}

export const OnMode = () => <OnOff on={true} onChange={action("on or off clicked")}/>
export const OffMode = () => <OnOff on={false} onChange={action("on or off clicked")}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue} />
};