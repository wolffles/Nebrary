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
        <p>{details.overview}</p>
        <span>{"Rating: " + details.popularity}</span>
        <br></br>
        <span>{"Number of Seasons: "+details.number_of_seasons}</span>
        <br></br>
        <span>{"number of Episodes: " + details.number_of_episodes}</span>
        <br></br>
        <span>{"Genres: "+ details.genres_string}</span>
        <br></br>
        <span>{"TV Series("+details.first_air_date+")"}</span>
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