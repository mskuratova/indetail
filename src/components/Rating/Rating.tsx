import React from "react";

export type RatingValueType =0 | 1 | 2 | 3 | 4 | 5
type RatingType = {
    value: RatingValueType
    onClick: (value:RatingValueType) => void
}

export function Rating(props:RatingType) {
    return (<div>
            <Star selected={props.value > 0} onClick ={props.onClick} value ={1}/><button>1</button>
            <Star selected={props.value > 1} onClick ={props.onClick} value ={2}/><button>2</button>
            <Star selected={props.value > 2} onClick ={props.onClick} value ={3}/><button>3</button>
            <Star selected={props.value > 3} onClick ={props.onClick} value ={4}/><button>4</button>
            <Star selected={props.value > 4} onClick ={props.onClick} value ={5}/><button>5</button>
        </div>

    )
}


type StarType = {
    selected: boolean
    value: RatingValueType
    onClick:  (value:RatingValueType) => void
}

 function Star(p: StarType) { return <span onClick = { () => { p.onClick(p.value)}}>{ p.selected ? <b>star </b> : "star "}</span>}