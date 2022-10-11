import "../css/style.css";
import HandleInput from "./input";
import UI from "./UI";

class App {
  static run() {
    UI.loadUI();
    HandleInput.start();
  }
}

App.run();
