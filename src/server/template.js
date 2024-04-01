// eslint-disable-next-line @typescript-eslint/no-var-requires
const App = require('../../dist/server.bundle.js').default; // Assuming your server bundle is exported as default

// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require('react');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { renderToString } = require('react-dom/server');

export default function template(appString, initialState, cssStyles) {
    const appString2 = renderToString(React.createElement(App));

    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>${initialState?.title}</title>
        <style>
              ${cssStyles}
        </style>
        <meta name="description" content="${initialState?.description}">
      </head>
      <body>
        <div id="root">${appString2}</div>
            <script src="/server.bundle.js" type="application/json" ></script>
            <script src="/../public/bundle.js" type="application/json" ></script>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js" type="application/json" ></script>
<!--        <script src="/bundle.js" type="application/json" ></script>-->
      </body>
    </html>
  `;
}