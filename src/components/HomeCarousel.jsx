import Carousel from "react-bootstrap/Carousel";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Img from "../img.jpg"

function HomeCarousel() {
  return (
    <Carousel className="carousel" style={{objectFit:"contain"}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 yo"
          src="https://source.unsplash.com/random/900x700/?burger"
          alt="First slide"
          style={{filter:"brightness(30%)"}}
        />
        <Carousel.Caption>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <p>delicious pizza's are here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 yo"
          src="https://source.unsplash.com/random/900x700/?pastry"
          alt="Second slide"
          style={{filter:"brightness(30%)"}}
        />
        <Carousel.Caption>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <p>Tastefull and spicy food is here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 yo"
          src="https://source.unsplash.com/random/900x700/?barbeque"
          alt="Third slide"
          style={{filter:"brightness(30%)"}}
        />
        <Carousel.Caption>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <p>Order's are waiting for you</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
