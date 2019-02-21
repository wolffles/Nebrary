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
    this.props.getShows();
  }
  onNextButton(){
    // add a next button to update getShows()
  }

  render() {
    const {shows,loading } = this.props.tvShow
    let showsContent;

    if (shows.results === null || loading) {
      showsContent = <Spinner />;
    }else {
      showsContent = <DiscoverFeed shows={shows} />
    }
    
    return (
      <container>
        <div>
          <Searchbar/>
        </div>
        <div>
          <h1>Popular shows</h1>
          {showsContent}
        </div>
      </container>
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