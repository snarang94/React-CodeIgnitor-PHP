import React, { Component } from "react";

class Player_All extends Component {

  constructor(props) {
    super(props);
    this.state = {players: []};
  }

  componentDidMount() {
    fetch('http://localhost/backend1/api/players')
    .then(response => {
      return response.json();
    }).then(result => {
      console.log(result);
      this.setState({
        players:result
      });
    });
  }

  render() {
    return (
      <div id="container">
      <h1>All Athlete Lists</h1>
      <p/>
      <table>
      <thead>
      <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
      <th>Province</th>
      <th>Country</th>
      </tr>
      </thead>
      <tbody>
      {
        this.state.players.map(function(item, key) {
          return (
            <tr key = {key}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
            <td>{item.province}</td>
            <td>{item.country}</td>
            </tr>
          )
        }.bind(this))
      }
      </tbody>
      </table>
      </div>
    )
  }
}

export default Player_All;
