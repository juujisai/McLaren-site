import React from 'react';


class LastResult extends React.Component {

  constructor(props) {
    super(props)
    this.result = props.result
  }

  state = {

  }


  render() {

    // const {}

    console.log(this.result)
    return (
      <div>Hello from last result</div>
    );
  }
}

export default LastResult;