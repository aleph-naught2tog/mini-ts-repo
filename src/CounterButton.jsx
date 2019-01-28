/*
  This file is probably REAL full of errors now; hopefully!

  Specifically, before we add the JSX bit, it's probably full of JSX errors.
  So, first we make it .jsx, and add Component to our namepspace for React
*/

function addFiveToCount(someNumber) {
  const result = someNumber + 5;

  return result;
}

export class CounterButton extends React.Component {
  constructor(props) {
    // Since we gave the class "def" for a Component, it is now going "Hey,
    // you're sending in an argument..."
    super(props); // Now we're getting a "0 arguments expected error" -- yay!
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
