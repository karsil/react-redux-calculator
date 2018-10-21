import {ADD_DIGIT, NEW_OPERATION, EQUAL_OPERATION} from '../actions/actions'


export default function (state = {input: "", acc: null, pendingOp: null}, {type, payload}) {
    switch (type) {
        case ADD_DIGIT: {
            var newInput = state.input * 10 + payload.digit
            return {...state, input: newInput}
        }

        case NEW_OPERATION: {
            switch(payload.operationType){
                case '+':
                    return {
                        input: 0,
                        acc: state.input + state.acc,
                        pendingOp: payload.operationType
                    }
                    break;
                default:
                    return state
            }
        }

        case EQUAL_OPERATION: {
            return add(state)
        }
        default:
            return state
    }
}

function add(state = {input: "", acc: null, pendingOp: null}) {
    return {
        input: state.acc + state.input,
        acc: null,
        pendingOp: null
     }
}
