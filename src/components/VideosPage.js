import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroBanner from './HeroBanner';
import VideoList from './VideoList';
import VideoListFilters from './VideoListFilters';
import youtube from '../apis/youtube';


class VideosPage extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount = async () => {         
        const response = await youtube.get('', {
            params: {
                maxResults: 6
            }
        });
        //console.log(response);
        this.setState({
            videos: response.data.items
        });
        //console.log(this.state.selectedVideo);
    }

    handleVideoSelect = video => {
        this.setState({selectedVideo: video});
        this.props.history.push(`video/${video.id}`)
        //console.log(this.props);
    }

    render() {
        return (
            <div>
            <Header />
            <HeroBanner />
            <VideoListFilters />            
                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />            
                <div>
                    <button>prev</button>
                    <button>next</button>
                </div>
            <Footer />
        </div>
        )
    }

}

export default VideosPage;
