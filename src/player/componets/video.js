import React, { Component } from 'react';
import './video.css';

class Video extends Component {
	togglePlay(){
		if(this.props.pause){
			this.video.play()
			console.log('errPl')
		}else{
			this.video.pause()
			console.log('errPause')
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.pause !== this.props.pause){
			this.togglePlay();
		}
	}
	setRef=element=>{
		this.video=element;
	}
  render() {
  	const {
  		handleLoadeMetadata,
  		handleTimeUpdate,
  		handleSeeking,
  		handleSeeked,
  	} = this.props
    return (
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          ref={this.setRef}
          src={this.props.src}
          onLoadedMetadata={handleLoadeMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    )
  }
}

export default Video;