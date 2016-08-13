import React, { PropTypes } from 'react'

export default function Video (props) {
  return (
    <video id="example_video_1" className="video-js vjs-default-skin"
      controls preload="auto" width="1080" height="620"
      poster=""
      data-setup='{"example_option":true}'>
      <source src={props.video} type='video/mp4' />
    </video>
  )
}