import React from 'react';
//import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import Footer from './Footer';
import Header from './Header';
import HeroBanner from './HeroBanner';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    
    componentDidMount = async () => {         
            const response = await youtube.get();
            console.log(response);
            this.setState({
                videos: response.data.items
            });
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <Header />
                <HeroBanner />
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div /* className="five wide column" */>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;