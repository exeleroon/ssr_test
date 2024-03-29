export default function template(appString, initialState, cssStyles) {
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
        <div id="root">${appString}</div>
            <script src="/server.bundle.js" type="application/json" ></script>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js" type="application/json" ></script>
<!--        <script src="/bundle.js" type="application/json" ></script>-->
      </body>
    </html>
  `;
}