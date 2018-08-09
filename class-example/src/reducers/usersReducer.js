const INITIAL_STATE = {
  user: {
    name: 'John'
  }
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default userReducer
