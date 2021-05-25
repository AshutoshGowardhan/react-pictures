import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {

    async onSearchSubmit(term) {
        console.log(term)
        let resp = await axios.get('https://api.unsplash.com/search/photos',{
            params: { query:term },
            headers : {
                
                Authorization: 'Client-ID 9T6bbmEgUlehixtuTwanEO_X5JOX43d_e7-8k-THFBc'
            }
        });
        console.log(resp.data.results)
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