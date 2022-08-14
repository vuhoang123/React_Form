const initialState = {
  testAnswers: [],
};



const reducer = function (currentState = initialState, action) {
  switch (action.type) {
    // check action type
    case "UPDATE_ANSWER":
      const cloneTestAnswers = [...currentState.testAnswers];

      let foundAnswer = cloneTestAnswers.find(
        (item) => item.questionId === action.payload.questionId
      );
        
      if (foundAnswer) {
        foundAnswer.answerId = action.payload.answerId;
      } else {
        cloneTestAnswers.push(action.payload);
      }

      return { ...currentState, testAnswers: cloneTestAnswers };

    default:
      return currentState;
  }
};

export default reducer;
