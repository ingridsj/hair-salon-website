import { FeatureBox } from "../FeatureBox";
import { feature1, feature2, feature3 } from "../../../assets/images/index";

import "./index.scss";

export function Feature() {
  return (
    <div className="wrapper">
      <div className="why-alternative">
        <h2 className="why-alternative-title">
          Por que escolher a Alternative HairCuts?
        </h2>
        <p className="why-alternative-description">
          Nós somos uma rede especializada para cuidar do seu cabelo
          alternativo. Chega de cortes químicos e cabelos quebradiços por um
          preço que cabe no seu bolso. Agende um horário e venha conhecer a
          Alternative HairCuts!
        </p>
        <div className="why-container">
          <FeatureBox
            image={feature1}
            title="Fácil agendamento online"
            text="Nosso moderno site de agendamentos permite que você agende de
                qualquer lugar um horário em qualquer um de nossos
                estabelecimentos"
          />
          <FeatureBox
            image={feature2}
            title="Consultoria"
            text="Faça uma consultoria gratuita com um dos nossos profissionais
                para avaliação do seu cabelo"
          />
          <FeatureBox
            image={feature3}
            title="Melhores profissionais"
            text="Profissionais selecionados para cuidar do seu cabelo"
          />
        </div>
      </div>
    </div>
  );
}
