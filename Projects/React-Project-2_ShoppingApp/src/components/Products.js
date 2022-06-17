import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    Button,
  } from "react-bootstrap";
class Products extends Component {
    constructor(props) { 
        super(props)
        
        this.state = {
            productItems: [
                {
                    id: '1',
                    title: 'JBL Tune 760NC',
                    description: 'JBL Tune 760NC, Over Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, JBL Pure Bass, Google Fast Pair, Dual Pairing, AUX & Voice Assistant Support for Mobile Phones (Black)',
                    image: "https://m.media-amazon.com/images/I/61HXCeozUjL._AC_UY327_FMwebp_QL65_.jpg"
                },
                {
                    id: '2',
                    title: 'Boat Rockerz 425',
                    description: 'Boat Rockerz 425 Bluetooth Wireless Over Ear Headphones with Mic and Boat Signature Sound, Beast Mode for Gaming, Enx Tech, ASAP Charge, 25H Playtime, Bluetooth V5.2 (Active Black)',
                    image: 'https://m.media-amazon.com/images/I/61XvYOrqVeL._AC_UY327_FMwebp_QL65_.jpg'
                },
                {
                    id: '3',
                    title: 'Rewy E750 Wireless Bluetooth',
                    description: 'Rewy E750 Wireless Bluetooth Over The Ear Headphone with Mic, Deep Bass, HD Sound, 13hrs Music Play time, Aux Port for All Smartphones & Other Devices (Black)',
                    image: 'https://m.media-amazon.com/images/I/61CJzuhf-4L._AC_UY327_FMwebp_QL65_.jpg'
                },
                {
                    id: '4',
                    title: 'Boult Audio ProBass Thunder',
                    description: 'Boult Audio ProBass Thunder Over-Ear Wireless Bluetooth Headphones with Mic, Headset with Long Battery Life',
                    image: 'https://m.media-amazon.com/images/I/71q--MThR1L._AC_UY327_FMwebp_QL65_.jpg'
                },
                {
                    id: '5',
                    title: 'pTron Studio Over Ear Bluetooth 5.0 Wireless Headphones',
                    description: 'pTron Studio Over Ear Bluetooth 5.0 Wireless Headphones with Mic, Hi-Fi Sound with Deep Bass, 12Hrs Playback, Ergonomic & Lightweight Wireless Headset, Soft Cushions Earpads, Aux Port - (Black)',
                    image: 'https://m.media-amazon.com/images/I/513PuLtilUL._AC_UY327_FMwebp_QL65_.jpg'
                },
                {
                    id: 6,
                    title:'Sony WH-CH510 Bluetooth Wireless On Ear Headphones',
                    description: 'Sony WH-CH510 Bluetooth Wireless On Ear Headphones with up-to 35Hrs Playtime, Lightweight with Mic, Type-C, Play/Pause Control, 30mm Driver, BT Version 5.0, Voice Assistant Support (Blue)',
                    image: 'https://m.media-amazon.com/images/I/41i+KMBAFjL._AC_UY327_FMwebp_QL65_.jpg'
                },

            ]
        }
    }
    render() {
        let { productItems } = this.state
    return (
      <Container>
        <h1 className="display-1">Welcome to IndeedNeed Shop</h1>
        <p className="lead">One stop for all your households.</p>
        <Row>
          {productItems.map((product) => (
              <Col md={3} xs={12} style={{ margin: "10px 0" }} key={ product.id }>
              <Card style={{ width: "18rem", margin: "auto", height: '685px' }}>
                <Card.Img
                  variant="top"
                          src={product.image}
                          style={{ padding: '25px', maxHeight: '375px'}}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                          <Card.Text>{ product.description}</Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products