

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return {...state,
        collapsed:!state.collapsed};
    }
    return state;
}

let list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

function isSameLanguage(list: any) {
    // thank you for checking out the Coding Meetup kata :)
    let lang = list.language[0]
    for (let i = 0; i < list.length; i++) {
        if (list.language[i] === lang) {
            return true
        }
        return false
    }
}

console.log(isSameLanguage(list1))