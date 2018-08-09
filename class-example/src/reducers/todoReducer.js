import { ADD_TODO, SET_TODO_AS_COMPLETE } from '../actions/todoActions';

const INITIAL_STATE = {
  list: [
    {id: 10, name: 'Learn React', isCompleted: true },
    {id: 30, name: 'Learn Redux', isCompleted: false },
    {id: 4, name: 'Learn React Redux', isCompleted: false },
  ]
}

function setAsCompleted(arr, index) {
  return arr.map((value, i) => {
    if (i === index) {
      return {...value, isCompleted: !value.isCompleted};
    }
    return value;
  })
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {...state,
        list: [...state.list, {
        isCompleted: false,
        name: action.payload.name
      }]
    }
    case SET_TODO_AS_COMPLETE:
      return {
        ...state,
        list: setAsCompleted(state.list, action.payload.index)
      }
    default:
      return state;
  }
}

export default todoReducer
