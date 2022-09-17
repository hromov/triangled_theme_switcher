'use strict';

export async function getArticle(articleID) {
    const resp = await fetch(`/fake_api/${articleID}.json`);
    const quotations = await resp.json();
    return quotationsToHTML(quotations);
}

function quotationsToHTML(quotations) {
    return quotations.map(q =>`<blockquote>${q.quotation}</blockquote>`).join('');
}