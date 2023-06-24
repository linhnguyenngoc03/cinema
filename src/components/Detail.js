import { useParams } from "react-router-dom";
import { Films } from "../shared/ListOfFilms";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { useState } from 'react';
import { Icon } from 'react-materialize';
import ModalCase from './ModalCase';

export default function Detail() {
  const userName = useParams();
  const { theme } = useContext(ThemeContext);
  const Film = Films.find((obj) => {
    return obj.id == userName.id;
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      
      <div className="image-detail">
        <Link to="/">
          <img className="imageDetail" src={`../${Film.img}`} />
        </Link>
      </div>
      <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
        <Icon>ondemand_video</Icon>
      </a>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={Film} />}
      <div>
        <div className="title-detail">{Film.name}</div>
        <div className="film-details">
          <p>Date: {Film.date}</p>
          <p>Type: {Film.type}</p>
          <p>Time: {Film.time}</p>
          <div className="film-description">{Film.info}</div>
        </div>
      </div>
    </div>
  );
}
