import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class DiscoverItem extends Component {
  render() {
    const { show } = this.props;
    return (
      <div className="discoverItem">
        <a href={`../details/${show.id}`}>
          <p>{show.original_name}</p>
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