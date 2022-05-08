import React from 'react'
import {Card,Row,Col,Container} from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const Pricing_section = () => {
const  obj = [
    {
        type : "MINIMUM",
        price : "200",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat similique delectus reiciendis, iusto nesciunt.",
        Offer : ["2 houres shoot", "50 photos avalible", "5 retouch"]
    },
    {
        type : "STANDARD",
        price : "600",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat similique delectus reiciendis, iusto nesciunt.",
        Offer : ["2 houres shoot", "100 photos avalible", "20 retouch"]
    },
    {
        type : "Premuim",
        price : "1000",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat similique delectus reiciendis, iusto nesciunt.",
        Offer : ["2 houres shoot", "200 photos avalible", "100 retouch"]
    },
]
return (
<Container>
    <h1 style={{textAlign : 'center', marginBottom: '30px'}}>Pricing</h1>
    <Row>
        {obj.map((x) => (
            <Col xs={12} md={4}>
                <Card style={{padding: '10px'}} align="center" className="shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Body>
                        <Card.Title className="font-weight-bold text-danger" style={{fontSize: '25px'}}>{x.type}</Card.Title>
                        <Card.Text>$ {x.price}</Card.Text>
                        <Card.Text>{x.info}</Card.Text>
                        <Card.Text>
                            {x.Offer.map(x => <Card.Text>{x}</Card.Text> )}
                        </Card.Text>
                        <button type="button" class="btn btn-outline-danger">Hire Me</button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
</Container>
)
}

export default Pricing_section