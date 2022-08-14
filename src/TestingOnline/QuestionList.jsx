import React, { PureComponent } from "react";
import FillInBlank from "./FillInBlank";
import MultipleChoice from "./MultipleChoice";
import { connect } from "react-redux";

export class QuestionList extends PureComponent {
  render() {
    console.log("render question list");
    return (
      <div>
        {/* optional chaining */}
        {this.props.questionList?.map((item, index) => {
          if (item.questionType === 1) {
            return (
              <MultipleChoice key={item.id} question={item} index={index + 1} />
            );
          }
          return (
            <FillInBlank key={item.id} question={item} index={index + 1} />
          );
        })}

        {this.props.answerList.map((item) => (
          <div style={{ display: "flex" }}>
            <h1>{item.questionId}</h1>
            <h2>{item.answerId}</h2>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // propName: state
    questionList: state.question.questionList,
    answerList: state.answer.testAnswers,
  };
};

export default connect(mapStateToProps)(QuestionList);
