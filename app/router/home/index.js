import React, { Component } from 'react';
import './index.less';

const prefix = "lew_carousel";
const data = [
  { url: 'http://beta-cs.zuolin.com:80/image/aW1hZ2UvTVRwbU1HRTRNR1l3TWpJd01ERmtNRFU0WW1ZMFpXWmlNams0TlRCaE5ETTRPQQ?ownerType=EhUsers&ownerId=311028&token=XziuXtH9BcR7hDx4uxVSkLlh8Tq7o6MnbY4wjGfdBp2Qi9nOzesoPI2i_8BXLbiWje_LMI7geEo_B_IYnzhwyvNRptS8gfoYb0zMPzAVoWo1G5EV22bL2GsgfhOUTjxF&pxw=1280&pxh=800' },
  { url: 'http://beta-cs.zuolin.com:80/image/aW1hZ2UvTVRwbE5URm1PR0ZoT0RsbE1UYzJNV016TVRZd05UWTVZekZsWTJWaU9EUTRNUQ?ownerType=EhUsers&ownerId=311028&token=XziuXtH9BcR7hDx4uxVSkLlh8Tq7o6MnbY4wjGfdBp2Qi9nOzesoPI2i_8BXLbiWje_LMI7geEo_B_IYnzhwyvNRptS8gfoYb0zMPzAVoWo1G5EV22bL2GsgfhOUTjxF&pxw=1024&pxh=640' }
]
class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nowIndex: 0
    }

    this.timer =null

  }

  componentWillMount(){
    this.timer = setInterval(()=> {
       let index = ++this.state.nowIndex
       if (index > data.length -1) {
         index=0
       }
       this.setState({ nowIndex: index})
    },1000)
  }
  
  componentWillUnmount(){
     clearInterval(this.timer);
  }

  componentDidMount(){
    // console.log(this.refs.carousel.offsetWidth)
	}
  render() {
    const { nowIndex } = this.state

    const lisWidth =  window.innerWidth;
    return (
      <div className="root">
        <div className={prefix} ref="carousel">
          <div  className={`${prefix}-ul`} style={{width: data.length*lisWidth, transform: `translate3d(-${lisWidth*nowIndex}px,0,0)`}}>
              {data.map((item, i) =>
                <div  className={`${prefix}-li`} key={i}>
                   <img src={item.url} />
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;