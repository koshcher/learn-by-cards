import ErrorPage from "./pages/error.js";
import LearnPage from "./pages/learn.js";
import RememberPage from "./pages/remember.js";
import ScorePage from "./pages/score.js";
import StartPage from "./pages/start.js";
import WordService from "./services/word-service.js";

// fully static because only one
// need access to navigatoTo() from anywhere
export default class App {
  static container = document.getElementById('container');

  static pages = {
    start: StartPage,
    learn: LearnPage,
    remember: RememberPage,
    score: ScorePage,
    error: ErrorPage
  }

  static navigateTo(page, args) {
    this.container.replaceChildren(this.pages[page](args));
  }

  static run() {
    this.navigateTo('start');
  }
}

App.run();