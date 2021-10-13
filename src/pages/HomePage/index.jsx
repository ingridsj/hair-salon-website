import { ScheduleButton } from "../../components/ScheduleButton";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./index.scss";

export function HomePage() {
  return (
    <div>
      <header class="header">
        <a class="header__logo" href="./home">
          <span>Alternative HairCuts</span>
        </a>
        <input type="checkbox" id="menu" class="menu__checkbox" />
        <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="#">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              About
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Contact
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Blog
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Careers
            </a>
          </li>
        </ul>
        <label for="menu" class="menu__hamburger"></label>
        <div className="btn">
          <ScheduleButton />
        </div>
      </header>
      <section class="hero">
        <div class="hero__main">
          <div class="wrapper">
            <div class="hero__grid">
              <div class="hero__image"></div>
              <div class="hero__content">
                <h1 class="title__primary">
                  Seja a sua melhor versão nas suas diferentes formas
                </h1>
                <p class="description">
                  Agende um horário agora mesmo venha se transformar com a
                  gente!
                </p>
                <ScheduleButton />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="why-alternative">
        <div class="wrapper">
          <h2 class="title__primary">
            Por que escolher a Alternative HairCuts?
          </h2>
          <p class="why-alternative__description">
            Nós somos uma rede especializada para cuidar do seu cabelo
            alternativo. Chega de cortes químicos e cabelos quebradiços. Agende
            um horário e venha conhecer a Alternative HairCuts!
          </p>
          <div class="why-alternative__grid">
            <article class="why-alternative__feature">
              <img src="./static/images/icon-online.svg" alt="Online Banking" />
              <h3 class="title__secondary">Fácil agendamento online</h3>
              <p class="description">
                Nosso moderno site de agendamentos permite que você agende de
                qualquer lugar um horário em qualquer um de nossos
                estabelecimentos
              </p>
            </article>
            <article class="why-alternative__feature">
              <img
                src="./static/images/icon-budgeting.svg"
                alt="Simple Budgeting"
              />
              <h3 class="title__secondary">Consultoria</h3>
              <p class="description">
                Faça uma consultoria gratuita com um dos nossos profissionais
                para avaliação do seu cabelo
              </p>
            </article>
            <article class="why-alternative__feature">
              <img
                src="./static/images/icon-onboarding.svg"
                alt="Fast Onboarding"
              />
              <h3 class="title__secondary">Melhores profissionais</h3>
              <p class="description">
                Profissionais selecionados para cuidar do seu cabelo
              </p>
            </article>
            <article class="why-alternative__feature">
              <img src="./static/images/icon-api.svg" alt="Open API" />
              <h3 class="title__secondary">Em breve</h3>
              <p class="description">
                Em breve aplicativo para celular estará disponível para
                agendamento e pagamento online dos serviços.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section class="latest-articles">
        <div class="wrapper">
          <h2 class="title__primary">Latest Articles</h2>
          <div class="latest-articles__grid">
            <article class="latest-articles__item">
              <img
                src="https://capricho.abril.com.br/wp-content/uploads/2021/05/cabelo-colorido-roxo-ondulado.jpg?quality=85&strip=info"
                height="200"
                alt="Cabelo Colorido"
              />
              <div class="latest-articles__item-content">
                <small class="latest-articles__item-autor">By Ingrid</small>
                <h3 class="title__tertiary">Coloração em cabelo cacheado</h3>
                <p class="latest-articles__item-description">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </article>
            <article class="latest-articles__item">
              <img
                src="https://todecacho.com.br/wp-content/uploads/2018/08/cabelo-raspado-feminino1.jpg"
                height="200"
                alt="Cabelo Raspado"
              />
              <div class="latest-articles__item-content">
                <small class="latest-articles__item-autor">By Ingrid</small>
                <h3 class="title__tertiary">Mulheres de cabelo raspado</h3>
                <p class="latest-articles__item-description">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </article>
            <article class="latest-articles__item">
              <img
                src="https://static1.fiquediva.com.br/articles/7/96/17/@/99947-alguns-tons-conseguem-lembrar-bastante-a-article_gallery_portrait-3.jpg"
                height="200"
                alt="Plane"
              />
              <div class="latest-articles__item-content">
                <small class="latest-articles__item-autor">By Ingrid</small>
                <h3 class="title__tertiary">
                  Nova tendência: cabelo unicórnio
                </h3>
                <p class="latest-articles__item-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, dicta necessitatibus harum, ducimus veniam
                  reprehenderit vero architecto laudantium odio perspiciatis
                  mollitia voluptatem debitis voluptatibus! Enim, perspiciatis!
                  Iste ex dolorem quo? …
                </p>
              </div>
            </article>
            <article class="latest-articles__item">
              <img
                src="https://static1.segredosdesalao.com.br/articles/2/20/07/2/@/256676-o-mullet-e-um-corte-de-cabelo-androgino-article_list_block-3.jpg"
                height="200"
                alt="Cabelo Unicórnio"
              />
              <div class="latest-articles__item-content">
                <small class="latest-articles__item-autor">By Ingrid</small>
                <h3 class="title__tertiary">Mullet Hair: veio pra ficar?</h3>
                <p class="latest-articles__item-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, dicta necessitatibus harum, ducimus veniam
                  reprehenderit vero architecto laudantium odio perspiciatis
                  mollitia voluptatem debitis voluptatibus!
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="wrapper">
          <div class="footer__grid">
            <a class="footer__logo" href="/">
              <span>Alternative HairCuts</span>
            </a>
            <div class="footer__social">
              <a href="#" className="footer__icon">
                <AiFillFacebook />
              </a>
              <a href="#" className="footer__icon">
                <AiFillTwitterSquare />
              </a>
              <a href="#" className="footer__icon">
                <AiOutlineInstagram />
              </a>
            </div>
            <div class="footer__links">
              <a href="#" class="footer__link">
                About Us
              </a>
              <a href="#" class="footer__link">
                Contact
              </a>
              <a href="#" class="footer__link">
                Blog
              </a>
              <a href="#" class="footer__link">
                Careers
              </a>
              <a href="#" class="footer__link">
                Support
              </a>
              <a href="#" class="footer__link">
                Privacy Policy
              </a>
            </div>
            <div class="footer__button">
              <div className="btn">
                <ScheduleButton />
              </div>
            </div>
            <p class="footer__copyright">
              © Alternative HairCuts. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
