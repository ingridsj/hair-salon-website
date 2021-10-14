import { Link } from "react-router-dom";
import { ScheduleButton } from "../../components/ScheduleButton";
import { user } from "../../utils/user";

export function Schedule() {
  return (
    <div className="history-container">
      <h2 className="header-name">
        {user.map(
          (data) => `Olá ${data.name}, aqui está os seus agendamentos atuais.`
        )}
      </h2>
      <div className="history-message">
        <h1>Você ainda não possui agendamentos</h1>
        <Link to="/dashboard/new-schedule">
          <ScheduleButton />
        </Link>
      </div>
    </div>
  );
}
