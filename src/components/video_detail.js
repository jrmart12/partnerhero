import React from 'react';
import { Icon } from "antd";

const VideoDetail = (props) => {
    const video = props.video;
    
    if(!video){
        return (
            <div style={{ "width": "50.5%", "background": "#999999", "color": "#fff", "height": "75vh", "postion": "relative" }}>
                <h1 style={{ "top":"50%", "left": "28%", "position": "absolute" }}><Icon type={"youtube"}/></h1>
                <div>Loading...</div>
            </div>
        )
        
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
        <div className={"embed-responsive embed-responsive-16by9"}>
            <iframe title={ video.snippet.title } className={"embed-responsive-item"} src={url} allowFullScreen />
        </div>
        <div>
            <h2>
                { video.snippet.title }
            </h2>
            <div>
                { video.snippet.description }
            </div>
        </div>
    </div>
    );
};

export default VideoDetail;