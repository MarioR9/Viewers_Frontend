import React from 'react'
import { Form, Button } from 'react-bootstrap';
import StartBot from './Start'
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

 
  render(){
    return(
      
      <div className="Form-Container">
      <Form>
        <Form.Group >
        <Form.Label>Select Plataform</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ plataform: e.currentTarget.value })}} as="select">
            <option>Twitch</option>
            <option>Mixer</option>
            <option>Facebook</option>
            <option>Youtube</option>
          </Form.Control>
          {this.state.plataform === 'Facebook'?
          <Form.Group ><Form.Label>Enter Fb Video Number</Form.Label><Form.Control onChange={(e)=>{this.setState({ fbVideoNumber: e.currentTarget.value })}} type="text" placeholder="Video number" /></Form.Group>
          :null}
          <Form.Label>Enter Channel Name</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ channel: e.currentTarget.value })}} type="text" placeholder="Channel Name" />
          <Form.Text className="text-muted">
            This process is for testing only.
          </Form.Text>
          <Form.Label>Desired Number of Viewers</Form.Label>
          <Form.Control onChange={(e)=>{this.setState({ numOfViewers: e.currentTarget.value })}} type="text" placeholder="Number of Viewers" />
        </Form.Group>
        
        <Button onClick={
        <StartBot 
        fbVideoNumber={this.state.fbVideoNumber}
        channel={this.state.channel} 
        numOfViewers={this.state.numOfViewers} 
        plataform={this.state.plataform}
        />} variant="primary" type="submit">

          Start Viewers
        </Button>
      </Form>
        
      </div>
    )
  }
}







