export const SET_TODO_AS_COMPLETE = 'SET_TODO_AS_COMPLETE';

export const setTodoAsComplete = index => ({
  type: SET_TODO_AS_COMPLETE,
  payload: {
    index
  }
});

