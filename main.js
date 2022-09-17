'use strict';
import themes from './scripts/themes.js';
import { getArticle } from './scripts/articles.js';

const switcher = document.getElementById('topics');
const content = document.getElementById('content');
const defaultTopic = 'objects';

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
    Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
}

setTopic(defaultTopic);