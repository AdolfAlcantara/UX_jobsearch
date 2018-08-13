import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
  }

  render() {
    return (
      <div className="home">
        <header className="cabecera">Job Search</header>
        <input className="input" type="text" value={this.state.keyword} onChange={e => this.setState({ keyword: e.target.value })} />
        <Link
          to={`/search/${this.state.keyword}`}
          className="btn btn-primary"
        >
          Search
        </Link>
      </div>
    );
  }
}

export default Home;
