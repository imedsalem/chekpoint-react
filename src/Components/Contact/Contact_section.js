import React from 'react'
import {Form,Col} from 'react-bootstrap';

const Contact_section = () => {
return (
    <>
        <h1 style={{textAlign : 'center', marginBottom: '30px'}}>Contact</h1>
        <div className="d-flex justify-content-center">
            <Col xs={10} className='text-danger'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label class="mb-2 d-flex justify-content-center" >Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" style={{boxShadow: 'inset 0px 0px 0px 0px red'}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label class="mb-2 d-flex justify-content-center">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} style={{boxShadow: 'inset 0px 0px 0px 0px red'}}/>
                    </Form.Group>
                    <div className='d-flex justify-content-center mb-5'>
                        <button type="button" className="btn btn-outline-danger" >Send</button>
                    </div>
                </Form>
            </Col>
        </div>
    </>
)
}

export default Contact_section