'use strict';
import themes from './scripts/themes.js';
import { getArticle } from './scripts/articles.js';

const KEYS_THEME = 'theme';
const DEFAULT_TOPIC = 'objects';

const switcher = document.getElementById('topics');
const content = document.getElementById('content');
const defaultTopic = localStorage.getItem(KEYS_THEME) || DEFAULT_TOPIC;

switcher.addEventListener('change', (event) => {
    const topic = event.target.value;
    setTopic(topic);
});

async function setTopic(topic) {
    setTheme(topic);
    const article = await getArticle(topic);
    content.innerHTML = article;
}

function setTheme(themeName) {
    const theme = themes.get(themeName);
    localStorage.setItem(KEYS_THEME, themeName);
    Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
}

function setStrokeLength() {
    const el = document.getElementsByClassName('radioMarker')[0];
    const length = el.getTotalLength();
    document.documentElement.style.setProperty(`--stroke-length`, length);
}

(function (){
    setTopic(defaultTopic);
    setStrokeLength();
    document.getElementById(defaultTopic).setAttribute('checked', true);
})()