'use strict';

export async function getArticle(articleID) {
    const resp = await fetch(`/fake_api/${articleID}.json`);
    const quotations = await resp.json();
    return quotationsToHTML(quotations);
}

function quotationsToHTML(quotations) {
    const sorted = quotations.sort((a, b) => a.quotation.length - b.quotation.length);
    return sorted.map(q =>`<blockquote>${q.quotation}</blockquote>`).join('');
}