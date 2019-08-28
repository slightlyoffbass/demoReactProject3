import React from 'react';

class SearchBar extends React.Component{

    state = {term:''}

    // prevents default submit when enter key is pressed
    // by using an error fucntion, this.state.term can be called without cannot read property of state error
    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return (
        // this keyword is a reference back to the class itself
        // Rule: when finding value of this, look at where the function is called
        <div onSubmit={this.onFormSubmit} className="ui segment">
            <form className="ui form">
                <label>Image Search</label>
                <input 
                    type="text" 
                    className="field" 
                    value={this.state.term}
                    placeholder="enter text"
                    onChange={(e)=> this.setState({term: e.target.value})}
                />
            </form>
        </div>
        );   
    }
}

export default SearchBar;