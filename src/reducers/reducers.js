import {ADD_DIGIT, NEW_OPERATION, EQUAL_OPERATION, CLEAR_OPERATION} from '../actions/actions'

const DIVBYZERO = "DIV BY ZERO"

export default function (state = {input: "", acc: null, pendingOp: null}, {type, payload}) {
    
    switch (type) {
        case ADD_DIGIT: {
            // append digit
            var newInput
            if(state.input === 0 || state.input === "ERROR" || state.input === "NaN"){
                // When error has happened, replace info by user input
                return {...state, input: payload.digit}
            }
            else if(payload.digit === "."){
                // add only one decimal point
                if(state.input.toString().includes(".")){
                    return state
                }
                else {
                    // only one decimal point allowed
                    newInput = state.input.toString()  + payload.digit
                    return {...state, input: newInput}
                }
            }
            else {
                // append input to current input number
                newInput = state.input.toString() + payload.digit
                return {...state, input: newInput}
            }   
        }

        case NEW_OPERATION: {
            console.log("NEW OPERATION")
            if (state.pendingOp && state.acc !== DIVBYZERO){
                // execute pending operation
                return {
                    input: 0,
                    acc: doOperation(state.acc, state.input, state.pendingOp),
                    pendingOp: payload.operationType
                }
            }
            else if (state.acc === DIVBYZERO){
                return {
                    input: 0,
                    acc: state.input,
                    pendingOp: payload.operationType
                }
            }
            else {
                // save input to accumulator for operation
                return {
                    input: 0,
                    acc: state.input,
                    pendingOp: payload.operationType
                }
            }
        }
        case EQUAL_OPERATION: {
            console.log("EQUAL OPERATION")
            return executeOperationOnEqual(state)
        }        
        case CLEAR_OPERATION: {
            console.log("CLEAR OPERATION")
            return {
                // has two contextes
                // only reset accumulator when input is already empty
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
    console.log(state)
    if(state.pendingOp){
        // only execute operation if one is pending
        console.log("execution")
        var result = doOperation(state.acc, state.input, state.pendingOp)
        return {
            input: result,
            acc: null,
            pendingOp: null
         }
    }
    else {
        return {
            input: state.input,
            acc: null,
            pendingOp: null
            }
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
            result = var2
            break;
    }
    console.log("op " + var1 + " " + operation + " " + var2 + " = " + result)
    return result
}

function divide(var1, var2){
    // special case for division by zero
    if(var2 === 0){
        console.log("division by zero! error")
        return DIVBYZERO
    }
    else {
        return var1 / var2
    }
}