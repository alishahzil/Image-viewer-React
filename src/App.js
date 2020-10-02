import React from 'react';
import Axios from 'axios';
import './App.css';
import SearchBar from './components/searchbar';
import ImageList from './components/imageList';


class App extends React.Component {
  state = {image:[]}
 onSearchSubmit= async (term)=>{
  const data = await Axios.get('https://api.unsplash.com/search/photos/',{
      params:{query:term},
      headers:{
        Authorization: 'Client-ID E1p03x87XDFsaw97y6ygRUxBpCHyr5dxHbPkZ40EGi8'
      }
    });
    this.setState({image:data.data.results});

  }
  render(){
  return (
    <div className="ui container" style={{marginTop:"10px"}}>
    <SearchBar onSubmit={this.onSearchSubmit} />
   <p>car found are:{this.state.image.length}</p>
   <ImageList images={this.state.image}/>
    </div>
  );
  }
}

export default App;
