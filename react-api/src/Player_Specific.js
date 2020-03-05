import React, { Component } from "react";

class Player_Specific extends Component {

  constructor(props) {
    super(props);
    this.state = {player: [], input: null};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange1 = this.onChange1.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost/backend1/api/playerByName?name='+this.state.input)
    .then(response => {
      if (response.status != 200) {
      }  else {
        return response.json();
      }
    }).then(result => {
      this.setState({
        player:result
      });
    });
  }

  onChange1(e) {
    e.preventDefault();
    this.setState({input:e.target.value})
  }

  render() {
    const result = this.state.player;
    let comp;
    if (result!=undefined) {
      comp = (
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
          this.state.player.map(function(item, key) {
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
      )
    } else {
      comp = <h2>No data found</h2>
    }

    return (
      <div id="container">
      <h1>Search Specific Athlete</h1>
      <br />
      <form onSubmit={this.handleSubmit}>
      <p>
      <input type="text" name="title"  onChange={this.onChange1} placeholder="Search.."/>
      </p>
      <p>
      <input type="submit" className="button1" value="Search" />
      </p>
      </form>
      {comp}
      </div>
    );
  }
  
}

export default Player_Specific;
