/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

import fs from 'fs';
import marked from 'marked';

var content;

const renderer = new marked.Renderer();

renderer.list = (body, ordered, start) => {
    let type = ordered ? 'ol' : 'ul',
        style = ' style="list-style-type: upper-roman;"',
        startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + style + startatt + '>\n' + body + '</' + type + '>\n';
};

fs.readFile('markedCustomRenderer.md', 'utf8', (err, data) => {
    if (err)
    {
        throw err;
    }

    content = data;

    console.log("Original Markdown Text:\n\n" + content + "\n");
    console.log("Output: \n");
    toMarkdown();
});

const toMarkdown = () => {
    let processedText = marked(content, {
        sanitize: true,
        renderer
    });

    console.log(processedText);
};
