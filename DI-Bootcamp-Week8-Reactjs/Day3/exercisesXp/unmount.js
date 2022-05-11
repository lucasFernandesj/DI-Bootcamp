import React from "react";

class ComponentUnmounts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {show: true};
      }
      delHeader = () => {
        this.setState({show: false});
      }
      render() {
        let myheader;
        if (this.state.show) {
          myheader = <Child />;
        };
        return (
          <div>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button>
          </div>
        );
      }
    }
    
   




class Child extends React.Component {
    componentWillUnmount() {
      alert("The h1 will desappear.");
    }
    render() {
      return (
        <h1>Works</h1>
      );
    }
  }

export default ComponentUnmounts