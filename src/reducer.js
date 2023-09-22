export default function (state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                { id: Date.now(), title: action.payload, completed: false }
            ]
        default:
            return state;
    }
}