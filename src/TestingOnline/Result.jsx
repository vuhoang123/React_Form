// TODO:
// 1.tạo component result với giao diện modal bs
// 2.connect store, lấy questionList + testAnswers
// 3. kiểm tra: dựa vào questionId => question, dựa vào answerId => exact
// 4. render điểm ra màn hình

import React, { Component } from "react";
import { connect } from "react-redux";

export class Result extends Component {
    
    
  
    render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(Result);
