import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import {connect} from 'react-redux';
import { getShows } from '../../actions/tvActions'
import DiscoverFeed from './DiscoverFeed'
import Spinner from '../common/Spinner';
import Searchbar from './Searchbar'


class Discover extends Component {
  // add constructor
  componentDidMount(){
    this.props.getShows(1);
  }
  onNextButton(){
    // add a next button to update getShows()
  }

  render() {
    const {shows,loading, searched } = this.props.tvShow
    let showsContent;
    let headline;
    searched ? headline="Found Shows" : headline="Popular Shows"

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
        <h1>{headline}</h1>
        <div className="discoverFeed">
          {showsContent}
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