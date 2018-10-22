import {ADD_DIGIT, NEW_OPERATION, EQUAL_OPERATION, CLEAR_OPERATION} from '../actions/actions'


export default function (state = {input: "", acc: null, pendingOp: null}, {type, payload}) {
    switch (type) {
        case ADD_DIGIT: {
            var newInput
            if(state.input === 0 || state.input === "ERROR" || state.input === "NaN"){
                // When error has happened, replace info by user input
                return {...state, input: payload.digit}
            }
            else if(payload.digit === "."){
                newInput = state.input.toString()  + payload.digit
                return {...state, input: newInput}
            }
            else {
                newInput = state.input.toString() + payload.digit
                return {...state, input: newInput}
            }   
        }

        case NEW_OPERATION: {
            if (state.pendingOp){
                // execute pending operation
                return {
                    input: 0,
                    acc: doOperation(state.acc, state.input, state.pendingOp),
                    pendingOp: payload.operationType
                }
            }
            else {
                // save input to accumulator
                return {
                    input: 0,
                    acc: state.input,
                    pendingOp: payload.operationType
                }
            }
        }
        case EQUAL_OPERATION: {
            return executeOperationOnEqual(state)
        }        
        case CLEAR_OPERATION: {
            return {
                input: 0,
                acc: state.input ? state.acc : null,
                pendingOp: state.input ? state.pendingOp : null
            }
        }
        default:
            return state
    }
}

function executeOperationOnEqual(state = {input: "", acc: 0, pendingOp: "+"}) {
    console.log("executeOperationOnEqual with " + state.pendingOp)
    var result = doOperation(state.acc, state.input, state.pendingOp)
    return {
        input: result,
        acc: null,
        pendingOp: null
     }
}

function doOperation(var1, var2, operation){
    var1 = parseFloat(var1)
    var2 = parseFloat(var2)
    var result
    switch(operation){
        case '+':
            result = var1 + var2
            break;
        case '-':
            result = var1 - var2
            break;
        case '*':
            result = var1 * var2
            break;
        case '/':
            result = divide(var1, var2)
            break;
        default:
            result = 0
            break;
    }
    console.log("op " + var1 + " " + operation + " " + var2 + " = " + result)
    return result
}

function divide(var1, var2){
    // special case for division by zero
    if(var2 === 0){
        console.log("division by zero! error")
        return "ERROR"
    }
    else {
        return var1 / var2
    }
}