import { Link } from "react-router-dom";
import { ScheduleButton } from "../../ScheduleButton";
import "./index.scss";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-main">
        <div className="wrapper">
          <div className="hero-container">
            <h1 className="title__primary">
              Seja a sua melhor versão em suas diferentes formas
            </h1>
            <p className="hero-description">
              Agende um horário agora mesmo venha se transformar com a gente!
            </p>
            <Link to="/login" className="hero-button">
              <ScheduleButton />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
