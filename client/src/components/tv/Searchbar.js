import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchTitleTV } from "../../actions/tvActions"
import TextFieldGroup from "../common/TextFieldGroup"


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

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
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
    const {errors} = this.state

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
              error={errors.search}
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
  shows: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  tvShow: state.tvShows,
  errors: state.errors
})

export default connect (mapStateToProps, { searchTitleTV })(Searchbar);