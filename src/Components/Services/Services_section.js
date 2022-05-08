import React from 'react'
import {Card,Row,Col,Container} from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const Services_section = () => {
const  obj = [
    {
        url : <i class="bi bi-camera" style={{fontSize: '30px'}}></i>,
        title1 : "Photo shooting",
        p1 : "high-quality and vibrant photos foreach of you"
    },
    {
        url : <i class="bi bi-camera-reels" style={{fontSize: '30px'}}></i>,
        title1 : "video shooting",
        p1 : "capture your moments so that they always remain with you"
    },
    {
        url : <i class="bi bi-image" style={{fontSize: '30px'}}></i>,
        title1 : "Retouch",
        p1 : "You photos will be the most beautiful"
    },
    {
        url : <i class="bi bi-mic" style={{fontSize: '30px'}}></i>,
        title1 : "Sound recording",
        p1 : "Only high-quality recording of your sound and its processing"
    }
]
return (
<Container>
    <h1 style={{textAlign : 'center', marginBottom: '30px'}}>What can do for you</h1>
    <Row>
        {obj.map((x) => (
            <Col xs={12} md={6} lg={3} className="shadow-lg p-3 mb-5 bg-white rounded">
                <Card style={{padding: '10px', border: 'none' }} align="center">
                    {x.url}
                    <Card.Body>
                        <Card.Title className='text-danger'>{x.title1}</Card.Title>
                        <Card.Text>
                        {x.p1}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
</Container>
)
}
export default Services_section