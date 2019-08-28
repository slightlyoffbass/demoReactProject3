import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    
    state = {images: []};
    
    // Converted to arrow function to prevent the following error
    // Unhandled Rejection (TypeError): this.setState is not a function
    onSearchSubmit = async term =>{
        const response = await Axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query: term
            },
            headers:{
                Authorization:'Client-ID 607165ea70b24ba32cbe94cd8e64a4ceb7bfc20084d43783d464415d44527989'
            }
        });
        
        this.setState({images: response.data.results })
    }
    
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
               <SearchBar onSubmit={this.onSearchSubmit}/>
               Found: {this.state.images.length} images
            </div>
        )
    }S

}

export default App;

