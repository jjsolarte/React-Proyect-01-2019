import React from 'react'
import './timer.css'

function formattedTime(seg){
	const minutos = parseInt(seg/60, 10)
	const seconds = parseInt(seg%60, 10)
	return `${minutos} : ${seconds}`
}

export default function Timer(props){
	return(
		<div className="Timer">
			<p>
				<span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
			</p>
		</div>
	)
}