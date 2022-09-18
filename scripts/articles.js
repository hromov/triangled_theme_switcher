'use strict';

const baseURL = 'https://hromov.github.io/triangled_theme_switcher';

export async function getArticle(articleID) {
    const resp = await fetch(`${baseURL}/fake_api/${articleID}.json`);
    const quotations = await resp.json();
    return quotationsToHTML(quotations);
}

function quotationsToHTML(quotations) {
    const sorted = quotations.sort((a, b) => a.quotation.length - b.quotation.length);
    return sorted.map(q =>`<blockquote>${q.quotation}</blockquote>`).join('');
}