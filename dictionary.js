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
  render() {
    this.titleArea()
    this.dataArea()
  }
}

ReactDOM.render(
  <Historygram />,
  document.getElementById('historygramArea')
);
