# React-Redux-Calculator
This is my Lab Assignment for my course MI133 *Modern Web Development* an the FH Kiel in the winter term 2018/2019.

## Requirements

The task was to build a simple pocket calculator with the following requirements:

The device state consists of: 
- the current INPUT
- an accumulator (ACC)
- a pending operation (OP)
- 
But there are some pitfalls:
- the ACC can be empty
- the OP can be empty
- the input can or can not have a fraction
- the input should not contain leading 0s
- C clears input, but if INPUT is initial value it clears ACC
- division by 0
- equal (=) only performs the pending operation on with INPUT and ACC • operators (+,-,*,/) behave differently, if ACC is empty

### Tasks
Using React and Redux:
1. create a user interface according to the mockup 
2. handle button and keyboard input
3. implement proper integer calculator operation 
4. allow floating point input


## Other
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
