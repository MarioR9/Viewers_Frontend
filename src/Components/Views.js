import React from 'react'
import { Form, Button } from 'react-bootstrap';
import swal from 'sweetalert2';

export default class Viewers extends React.Component{
  //state will store plataform, channel and num of viewers
  constructor(props) {
    super(props);
    this.state = {channel: '',
                  numOfViewers: 0,
                  status: true,
                  
                  }
  }
//handlers for request to start and stop viewing.
  handleRequest=()=>{
    this.setState({status: false})
    const data = {website: this.state.channel, numOfViewers: this.state.numOfViewers, status: "active"}
    console.log(data)
    const options = {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
       },
      body: JSON.stringify(data),
    }
    fetch(`https://viewersbackend.herokuapp.com/api`, options)
    .then(resp=>resp.json())
    .then(data => {swal.fire(data.status)})

    .catch(err => {
      // Error handling
      console.log("Error Reading data " + err);
    });

  }
  handleStatusState=()=>{
    const data = {website: this.state.channel, numOfViewers: this.state.numOfViewers, status: "close"}
    console.log(data)
    this.setState({status: true})
    const options = {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
       },
      body: JSON.stringify(data),
    }
    fetch(`https://viewersbackend.herokuapp.com/api`, options)
    .then(resp=>resp.json())
    .then(data => {swal.fire(data.status)})

    .catch(err => {
      // Error handling
      console.log("Error Reading data " + err);
    });
  }
  
  
  render(){
    return(
      
      <div className="Form-Container">
          {/* CHannel or webiste not determine yet. Could have a drop down menu instead with main streaming platforms */}
          <Form.Label>Enter Channel Website</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ channel: e.currentTarget.value })}} type="text" placeholder="https://www.twitch.tv/user"/>
          <Form.Text className="text-muted">
            This process is for testing only.
          </Form.Text>
          <Form.Label>Desired Number of Viewers</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ numOfViewers: e.currentTarget.value })}} type="text" placeholder="Number of Viewers" />
          {this.state.status === false ?
          <Button onClick={this.handleStatusState} variant="danger" type="submit">Stop</Button>
          :
          <Button onClick={this.handleRequest} variant="success" type="submit"> Send</Button>
          }
      </div>
    )
  }
}







