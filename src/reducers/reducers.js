import {ADD_DIGIT} from '../actions/actions'


export default function reducer(state = {input: "", acc: null, op: null}, {type, payload}) {
    switch (type) {
        case ADD_DIGIT: {
            // do something
            console.log('ADD_DIGIT reducer: ' + payload.digit)
            return state
        }
        default:
            return state
    }
}