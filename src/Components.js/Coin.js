import React, { Component } from 'react'
import './CoinStyles.css'

export default class coin extends Component {
  render() {
    return(<div className='coin'>
            <img src={this.props.info.imgUrl} alt={this.props.info.side}/>
          </div>
    )
    
  }
}
