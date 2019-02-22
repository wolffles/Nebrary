import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 
import { getDetailsPage } from '../../actions/tvActions'

class DetailsPage extends Component {
  componentDidMount(){
    this.props.getDetailsPage(this.props.match.params.id);
  }
  render() {
    const {details, } = this.props.tvShow
    
    return (
      <div className="details">
        <img src={"https://image.tmdb.org/t/p/original/" + details.poster_path} alt={details.name+" Poster"}/>
        <h1>{details.name}</h1>
        <h4>{details.popularity}</h4>
        <p>{details.overview}</p>
        <p>{"Number of Seasons: "+details.number_of_seasons}</p>
        <p>{"number of Episodes: " + details.number_of_episodes}</p>
        <p>{"Genres: "+ details.genres_string}</p>
        <p>{"TV Series("+details.first_air_date+")"}</p>
        {/* img name, created, dates, episodes */}
      </div>
    )
  }
}

DetailsPage.propTypes = {
  getDetailsPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tvShow: state.tvShows
})


export default connect(mapStateToProps, {getDetailsPage})(DetailsPage);