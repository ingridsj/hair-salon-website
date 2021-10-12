import { ScheduleButton } from "../../components/ScheduleButton";

import "./index.scss";

export function HistoryPage() {
  return (
    <div className="history-container">
      <h1>Você ainda não possui agendamentos</h1>
      <ScheduleButton />
    </div>
  );
}
