import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;   
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
    <li onClick={() => onUserSelected(video)} classname="list-group-item" style={{ "border": "1px solid #efefef", "marginBottom": "3px", "borderRadius": "5px"}}>

            <div className="media-left">
                <img className="ui image" src={imageUrl} />
            </div>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
    </li>
    );
};

export default VideoListItem;