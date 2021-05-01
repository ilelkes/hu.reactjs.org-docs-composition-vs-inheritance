import React from 'react';
import ReactDOM from 'react-dom';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Üdvözöljük"
      message="Köszönjük, hogy meglátogatta űrhajónkat!" />
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render() {
    return (
      <Dialog title="Mars Kutató Program"
        message="Hogy hívjunk?">
        <input value={this.state.login}
          onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Írj fel engem!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Üdv a fedélzeten, ${this.state.login}!`);
  }
}

ReactDOM.render(
  <React.StrictMode>
    <WelcomeDialog />
    <SignUpDialog />
  </React.StrictMode>,
  document.getElementById('root')
);