import React, {Component} from 'react'

import './index.less'

class Home extends Component {
  render() {
    return (
      <h5 className="content-header" onClick={() => this.props.update('Home也更改了，哈哈哈哈啊哈哈~~~')}>
        {this.props.name}
      </h5>
    )
  }
}
export default Home

