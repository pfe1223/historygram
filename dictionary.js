'use strict'

const apiUrl = 'https://script.googleusercontent.com/a/macros/frenchamericansf.org/echo?user_content_key=WPeJjiqDTKVxbF779L8ccgVhOgjCr4djNKou3taKGZOt2ik2URr3b4C3pXf2RupQDs7nBbbv5I58-9oRDCac0uytAE4OrHSNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9Bk2oLzHZ00smNfPIV6oX3WEJxaFjP5-rVfjz3uJKLFhQmTIwkgjMpjbZ6jQiANxOZ2BqiZVlnJdzvkz0UmHZtj7whTm7KAIOmmCirtq9jFU64hOhXHC03&lib=MANS7h3wUsx08HbKkAPprpYNReYje0vAd'

class Historygram extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.titleArea = this.titleArea.bind(this)
    this.dataArea = this.dataArea.bind(this)
  }

  componentWillMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(result => this.setState({
        data: result
      }))
      .catch(error => error);
  }

  socialFeed() {
    return <div>
      {this.titleArea()}
      {this.dataArea()}
    </div>
  }

  titleArea() {
    return <div id="titleDiv">
            <h1> Historygram </h1>
           </div>
  }

  dataArea() {
    return <div id="posts">

    </div>
  }

  render() {
    console.log(this.state.data)
    return this.socialFeed()
  }
}

ReactDOM.render(
  <Historygram />,
  document.getElementById('historygramArea')
);
