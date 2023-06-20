import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      history: '0'
    };
  }

  handleClick = event => {
    this.setState({
      result: this.state.result.concat(event.target.name)
    });
  };

  calculate = () => {
    try {
      this.setState({
        history: this.state.result,
        result: eval(this.state.result).toString()
      });
    } catch (err) {
      this.setState({
        result: 'Error'
      });
    }
  };

  allClear = () => {
    this.setState({
      result: ''
    });
  };

  clear = () => {
    this.setState(prevState => {
      return {
        result: prevState.result.slice(0, prevState.result.length - 1)
      };
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div>
            <form>
              <p id="hist">{this.state.history}</p>
              <input type="text" value={this.state.result} />
            </form>
          </div>
          <div className="keypad">
            <button className="btn-primary btn" onClick={this.allClear} id="Allclear">
              AC
            </button>
            <button className="btn-primary btn" onClick={this.clear} id="backspace">
              C
            </button>
            <button className="btn-primary btn" name="/" onClick={this.handleClick}>
              &divide;
            </button>
            <button className="btn-primary btn" name="7" onClick={this.handleClick}>
              7
            </button>
            <button className="btn-primary btn" name="8" onClick={this.handleClick}>
              8
            </button>
            <button className="btn-primary btn" name="9" onClick={this.handleClick}>
              9
            </button>
            <button className="btn-primary btn" name="*" onClick={this.handleClick}>
              &times;
            </button>
            <button className="btn-primary btn" name="4" onClick={this.handleClick}>
              4
            </button>
            <button className="btn-primary btn" name="5" onClick={this.handleClick}>
              5
            </button>
            <button className="btn-primary btn" name="6" onClick={this.handleClick}>
              6
            </button>
            <button className="btn-primary btn" name="-" onClick={this.handleClick}>
              &ndash;
            </button>
            <button className="btn-primary btn" name="1" onClick={this.handleClick}>
              1
            </button>
            <button className="btn-primary btn" name="2" onClick={this.handleClick}>
              2
            </button>
            <button className="btn-primary btn" name="3" onClick={this.handleClick}>
              3
            </button>
            <button className="btn-primary btn" name="+" onClick={this.handleClick}>
              +
            </button>
            <button className="btn-primary btn" name="0" onClick={this.handleClick}>
              0
            </button>
            <button className="btn-primary btn" name="." onClick={this.handleClick}>
              .
            </button>
            <button className="btn-primary btn" onClick={this.calculate} id="result">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
