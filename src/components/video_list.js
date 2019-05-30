  
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onUserSelected={props.onVideoSelect}           
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul style={{ "listStyle":"none" ,"width":"40%", "padding": "5px", "border": "1px solid #efefef", "marginBottom": "3px", "borderRadius": "5px" }}>
        { videoItems }
    </ul>
    );
};

export default VideoList;