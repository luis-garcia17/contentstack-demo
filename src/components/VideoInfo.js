import React from 'react';
import axios from 'axios';

class VideoInfo extends React.Component {
    state = {
        video: undefined
    }

    componentDidMount = async () => { 
        const id = this.props.history.location.pathname.replace('/video/', '');         
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAFJpQglv8jt3eQeBnAEJ59wM7WZExuES0`);
        this.setState({
            video: response.data.items[0]
        });
        console.log(this.state.video);
    }

    render() {
        return (
            <div>
            <p>{/*this.state.video*/}</p>
            </div>
        )
    }
}

export default VideoInfo;