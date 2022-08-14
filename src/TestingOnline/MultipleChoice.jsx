import React, { Component } from "react";
import { connect } from "react-redux";

export class MultipleChoice extends Component {
  handleChange = (e) => {
    const answerItem = {
      questionId: this.props.question.id,
      answerId: e.target.value,
    };

    this.props.dispatch({ type: "UPDATE_ANSWER", payload: answerItem });
  }

  render() {
    const {
      question: { content, answers, id },
      index,
    } = this.props;

    return (
      <div>
        <h1 className="display-4">
          Câu {index}: {content}
        </h1>

        {answers.map((item) => (
          <div className="border p-2 mb-3 w-50">
            <input
              onChange={this.handleChange}
              value={item.id}
              type="radio"
              className="form-check-input me-3"
              name={"question-" + id}
            />
            <label>{item.content}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default connect()(MultipleChoice);
