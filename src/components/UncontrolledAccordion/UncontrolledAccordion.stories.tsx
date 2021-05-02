import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";



export default {
    title: 'UncontrolledAccordion',
    components: UncontrolledAccordion
}
const callback = action("accordion mode change event fired")
export const ModeChanging = () => {

    return <UncontrolledAccordion title="Hi" onClick={callback} />
};