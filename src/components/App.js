import React from 'react';
import contentstack from 'contentstack';
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
    
    componentDidMount() {         
        const Stack = contentstack.Stack("bltbaeea85204df35e8", "blt4233ec0287a0fdd5", "developing_app");
        const Query = Stack.ContentType('videos').Entry("blt6466f8ec1e88658c");
        
        Query.fetch().then( entry => {
           const linksArr = [];
           for(let i = 1; i <= 4; i++){
                linksArr.push(entry.get(`link_${i}`).href)
           }
           console.log(linksArr);
           this.setState({
                videos: linksArr
           });
        }, err => {
           console.log(err);
        })
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div>
                <Header />
                <HeroBanner />
                <div>
                    <div>
                        <div>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="container" style={{ background: 'beige'}}>
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