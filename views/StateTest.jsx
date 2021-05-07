class StateTest extends React.Component {

  // 初期化みたいな感じ
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleCount = this.handleCount.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
  }

  // クリックしらら count を +1 する関数
  handleCount() {
    this.setState({ count: this.state.count + 1 });
  };

  // クリックしらら count を -1 する関数
  handleReduce() {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div>クリック回数： {this.state.count}</div>
        <button onClick={this.handleCount}>+1</button>
        <button onClick={this.handleReduce}>-1</button>
      </>
    )
  }
}