import { Outlet } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default App;
