import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../App.css';


const API_KEY="b46d31ec"
export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params:PropTypes.object,
      isExact:PropTypes.bool,
      path:PropTypes.string,
      url:PropTypes.string,
    })
  }
  state={movie:{} }

  _fetchMovie({ id }) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log({movie})
        this.setState({movie})
      })
      
      
  }

 
    
  
    
        
          
       
       
    
  
    componentDidMount() {
      console.log(this.props)
      const { id } = this.props.match.params
  
      this._fetchMovie( { id });
    }
    _goBack(){
      window.history.back()

      
    }
    

    
    render(){
        const {Title,Poster,Actors,Metascore,Plot}=this.state.movie
        console.log({Title})
        console.log({Poster})
        return(
            <div className="contenedor">
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img alt={Title} src={Poster} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
                
            
            </div>
        )
    }
}