'use strict';

export async function getArticle(articleID) {
    const resp = await fetch(`/fake_api/${articleID}.json`);
    const article = await resp.json();
    return articleToHTML(article);
}

function articleToHTML(article) {
    return `
        <h1>${article.title}</h1>
        <img src="${article.image}">
        <p>${article.content}</p>
    `;
}