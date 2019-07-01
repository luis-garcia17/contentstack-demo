import React from 'react';
import '../style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    console.log(video);
    return (
        <div className="row" onClick={ () => handleVideoSelect(video)}>
            <div className="col-xs-6">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg" target="_blank">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={video} />
                            </div>
                            <div className="caption">
                                <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                            </a>
                        </div>
                        </div>
                        <div className="col-xs-6">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg" target="_blank">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={video} />
                            </div>
                            <div className="caption">
                                <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                            </a>
                        </div>
                        </div>
        </div>
    )
};
export default VideoItem;