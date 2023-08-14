import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

import Carousel from "react-bootstrap/Carousel";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./home.css";
function Home() {
  const [query,setquery]=useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  };
  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <div>
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
              value={query}
              onChange={(e)=>{
                setquery(e.target.value)
              }}
            />
           
          </Form>
          <p>Order's are waiting for you</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div className="container">
        {" "}
        {foodCat !== []
          ? foodCat.map((item) => {
              return (
                <div className="row mb-3">
                  <div key={item._id} className="fs-3 m-3 ">
                    {item.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter(
                        (item1) => (item1.CategoryName == item.CategoryName) && (item1.name.toLowerCase().includes(query.toLocaleLowerCase()))
                      )
                      .map((filteItems) => {
                        return (
                          <div
                            key={filteItems._id}
                            className="col-12 col-md-6 col-lg-3 "
                          >
                            <Card
                          foodItem={filteItems}
                              options={filteItems.options[0]}
                            
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div> No such Data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
  
    </div>
  );
}

export default Home;
