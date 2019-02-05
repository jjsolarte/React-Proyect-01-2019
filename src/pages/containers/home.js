import React, {Component} from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories.js'
import Related from '../components/related.js'
import ModalContainer from '../../widgets/containers/modalContainer.js'
import Modal from '../../widgets/components/modal.js'
import HandleError from '../../error/containers/handleError.js'
import VideoPlayer from '../../player/containers/videoPlayer.js'

class Home extends Component{
	state={
		modalVisible: false,
	}
	handleToggleModal=(media)=>{
		this.setState({
			modalVisible: !this.state.modalVisible,
			media: media
		});
		console.log(this.state.media.src)
	}
	render(){
		return(
			<HandleError>
				<HomeLayout>
					<Related />
					<Categories 
						categories={this.props.data.categories}
						handleOpenModal={this.handleToggleModal}
					/>
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal
								handleClick={this.handleToggleModal}
							>
								<VideoPlayer 
									src={this.state.media.src}
									autoplay
									title={this.state.media.title}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
}

export default Home 