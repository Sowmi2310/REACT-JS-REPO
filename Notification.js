import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck,} from '@fortawesome/free-regular-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
function Notification() {
  return (
    <>
    <Container>
        <Row>
          <h1 style={{textAlign:'center'}}>Notification</h1>
            <Col xs="12" sm="12" md="12"  lg="12" xl="12">
            <h4 className='bg-primary p-3'><FontAwesomeIcon icon={faCircleCheck} fade /> INFORMATION MESSAGE</h4>
            </Col>
            <Col xs="12" sm="12" md="12"  lg="12" xl="12">
            <h4 className='bg-success p-3'><FontAwesomeIcon icon={faCircleCheck} fade /> SUCCESS MESSAGE</h4>
            </Col>
            <Col xs="12" sm="12" md="12"  lg="12" xl="12">
            <h4 className='bg-warning p-3'><FontAwesomeIcon icon={faBell} shake /> WARNING MESSAGE</h4>
            </Col>
            <Col xs="12" sm="12" md="12"  lg="12" xl="12">
            <h4 className='bg-danger p-3'><FontAwesomeIcon icon={faCircleExclamation} beat /> ERROR MESSAGE</h4>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Notification