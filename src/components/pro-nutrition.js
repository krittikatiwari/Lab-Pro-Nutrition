import React, { Component } from 'react'

export default class pronutrition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:props.test[1].img,
         name:props.test[1].name,
         cal: null,
         zed:null,
         get:props.test,
      }
    }

    set(e){
      // e.PreventDefault();
      this.setState({
        cal:e.target.value,
      })
    }


    neww(elt){
      // console.log(elt.cal)
      this.setState({
        zed:(elt.cal)*(this.state.cal),
      })
    }

  




  render() {
    return (
      <div>
        <div>pro-nutrition</div>
        {
            this.state.get.map((elt)=>{
                return(
                  <div>
                    <div className='main'>
                    <div className='set'>
                        <div className='padding'>
                        <img className='img' src={elt.img} alt='' />
                        </div>
                        <div>
                            <div>{elt.name}</div>
                            <div>{elt.cal}</div>
                        </div>
                        <div className='input'>
                          <div>
                            <input value={this.state.cal} type='number' placeholder='type the quantity' onChange={(e)=>this.set(e)} />
                          </div>
                          <div>
                            <button onClick={()=>this.neww(elt)}>+</button>
                          </div>
                        </div>
                    </div>
                    <div className='item'>
                      <div>
                        {this.state.cal}{elt.name}={this.state.zed}calries
                      </div>
                      <div className='reset'>
                        <button>Reset</button>
                      </div>
                    </div>
                    </div>
                    </div>
                )
            })
        }
      </div>
    )
  }
}