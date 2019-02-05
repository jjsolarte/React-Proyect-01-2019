import React from 'react'
import Pausa from '../../../icons/components/pause.js'
import Play from '../../../icons/components/play.js'
import './play-pause.css'

function PlayPausa(props){
	return(
		<div className="PlayPause">
			{
				props.pause ?
					<button
						onClick={props.handleClick}
					>
						<Play size={25} color="white"/>
					</button>
				:
					<button
						onClick={props.handleClick}
					>
						<Pausa size={25} color="white"/>
					</button>
			}
		</div>
	)
}

export default PlayPausa