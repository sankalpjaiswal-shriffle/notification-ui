import "./App.css";
import Notification from "./components/Notification";

function App() {
  return (
    <div>
      <Notification
        severity={"success"}
        variant={"PRIMARY"}
        heading="Success"
        description="Task 1 completed"
        action={"all"}
        disabled={false}
        onOpen={() => {}}
        onClose={() => {}}
        autoHideDuration={null}
        onUndo={() => {}}
      />
    </div>
  );
}

export default App;
