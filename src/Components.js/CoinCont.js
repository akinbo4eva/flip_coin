import React, { Component } from 'react'
import Coin from './Coin'
import './HelperFile'
import './CoinContStyles.css'
import { choice } from './HelperFile'

export default class CoinCont extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgUrl: "https://media.istockphoto.com/photos/quarter-dollar-coin-picture-id622195712?s=612x612"},
            { side: "tails", imgUrl: "https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091?s=612x612"},
        ]
       
    }
    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0,
            
        }

    }

    flipCoin = () => {
        const newCoin = choice(this.props.coins);
        this.setState(curState =>  {
            return {
                currCoin: newCoin,
                numFlips: curState.numFlips + 1,
                numHeads: curState.numHeads + (newCoin.side === "heads" ? 1 : 0),
                numTails: curState.numTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }

    handleChange = (e) => {
        this.flipCoin()
    }
  render() {
    return (
      <div className='coincont'>
        <h1>FlipCoin!</h1>
        <h3>Click the button below to generate head or tail</h3>
        <button onClick={()=> this.handleChange()}>Button</button>
        {this.state.currCoin &&<Coin info={this.state.currCoin} />}
        <p>Out of {this.state.numFlips} flips, there have been <span>{this.state.numHeads}</span>{" "} 
        heads and <span>{this.state.numTails}</span> tails.</p>
      </div>
    )
  }
}
