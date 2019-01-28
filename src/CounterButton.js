/*
  This file is probably REAL full of errors now; hopefully!
*/

function addFiveToCount(someNumber) {
  const result = someNumber + 5;

  return result;
}

export class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = _event => {
    const { count } = this.state;
    this.setState({
      count: count
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div style={{ backgroundColor: this.props.backgroundColor }}>
        <button onClick={this.increment}>
          {count}
        </button>
        <button onClick={() => addFiveToCount(count)}>
          + 5
        </button>
      </div>
    );
  }
}
