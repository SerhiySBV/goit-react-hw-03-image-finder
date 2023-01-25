import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  hendleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;
    return (
      <header className="SearchBar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="query"
            value={query}
            onChange={this.hendleChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
