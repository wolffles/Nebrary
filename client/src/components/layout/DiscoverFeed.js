import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DiscoverItem from './DiscoverItem';

class DiscoverFeed extends Component {
  render() {
    const { shows } = this.props;
    return shows.map(show => <DiscoverItem show={show} />);
  }
}

DiscoverFeed.propTypes = {
  shows: PropTypes.array.isRequired
};

export default DiscoverFeed;