import themes from "./scripts/themes.js";
import { getArticle } from "./scripts/articles.js";
import rbutton from "./scripts/components/radio.js";

const KEYS_THEME = "theme";
const TOPICS = ["objects", "classes", "generators", "es6", "react", "other"];

const switcher = document.getElementById("topics");
const content = document.getElementById("content");
const defaultTopic = localStorage.getItem(KEYS_THEME) || TOPICS[0];

switcher.addEventListener("change", (event) => {
  const topic = event.target.value;
  setTopic(topic);
});

async function setTopic(topic) {
  setTheme(topic);
  try {
    const article = await getArticle(topic);
    content.innerHTML = article;
  } catch (err) {
    console.log(err);
  }
}

function setTheme(themeName) {
  const theme = themes.get(themeName);
  localStorage.setItem(KEYS_THEME, themeName);
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

function setStrokeLength() {
  const el = document.getElementsByClassName("radioMarker")[0];
  const length = el.getTotalLength();
  document.documentElement.style.setProperty(`--stroke-length`, length);
}

(function () {
  for (const topic of TOPICS) {
    switcher.appendChild(rbutton("topics", topic));
  }
  setTopic(defaultTopic);
  document.getElementById(defaultTopic).setAttribute("checked", true);
  setStrokeLength();
})();
