import Login from "./app/pages/login";
import Tasks from "./app/pages/task";

function App() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Login />;
  }

  return <Tasks />;
}

export default App;
