import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import AppServer from '../../../AppServer';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../../../createEmotionCache';

let uiRouter = express.Router();

const renderFullPage = (html, css) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>My page</title>
            ${css}
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
    </html>`;
}

uiRouter.get("/*", (req, res) => {
    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

    // Render the component to a string
    const html = ReactDOMServer.renderToString(
        <AppServer
            cache={cache}
            location={req.url}
            context={{}}
        />
    );

    // Grab the CSS from emotion
    const emotionChunks = extractCriticalToChunks(html);
    const emotionCss = constructStyleTagsFromChunks(emotionChunks);

    // Send the rendered page back to the client.
    res.send(renderFullPage(html, emotionCss));

    /*
    const indexFile = path.resolve('./public/index.html');
  
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        let newHTML = data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        console.log("What is new HTML?");
        console.log("**********");
        console.log(newHTML);
        console.log("**********");

        return res.send(
            
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
    */
})

export default uiRouter;
