import React from "react";
import Styles from "./App.module.scss";

function App() {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftContainer}>
        <header className={Styles.header}>
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
        </header>
        <main className={Styles.content}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </main>
        <footer className={Styles.footer}>
          <div>
            10k+<span>Companies</span>
          </div>
          <div>
            314<span>Templates</span>
          </div>
          <div>
            12M+<span>Queries</span>
          </div>
        </footer>
      </div>
      <div className={Styles.rightContainer}>&nbsp;</div>
    </div>
  );
}

export default App;
