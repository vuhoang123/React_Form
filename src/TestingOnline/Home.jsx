import React, { Component } from "react";
import QuestionList from "./QuestionList";
import axios from "axios";
import Result from "./Result";
import { connect } from "react-redux";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-5">
        <h1 className="display-2 mb-5 text-center">Trắc nghiệm online</h1>
        <QuestionList />
        <button className="btn btn-success">Nộp bài</button>
      </div>
    );
  }

  fetchQuestions = async () => {
    try {
      const res = await axios({
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
        method: "GET",
      });

      const action = {
        type: "UPDATE_QUESTION_LIST",
        payload: res.data,
      };

      this.props.dispatch(action);
    } catch (err) {}
  };

  componentDidMount() {
    this.fetchQuestions();
  }
}

// lifecycle: vòng đời component

export default connect()(Home);
