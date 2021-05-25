import React from 'react';
import SearchBar from './SearchBar';
import unsplash from './api/unsplash'

class App extends React.Component {

    state = { images: [] };

     onSearchSubmit = async (term) => {
        let resp = await unsplash.get('/search/photos',{
            params: { query:term }
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