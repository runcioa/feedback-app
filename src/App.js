// src\App.js

import Header from "./components/Header";
import FeedBackItem from "./components/FeedBackItem";

const App = () => {
  return (
    <>
        {/* Utilizzare i props per passere le informazioni */}
      <Header />
      <div className="container">
        <FeedBackItem />
      </div>
    </>
  );
};

export default App;
