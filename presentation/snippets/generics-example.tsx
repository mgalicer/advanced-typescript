import * as React from 'react';

interface MyComponentProps {
  header: string;
}

interface MyComponentState {
  callout: string;
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  render() {
    return(
      <div>
        <h1>{this.props.header}</h1>
        <h2>{this.state.callout}</h2>
      </div>
    );
  }
}