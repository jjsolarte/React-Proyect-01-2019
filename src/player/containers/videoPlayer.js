import React, { Component } from 'react';
import VideoPlayerLayout from '../componets/videoPlayerLayout.js'
import Video from '../componets/video.js'
import Title from '../componets/title.js'
import PlayPausa from '../componets/playPausa.js'
import Timer from '../componets/timer.js'
import Controls from '../componets/videoPlayerControls.js'
import ProgressBar from '../componets/progress.js'
import Spinner from '../componets/spinner.js'
import Volume from '../componets/volume.js'
import FullScreen from '../componets/fullScreen.js'

export default class VideoPlayer extends Component{
	state={
		pause: true,
		duration: 0,
		currentTime: 0,
		loading: false,
		volume: 1,
	}
	toggleClick=(event)=>{
		this.setState({
			pause: !this.state.pause
		})
	}
	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay)
		})
	}
	handleLoadeMetadata = event =>{
		this.video=event.target;
		this.setState({
			duration: this.video.duration
		});
	}
	handeProgressChange=event=>{
		//event.target.value
		this.video.currentTime=event.target.value
	}
	handleTimeUpdate=event=>{
		//console.log(this.video.currentTime)
		this.setState({
			currentTime: this.video.currentTime
		})
	}
	handleSeeking = event =>{
		this.setState({
			loading: true
		})
	}
	handleVolumeChange=event=>{
		this.video.volume=event.target.value;
		this.setState({
			volume: event.target.value
		})
	}
	handleMute = (event) =>{
		const lastValue = this.video.volume;
    	this.setState ({lastValue})
    		if (this.video.volume !== 0) {
      			this.video.volume = 0
      			this.setState ({
        			volume: this.video.volume
      			})
		    } else {
				this.video.volume = this.state.lastValue
      			this.setState ({
        			volume: this.video.volume
      			})
    		}

	}
	handleSeeked = event =>{
		this.setState({
			loading: false
		})	
	}
	handleFullScreen=(event)=>{
		if(!document.webkitIsFullScreen){
			this.player.webkitRequestFullscreen()
		}else{
			document.webkitExitFullscreen()
		}
	}
	setRef=element=>{
		this.player=element
	}
	render(){
		return(
			<VideoPlayerLayout
				setRef={this.setRef}
			>
				<Title 
					title={this.props.title}
				/>
				<Controls>
					<PlayPausa
						pause={this.state.pause} 
						handleClick={this.toggleClick}
					/>
					<Timer 
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
					<ProgressBar 
						duration={this.state.duration}
						value={this.state.currentTime}
						handeProgressChange={this.handeProgressChange}
					/>
					<Volume 
						handleVolumeChange={this.handleVolumeChange}
						handleClick={this.handleMute}
					/>
					<FullScreen 
						handleFullScreen={this.handleFullScreen}
					/>	
				</Controls>
				<Spinner 
					active={this.state.loading}
				/>
				<Video 
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadeMetadata={this.handleLoadeMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					src={this.props.src}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
				/>
			</VideoPlayerLayout>
		)
	}
}