import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Third() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>REACT JS ROUTER</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fp1.pxfuel.com%2Fpreview%2F653%2F702%2F399%2Frose-flower-flowers-red-rose-royalty-free-thumbnail.jpg&tbnid=ZkA2MtUPXGbYGM&vet=12ahUKEwjixMKStJ6DAxVKa2wGHdMVCEcQMygRegQIARBo..i&imgrefurl=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fsearch%3Fq%3Drose%2B-%2Bflower&docid=PVA7dw9f8IX4_M&w=350&h=263&q=flower%20images&ved=2ahUKEwjixMKStJ6DAxVKa2wGHdMVCEcQMygRegQIARBo" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <p style={{color:'pink'}}>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
    </>
  )
}

export default Third