import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardTitle, Row, Col, Card, Container } from 'react-materialize'
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { Slide, Slider } from "react-materialize";
export default function Film({ Films }) {
  const [film, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <Slider>
          <Slide image={<img className="slide" alt="" src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448-min.jpg" />}></Slide>
          <Slide image={<img className="slide" alt="" src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980wx448h_34.jpg" />}></Slide>
          <Slide image={<img className="slide" alt="" src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_2__20.jpg" />}></Slide>
          <Slide image={<img className="slide" alt="" src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_1__38.jpg" />}></Slide>
          <Slide image={<img className="slide" alt="" src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x480.jpg" />}></Slide>
          <Slide image={<img className="slide" alt="" src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/o/c/ocb-x-cgv-980x448_6.jpg" />}></Slide>
        </Slider>
      <Container className="center">
        <Row>
          {Films.map((film) => (
            <Col s={12} m={6} l={4} key={film.id}>
              <Card className="filmcard" style={{ border: '2px solid gray', backgroundColor: theme.backgroundColor, color: theme.color, borderRadius: '4%', marginTop: '2rem' }}>
                <a href='#popup1' id='openPopup' onClick={() => { setFilm(film) }}>
                  <CardTitle image={film.img}></CardTitle>
                </a>
                <h5>{film.name}</h5>
                <p>Date: {film.date}</p>
                <p>Type: {film.type}</p>
                <p>Time: {film.time}</p>
                <p>
                  <button className="button">
                    <Link style={{ color: 'white' }} to={`/detail/${film.id}`}>Detail</Link>
                  </button>
                </p>
              </Card>
            </Col>
          ))}
          <div id="popup1" className="overlay">
            <div className="popup" style={{ overflow : 'auto', maxHeight : '85vh' }}>
              <img src={film.img} />
              <h2>{film.name}</h2>
              <a className="close" href="#/">
                &times;
              </a>
              <div className="content">{film.info}</div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}