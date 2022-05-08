import React from 'react'
import {Card,Row,Col,Container} from 'react-bootstrap';

const Works_section = () => {
    const  obj = [
        {
            url : "https://1hq6f244nzqssy4d8fp6y7re-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/foto-studio-franca-sorentto-3.jpg"
        },
        {
            url : "https://shanewebber.com/wp-content/uploads/2018/09/best-wedding-portraits-combermere-abbey-10001.jpg"
        },
        {
            url : "https://marylineg1.sg-host.com/blog/wp-content/uploads/2020/02/best-backpacker-parties-Carnival-@nessytg.jpg"
        },
        {
            url : "https://catering-kvatric.hr/wp-content/uploads/2017/04/best-party-planner.jpg"
        },
        {
            url : "https://images.squarespace-cdn.com/content/v1/5528192ae4b04359ebf93b9c/1645978951871-MK8CW9969IUBHQOKI44X/2021-11-09_0003.jpg"
        },
        {
            url : "https://images.squarespace-cdn.com/content/v1/58afd9c56b8f5b3d48d93b3f/1592266574726-7UGK2MD87V5RE9154Z77/Macedon+Family+Photographer+Natural+Candid+035.JPG"
        },
        {
            url : "https://s.yimg.com/ny/api/res/1.2/4oLOCosDnATHeGmPhsYk9w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTk2MQ--/https://s.yimg.com/uu/api/res/1.2/36fnTJK080v3N2ufsza8LQ--~B/aD0xNDQwO3c9OTU5O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/elle_865/86082a5f3bb574f02f2dbc5dcb7e2634"
        },
        {
            url : "https://assets.teenvogue.com/photos/61571c326731b10f0d42b580/master/w_2876,h_4314,c_limit/1341898222"
        },
    ]
return (
<Container>
    <h1 style={{textAlign : 'center', marginBottom: '30px'}}>My Latest Works</h1>
    <Row className="shadow-lg p-3 mb-5 bg-white rounded">
        {obj.map((x) => (
            <Col xs={12} md={6} lg={3}>
                <Card style={{border: 'none'}} align="center" className="pb-4">
                    <img src={x.url} alt="Logo" style={{height:'400px'}}/>
                </Card>
            </Col>
        ))}
    </Row>
</Container>
)
}

export default Works_section