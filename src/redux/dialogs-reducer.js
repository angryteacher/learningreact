const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Вова'},
        {id: 2, name: 'Света'},
        {id: 3, name: 'Петя'},
        {id: 4, name: 'Игорь'},
        {id: 5, name: 'Надя'},
        {id: 6, name: 'Коля'}
    ],
    messages: [
        {id: 1, text: "Hi. Let's begin."},
        {id: 2, text: "Hello. I'm in."},
        {id: 3, text: "What's up?"},
        {id: 4, text: "Greetings."},
        {id: 5, text: "I hate you all."}
    ],
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 6, text: text}]
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})


export default dialogsReducer;