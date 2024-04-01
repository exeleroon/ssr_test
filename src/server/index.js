import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import App from '../App';
import {setupStore} from "../store/store";
import template from "./template";
import axios from "axios";
import '../styles/main.scss';
import * as fs from "fs";
import * as path from "path";

const routesArr = [
    {
        path: '?',
        title: 'User list',
        description: 'User list with posts and albums',
    },
    {
        path: '/posts',
        title: 'posts',
        description: 'Posts of ',
    },
    {
        path: '/albums',
        title: 'albums',
        description: 'Albums of ',
    },
    {
        path: '*',
        title: '404 Not Found',
        description: 'Oops! The page you are looking for does not exist.',
    },
];

const store = setupStore();
const app = express();
app.use(express.static('dist'));

const cssFilePaths = [
    path.resolve(__dirname, 'styles.css'),
];

const readCssFiles = () => {
    return Promise.all(cssFilePaths.map(filePath => {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, cssContent) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(cssContent);
                }
            });
        });
    }));
};

app.get('*', async (req, res) => {
    const appString = renderToString(React.createElement(App));

    // Read the compiled index.html file
    const indexPath = path.resolve(__dirname, '../dist/index.html');
    let indexHtml = fs.readFileSync(indexPath, 'utf8');

    // Inject the client-side bundle into the HTML
    const clientBundlePath = '/bundle.js'; // Path to your compiled client-side bundle
    indexHtml = indexHtml.replace('<head>', `<head><script src="${clientBundlePath}"></script>`);

    // Replace the placeholder with the rendered React app
    indexHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${appString}</div>`);
    res.send(indexHtml);


    //
    // try {
    //     const context = {};
    //     const splitRoute = req.originalUrl.split('/');
    //     const getTitleDesc = routesArr.find(route => route.path.includes(splitRoute[1]));
    //
    //     const getUserId = req.originalUrl.split('/').slice(-1)[0];
    //     let userId;
    //     if (!isNaN(parseInt(getUserId))) {
    //         userId = getUserId;
    //     }
    //
    //     const [customCss] = await readCssFiles();
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     const users = response.data;
    //
    //     const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
    //     const posts = responsePosts.data;
    //
    //     const responseAlbums = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=' + userId);
    //     const albums = responseAlbums.data;
    //
    //     if (splitRoute[1] !== '?' && getTitleDesc && userId) {
    //         const getUser = users.find(user => parseInt(user.id) === parseInt(userId));
    //         getTitleDesc.description = getTitleDesc.description + getUser?.name;
    //         getTitleDesc.title = getUser?.username + ' ' + getTitleDesc.title;
    //     }
    //
    //     users.sort(function (a, b) {
    //         if (a.name < b.name) {
    //             return -1;
    //         }
    //         if (a.name > b.name) {
    //             return 1;
    //         }
    //         return 0;
    //     })
    //
    //     const appString = renderToString(
    //         <Provider store={store}>
    //             <StaticRouter location={req.url} context={context}>
    //                 <App users={users} albums={albums} posts={posts}/>
    //             </StaticRouter>
    //         </Provider>
    //     );
    //
    //     const html = template(appString, getTitleDesc, customCss);
    //     res.send(html);
    //
    // } catch (error) {
    //     console.error('Error fetching users:', error);
    //     res.status(500).send('Internal Server Error');
    // }
});

app.get('/posts/:userId');
app.get('/albums/:userId');


app.listen('http://localhost:3000', () => {
    console.log('Server is listening on PORT 3000');
});
