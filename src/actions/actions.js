export const ADD_DIGIT = 'ADD_DIGIT'

export const addDigit = digit => {
    console.log('addDigit ' + digit);
    const returnValue = {
            type: ADD_DIGIT, 
            payload: {
                digit: digit
            }
        }
    return returnValue
}

export const ADD_OPERATION = 'ADD_OPERATION'

export const addOP = input => ({
    type: ADD_OPERATION, 
    payload: {
        input: input
    }
})