import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import {connect} from 'react-redux';
import { getShows } from '../../actions/tvActions'
import DiscoverFeed from './DiscoverFeed'
import Spinner from '../common/Spinner';


class Discover extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     errors:{}
  //   }
  // }
  componentDidMount(){
    this.props.getShows();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
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
      <div>
        <h1>Browse Shows</h1>
          {console.log("this is results", shows)}
         {/* {  showsContent.map(show => (
           <div className="discoverItem">
            <h3> {show.original_name} </h3>
            <img
              src={"https://image.tmdb.org/t/p/w154/"+show.poster_path}
              alt={show.original_name + " poster"}
            />
            </div>
          //  need to create component for images and name
         ))
         } */}
         {showsContent}
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