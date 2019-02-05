import React, { PureComponent } from 'react';
import styles from './media.css'
import PropTypes from 'prop-types';

class Media extends PureComponent {
  state={
    author:'J Solarte'
  }
  /*constructor(props){
      super(props)
      //this.handleClick=this.handleClick.bind(this);
      this.state={
        author: props.author
      }
    }
    */
    
    handleClick=(event)=>{
      //console.log(this.props.title)
      this.props.openModal(this.props)
    }
    
  render(){
    /*const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }*/
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.cover}
            alt=""
            width={255}
            height={155}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes={
  cover: PropTypes.string,
  title: PropTypes.string,
  //author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video','audio'])
}

export default Media;