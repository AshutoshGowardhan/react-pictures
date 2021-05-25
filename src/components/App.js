import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {

    state = { images: [] };

     onSearchSubmit = async (term) => {
        let resp = await axios.get('https://api.unsplash.com/search/photos',{
            params: { query:term },
            headers : {
                Authorization: 'Client-ID 9T6bbmEgUlehixtuTwanEO_X5JOX43d_e7-8k-THFBc'
            }
        });
        this.setState({images: resp.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{margin: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found : {this.state.images.length} images
            </div>
        )
    }
}

export default App;