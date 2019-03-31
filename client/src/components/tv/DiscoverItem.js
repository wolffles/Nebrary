import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class DiscoverItem extends Component {
  render() {
    const { show } = this.props;
    let path
    console.log(show.poster_path)
    if (show.poster_path == null){
      path = require('../../assets/img/film-poster-placeholder.png')
    }else{
      path = "https://image.tmdb.org/t/p/w154/" + show.poster_path 
    }
    return (
      <div className="discoverItem">
        <a href={`../details/${show.id}`}>
          <p>{show.original_name}</p>
          <img
            src={path}
            alt={show.original_name}
          />
        </a>
      </div>
    )
  }
}

DiscoverItem.propTypes = {
  show: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps) (DiscoverItem);