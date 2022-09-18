'use strict';

const baseURL = 'https://hromov.github.io/triangled_theme_switcher';

export async function getArticle(articleID) {
    const resp = await fetch(`${baseURL}/fake_api/${articleID}.json`);
    const quotations = await resp.json();
    const sorted = quotations.sort((a, b) => a.quotation.length - b.quotation.length);
    return quotationsToHTML(sorted);
}

function quotationsToHTML(quotations) {
    return quotations.map(q =>`<blockquote>${q.quotation}</blockquote>`).join('');
}