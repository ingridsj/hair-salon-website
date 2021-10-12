import "./index.scss";

export function Profile() {
  return (
    <div className="profile-container">
      <h1>Salões que você já visitou</h1>

      <div className="profile-info">
        <img
          src="https://dominiquemakowski.github.io/authors/gandalf/avatar_hu26b06be530b08e9b91eb9c90bbd4ed3d_163032_270x270_fill_q90_lanczos_center.jpg"
          alt="Avatar"
        />
        <span className="profile-social-media">@youshallnotpass</span>
        <span>Você já:</span>
      </div>

      <div className="profile-services">
        <div className="profile-company-title">
          <h3>Serviços que você mais utilizou:</h3>
        </div>
      </div>
    </div>
  );
}
