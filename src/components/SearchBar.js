import React from 'react';

class SearchBar extends React.Component{

    state = {term:''}

    render(){
        return (
        <div className="ui segment">
            <form className="ui form">
                <label>Image Search</label>
                <input 
                    type="text" 
                    className="field" 
                    value={this.state.term}
                    placeholder="enter text"
                    onChange={(e)=> this.setState({term:e.target.value})}
                />
            </form>
        </div>
        );   
    }
}

export default SearchBar;