export const ADD_DIGIT = 'ADD_DIGIT'
export const addDigit = digit => {
    const returnValue = {
            type: ADD_DIGIT, 
            payload: {
                digit: digit
            }
        }
    return returnValue
}

export const NEW_OPERATION = 'NEW_OPERATION'
export const newOperation = input => ({
    type: NEW_OPERATION, 
    payload: {
        operationType: input
    }
})

export const EQUAL_OPERATION = 'EQUAL_OPERATION'
export const equalOperation = () => ({
    type: EQUAL_OPERATION, 
    payload: {
    }
})

export const CLEAR_OPERATION = 'CLEAR_OPERATION'
export const clearOperation = () => ({
    type: CLEAR_OPERATION, 
    payload: {
    }
})