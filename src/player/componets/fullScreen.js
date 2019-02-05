import React from 'react'
import './full-screen.css'
import FullScreenIcon from '../../../icons/components/fullscreen.js'

const FullScreen = (props) => (
	<div 
		className="FullScreen"
		onClick={props.handleFullScreen}
	>
		<FullScreenIcon 
			size={25}
			color="white"
		/>
	</div>
)

export default FullScreen;