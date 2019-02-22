import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import {connect} from 'react-redux';
import { getShows } from '../../actions/tvActions'
import DiscoverFeed from './DiscoverFeed'
import Spinner from '../common/Spinner';
import Searchbar from './Searchbar'


class Discover extends Component {
  constructor(){
    super();
    this.state = {
      headline: '',
      page: 1
    }
    this.onNextButton = this.onNextButton.bind(this)
    this.onPreviousButton = this.onPreviousButton.bind(this)
  }
  componentDidMount(){
    this.props.getShows();
  }
  onPreviousButton(){
    if (this.headline === "Popular Shows") {
      this.setState({ page: this.state.page - 1 }, () => this.props.getShows(this.state.page))
    }
  }
  onNextButton(){
    if (this.headline === "Popular Shows") {
      this.setState({ page: this.state.page + 1 }, () => this.props.getShows(this.state.page))
    }
  }

  render() {
    const {shows,loading, searched } = this.props.tvShow
    let showsContent;
    
    searched ? this.headline="Found Shows" : this.headline="Popular Shows"
    
    if (shows.results === null || loading) {
      showsContent = <Spinner />;
    }else {
      showsContent = <DiscoverFeed shows={shows} />
    }
    
    return (
      <div className="container">
        <div>
          <Searchbar shows={shows}/>
        </div>
        <h1>{this.headline}</h1>
        <div className="discoverFeed">
          {showsContent}
        </div>
        <div className="pages_btn">
          {this.state.page > 1 ? <button className="btn btn-success" onClick={this.onPreviousButton} >previous</button> : null}
          <button className="btn btn-success" onClick={this.onNextButton} >next</button>
        </div>
      </div>
    )
  }
}

Discover.propTypes = {
  tvShow: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  tvShow: state.tvShows,
  errors: state.errors
})

export default connect(mapStateToProps, {getShows})(Discover);