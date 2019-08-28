import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

   async onSearchSubmit(term){
        const response = await Axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query: term
            },
            headers:{
                Authorization:'Client-ID 607165ea70b24ba32cbe94cd8e64a4ceb7bfc20084d43783d464415d44527989'
            }
        });

        console.log(response.data.results);
    }
    
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
               <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }

}

export default App;