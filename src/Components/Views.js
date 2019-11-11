import React from 'react'
import { Form, Button } from 'react-bootstrap';


export default class Viewers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {plataform: '',
                  channel: '',
                  numOfViewers: 0
                  }
  }
  
  render(){
    return(
      
      <div className="Form-Container">
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Select Plataform</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ plataform: e.currentTarget.value })}} as="select">
            <option>Twitch</option>
            <option>Mixer</option>
            <option>Facebook</option>
            <option>Youtube</option>
          </Form.Control>
          <Form.Label>Enter Channel Name</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ channel: e.currentTarget.value })}} type="text" placeholder="Channel Name" />
          <Form.Text className="text-muted">
            This process is for testing only.
          </Form.Text>
          <Form.Label>Desired Number of Viewers</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ numOfViewers: e.currentTarget.value })}} type="text" placeholder="Number of Viewers" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Start Viewers
        </Button>
      </Form>
        
      </div>
    )
  }
}







