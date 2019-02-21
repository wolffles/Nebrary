import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchTitleTV } from "../../actions/tvActions"
import TextFieldGroup from "../common/TextFieldGroup"
// import { GET_ERRORS } from '../../actions/types';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      page: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const queryObj = {
      search: this.state.search,
      page: this.state.page || 1
    };

    this.props.searchTitleTV(queryObj);
  }

  render() {
    return (
      <div className="searchbar">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              placeholder="Search library by title"
              name="search"
              type="search"
              value={this.state.search}
              onChange={this.onChange}
              //errors to be added
              />
            <input type="submit" className="btn btn-info" />
          </form>
        </div>
      </div>
    )
  }
}
Searchbar.propTypes = {
  searchTitleTV: PropTypes.func.isRequired,
  tvShow: PropTypes.object.isRequired,
  shows: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  tvShow: state.tvShows
})

export default connect (mapStateToProps, { searchTitleTV })(Searchbar);