import React, { Component } from 'react'

class KeypadComponent extends Component {

  render() {
    return (
      <div className='button'>
        <button className='symbols' name='(' onClick={e => this.props.onClick(e.target.name)}>(</button>
        <button className='clear' name='CE' onClick={e => this.props.onClick(e.target.name)}>CE</button>
        <button className='symbols' name=')' onClick={e => this.props.onClick(e.target.name)}>)</button>
        <button className='clear' name='C' onClick={e => this.props.onClick(e.target.name)}>C</button>
          <br/>
        <button className='number' name='1' onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button className='number' name='2' onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button className='number' name='3' onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button className='symbols' name='+' onClick={e => this.props.onClick(e.target.name)}>+</button>
          <br/>
        <button className='number' name='4' onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button className='number' name='5' onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button className='number' name='6' onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button className='symbols' name='-' onClick={e => this.props.onClick(e.target.name)}>-</button>
          <br/>
        <button className='number' name='7' onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button className='number' name='8' onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button className='number' name='9' onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button className='symbols' name='*' onClick={e => this.props.onClick(e.target.name)}>*</button>
          <br/>
        <button className='symbols' name='.' onClick={e => this.props.onClick(e.target.name)}>.</button>
        <button className='number' name='0' onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button className='equal' name='=' onClick={e => this.props.onClick(e.target.name)}>=</button>
        <button className='symbols' name='/' onClick={e => this.props.onClick(e.target.name)}>/</button>
          <br/>
      </div>
    )
  }
}

export default KeypadComponent