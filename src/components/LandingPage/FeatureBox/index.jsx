import "./index.scss";

export function FeatureBox(props) {
  return (
    <div className="why-alternative-item">
      <div className="why-alternative-img">
        <img src={props.image} alt="" />
      </div>
      <div className="why-alternative-text">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
