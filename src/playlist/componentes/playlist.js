import React from 'react';
import Media from './media.js'
import './playlist.css'

function Playlist (props){	
		//console.log(props.data);
		//var categorias=props.data.categories
		return ( 
			<div className="Playlist">
				{
					props.playlist.map((item)=>{
						return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
					})
				}
			</div>
		)
}


export default Playlist;