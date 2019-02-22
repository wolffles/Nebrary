import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';

class DiscoverItem extends Component {
  render() {
    const { show } = this.props;
    console.log(show.id)
    return (
      <div className="discoverItem">
        <a href={`../details/${show.id}`}>
          <h3> {show.original_name} </h3>
          <img
            src={ "https://image.tmdb.org/t/p/w154/"+show.poster_path }
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