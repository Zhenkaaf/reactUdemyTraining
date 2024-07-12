import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all",
    };
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.props.searchFn(this.state.search, this.state.type);
    }
  };

  handleTypeChange = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.props.searchFn(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKeyPress}
          />
          <button
            onClick={() =>
              this.props.searchFn(this.state.search, this.state.type)
            }
            className="btn search-btn"
          >
            Search
          </button>
        </div>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="all"
              checked={this.state.type === "all"}
              onChange={this.handleTypeChange}
            />
            <span>All</span>
          </label>
          <label>
            <input
              type="radio"
              value="movie"
              checked={this.state.type === "movie"}
              onChange={this.handleTypeChange}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              type="radio"
              value="series"
              checked={this.state.type === "series"}
              onChange={this.handleTypeChange}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
