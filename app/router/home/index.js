import React, { Component } from 'react';
import './index.css';


class Home extends Component {
  constructor(props) {
    super(props)

  }
  handleClick(url) {
    alert(url)
  }
  render() {

    const data = [
      { url: 'http://beta-cs.zuolin.com:80/image/aW1hZ2UvTVRwbU1HRTRNR1l3TWpJd01ERmtNRFU0WW1ZMFpXWmlNams0TlRCaE5ETTRPQQ?ownerType=EhUsers&ownerId=311028&token=XziuXtH9BcR7hDx4uxVSkLlh8Tq7o6MnbY4wjGfdBp2Qi9nOzesoPI2i_8BXLbiWje_LMI7geEo_B_IYnzhwyvNRptS8gfoYb0zMPzAVoWo1G5EV22bL2GsgfhOUTjxF&pxw=1280&pxh=800' },
      { url: 'http://beta-cs.zuolin.com:80/image/aW1hZ2UvTVRwbE5URm1PR0ZoT0RsbE1UYzJNV016TVRZd05UWTVZekZsWTJWaU9EUTRNUQ?ownerType=EhUsers&ownerId=311028&token=XziuXtH9BcR7hDx4uxVSkLlh8Tq7o6MnbY4wjGfdBp2Qi9nOzesoPI2i_8BXLbiWje_LMI7geEo_B_IYnzhwyvNRptS8gfoYb0zMPzAVoWo1G5EV22bL2GsgfhOUTjxF&pxw=1024&pxh=640' }
    ]
    return (
      <div className="root">
        {data.map((item, i) =>
          <div onClick={() => this.handleClick(item.url)} key={i}>
            <img src={item.url} />
          </div>
        )}
      </div>
    )
  }
}

export default Home;