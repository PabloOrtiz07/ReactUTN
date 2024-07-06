import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../home.css';
import productsData from '../assets/productsData.json';

const Home = () => {
  const { user, logout } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <Container className="home">
      <h1 className="mt-5 title">Welcome, {user.username}</h1>
      <Button className="logout title" onClick={logout}>Logout</Button>
      <h2 className="mt-4 title">Products</h2>
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <Row className="align-items-center">
              <Col sm={4}>
                <img
                  className="d-block w-100"
                  src={product.image}
                  alt={product.name}
                />
              </Col>
              <Col sm={8}>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <Button id="buy"variant="primary">Buy Now</Button> {}
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
    </Container>
  );
};

export default Home;
