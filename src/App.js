// src\App.js

import Header from "./components/Header";

const App = () => {
  return (
    <>
        {/* Utilizzare i props per passere le informazioni */}
      <Header />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
};

export default App;
