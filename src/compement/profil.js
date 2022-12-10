import React from "react"
import {Card,Button} from "react-bootstrap"
import PropTypes from "prop-types"

 export default function Product(props){
return(
    <Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        {props.children}
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.Text}
      </Card.Text>
      <Button variant="primary" onClick={()=>props.eventHandler( props.title) }>{props.textButton}</Button>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>  
)
}

Product.defaultProps={
    title:"buy",
    textButton:"sumbit",
    text:"islem",
}

Product.propTypes ={
  title:PropTypes.string,
  textButton:PropTypes.string,
  text:PropTypes.string,
}