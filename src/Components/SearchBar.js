import React from 'react';

class SearchBar extends React.Component {

    state = {term : ''};

    onInputChange = (event) => {

        const value = event.target.value;
        this.setState({term : value});
    }

    onFormSubmit = (event) => {

        event.preventDefault();   
        //  Calll Callback from parent Componenet
        this.props.onFormSubmit(this.state.term);

    }
    render()
    {
        return <div>
                <div className="search-bar ui segment"  >
                    <form className="ui form" onSubmit={this.onFormSubmit} >
                        <div className="field" >
                            <label> Video Search </label>
                            <input type="text" value={this.state.term} onChange={this.onInputChange}   />
                        </div>  
                    </form>
                </div>
            
              
             </div>
    }

}

export default SearchBar;