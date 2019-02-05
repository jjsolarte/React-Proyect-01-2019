import React from 'react'
import './video-player-controls.css'

export default function VideoControls(props){
	return(
		<div className="VideoPlayerControls">
			{props.children}
		</div>
	)
}