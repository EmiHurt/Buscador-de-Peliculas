import React, { Component } from "react";
import{SearchForm} from"../components/SearchForm"
import {MoviesList} from "../components/MoviesList"
import {Title} from "../components/Title"
export class Home extends Component {
    state={usedSearch:false,results:[]}
    _handleResults=(results)=>{
      this.setState({results,usedSearch:true})
    }
    _renderResults(){
      return this.state.results.length ===0
        ? <p>sin resultados</p>
        :<MoviesList movies={this.state.results}/>
      
    }
    render(){
        return(
            <div className="search">
            <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">

        <SearchForm onResults={this._handleResults}/>
        
        </div>
        {this.state.usedSearch
        ? this._renderResults()
        :<small className="buscador"> use el buscador </small> 
      }
      </div>
        );
    }

}