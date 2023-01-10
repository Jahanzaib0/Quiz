import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Nav = () => {
  return (
    <div className='bg-danger'>
        <marquee behaviour="slide" direction="right" className="text-warning mb-0 ">this is for practice</marquee>
       <Navbar bg="dark" >
        <Container>
          <Navbar.Brand className='text-light'>My Quiz App</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav
