import "./index.scss";

import { backgroundimage } from "../../../assets/images/index";
import { ScheduleButton } from "../../../components/ScheduleButton";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="about">
      <div className="about-image">
        <img src={backgroundimage} alt="Imagem de Celular" />
      </div>
      <div className="about-text">
        <h2>Lorem</h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          molestiae porro quae nobis magni tempora inventore et asperiores
          beatae alias expedita culpa, id possimus nostrum quos accusantium
          quaerat, laboriosam aliquid?
        </p>
        <Link to="./login">
          <ScheduleButton />
        </Link>
      </div>
    </div>
  );
}
