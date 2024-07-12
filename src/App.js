import React from "react";
import { Posts } from "./Posts";
import Form from "./components/Form";
import Formtwo from "./components/Formtwo";
import Movies from "./components/Movies";
import "./App.css";
import Preloader from "./components/Preloader";
import { Search } from "./components/Search";

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
      firstName: "",
      email: "",
      movies: [],
      loading: true,
    };
    /* если не стрелочные функции
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this); */

    /*   Вызов метода init из конструктора
    this.init(); */
  }

  /*  init = () => {
    this.getMovies();
  }; */
  componentDidMount() {
    console.log("DidMount");
    this.getMovies();
    /*  if (localStorage.getItem("count") !== null) {
      this.setState({ count: +JSON.parse(localStorage.getItem("count")) });
    } */
  }

  componentDidUpdate() {
    console.log("DidUpdate");
    /* localStorage.setItem("count", JSON.stringify(this.state.count)); */
  }

  componentWillUnmount() {
    console.log("WillUnmount");
    /* if (this.state.isCounting === true) {
      this.handleStop();
    } */
  }

  /* handleStart = () => {
    this.timer = setInterval(() => { */
  /*  this.setState({ count: this.state.count + 1, isCounting: true }); */
  /*  this.setState((prevState) => ({
        count: prevState.count + 1,
        isCounting: true,
      }));
    }, 1000);
  }; */

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

  getMovies = async () => {
    const res = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=50f9a6fe&s=matrix"
    );
    const movies = await res.json(res);
    console.log(movies);
    this.setState({ movies: movies.Search, loading: false });
    console.log(this.state.movies);
  };

  searchFn = (searchWord, type) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=50f9a6fe&s=${searchWord}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };
  testHandler() {
    console.log(this);
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <button onClick={this.testHandler}>popopopop</button>
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
        <hr />
        <Posts
          posts={posts}
          removePost={this.removePost}
        />
        <hr />
        <Form />
        <hr />
        <Formtwo />
        <hr />
        <main className="container content">
          <Search searchFn={this.searchFn} />

          {this.state.loading ? (
            <Preloader />
          ) : (
            <Movies movies={this.state.movies} />
          )}
        </main>
      </div>
    );
  }
}
