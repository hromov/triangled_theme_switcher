'use strict';
import themes from './themes.js';

const switcher = document.getElementById('topics');

switcher.addEventListener('change', (event) => {
  const topic = event.target.value;
  setTopic(topic);
});

function setTopic(topic) {
    setTheme(topic);
}

function setTheme(themeName) {
    const theme = themes.get(themeName);
    Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
}