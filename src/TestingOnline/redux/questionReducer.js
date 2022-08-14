const initialState = {
  questionList: [],
};

// shallow comparison : so sánh nông
const reducer = function (currentState = initialState, action) {
  // nhận action, chỉnh sửa currentState
  // return newState
  // action = {type , payload}
  switch (action.type) {
    case "UPDATE_QUESTION_LIST":
      currentState.questionList = action.payload;
      return { ...currentState };

    default:
      return currentState;
  }
};

export default reducer;
