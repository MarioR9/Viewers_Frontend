import React from 'react'
import { Form, Button } from 'react-bootstrap';

export default class Viewers extends React.Component{
  //state will store plataform, channel and num of viewers
  constructor(props) {
    super(props);
    this.state = {plataform: '',
                  channel: '',
                  numOfViewers: 0,
                  fbVideoNumber: 0
                  }
  }
  handleRequest=()=>{
    const data = { location: value}
    const options = {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
       },
      body: JSON.stringify(data),
    }
    fetch(`http://${localHost}:3000/api`, options)
    .then(resp=>resp.json())
    .then(data)
  }

  
  render(){
    return(
      
      <div className="Form-Container">
      <Form>
        <Form.Group >
          <Form.Label>Enter Channel Website</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ channel: e.currentTarget.value })}} type="text" placeholder="Channel Name" />
          <Form.Text className="text-muted">
            This process is for testing only.
          </Form.Text>
          <Form.Label>Desired Number of Viewers</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ numOfViewers: e.currentTarget.value })}} type="text" placeholder="Number of Viewers" />
        </Form.Group>
        
        <Button variant="primary" type="submit">

         
        </Button>
      </Form>
        
      </div>
    )
  }
}







