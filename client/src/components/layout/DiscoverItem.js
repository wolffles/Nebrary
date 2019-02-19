import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';

class DiscoverItem extends Component {
  render() {
    const {show} = this.props;
    return (
      <div>
        {/* <h1> {show.original_name} </h1> */}
        <img
          src={ "https://image.tmdb.org/t/p/w154/"+show.poster_path }
          alt={show.original_name}
        />
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