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
        this.setState({
            videos: response.data.items
        });
    }

    handleVideoSelect = video => {
        this.setState({selectedVideo: video});
        this.props.history.push(`video/${video.id}`)
    }

    handleQuantity = async quantity => {         
        const response = await youtube.get('', {
            params: {
                maxResults: quantity
            }
        });
        this.setState({
            videos: response.data.items
        });
    }

    handleOrderByLatest = () => {
        this.setState({
            videos: this.state.videos.reverse()
        })
    }

    handleOrderByOldest = () => {
        this.setState({
            videos: this.state.videos.reverse()
        })
    }

    //Might need to use prevState or componentDidUpdate

    render() {
        return (
            <div>
            <Header />
            <HeroBanner />
            <VideoListFilters handleQuantity={this.handleQuantity} handleOrderByLatest={this.handleOrderByLatest} handleOrderByOldest={this.handleOrderByOldest} />            
                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />            
                {/* <div>
                    <button>prev</button>
                    <button>next</button>
                </div> */}
            <Footer />
        </div>
        )
    }
}

export default VideosPage;
