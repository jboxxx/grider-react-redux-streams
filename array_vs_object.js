// sample code!!

// array based approach
const streamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id == action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};


// object based approach
const streamReducer = (state={}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload;
      // return newState;
      return { ...state, [action.payload.id]: action.payload }; // key interpolation
    default:
      return state;
  }
}
