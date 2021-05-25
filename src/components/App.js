import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term)
        axios.get('https://api.unsplash.com/search/photos',{
            params: { query:term },
            headers : {
                
                Authorization: 'Client-ID 9T6bbmEgUlehixtuTwanEO_X5JOX43d_e7-8k-THFBc'
            }
        })
    }

    render() {
        return (
            <div className="ui container" style={{margin: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;