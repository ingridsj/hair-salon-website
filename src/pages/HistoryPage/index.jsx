import { ScheduleButton } from "../../components/ScheduleButton";
import { user } from "../../utils/user";

import "./index.scss";

export function HistoryPage() {
  return (
    <div className="history-container">
      <h2 className="header-name">
        {user.map(
          (data) =>
            `Olá ${data.name}, aqui está o seu histórico de agendamentos.`
        )}
      </h2>
      <div className="history-message">
        <h1>Você ainda não possui agendamentos</h1>
        <ScheduleButton />
      </div>
    </div>
  );
}
