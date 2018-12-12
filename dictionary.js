'use strict'

const apiUrl = ''

class Historygram extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.titleArea = this.titleArea.bind(this)
    this.dataArea = this.dataArea.bind(this)
  }

  socialFeed() {
    return <div>
      {this.titleArea()}
      {this.dataArea()}
    </div>
  }

  titleArea() {
    return <div>
            <h1> Historygram </h1>
           </div>
  }

  dataArea() {

  }

  render() {
    return this.socialFeed()
  }
}

ReactDOM.render(
  <Historygram />,
  document.getElementById('historygramArea')
);
