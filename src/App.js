import React from "react";
import { Posts } from "./Posts";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isCounting: false,
      posts: [
        { id: "abc1", name: "JS Basics" },
        { id: "abc2", name: "JS Advanced" },
        { id: "abc3", name: "Recat JS" },
      ],
    };
    /* если не стрелочные функции
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this); */
  }

  componentDidMount() {
    if (localStorage.getItem("count") !== null) {
      this.setState({ count: +JSON.parse(localStorage.getItem("count")) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("count", JSON.stringify(this.state.count));
  }

  componentWillUnmount() {
    if (this.state.isCounting === true) {
      this.handleStop();
    }
  }

  handleStart = () => {
    this.timer = setInterval(() => {
      /*  this.setState({ count: this.state.count + 1, isCounting: true }); */
      this.setState((prevState) => ({
        count: prevState.count + 1,
        isCounting: true,
      }));
    }, 1000);
  };

  handleStop = () => {
    clearInterval(this.timer);
    this.setState({ isCounting: false });
  };

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ count: 0, isCounting: false });
  };

  removePost = (postId) => {
    this.setState({
      posts: this.state.posts.filter((post) => post.id !== postId),
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
        <Posts
          posts={posts}
          removePost={this.removePost}
        />
      </div>
    );
  }
}
