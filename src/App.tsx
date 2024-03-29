import React from 'react';
import {Route, Switch} from 'react-router-dom';
import UserList from "./pages/UserList";
import UserAlbums from "./pages/UserAlbums";
import UserPosts from "./pages/UserPosts";

function App({users, albums, posts}) {
    return (
        <Switch>
            <Route exact path="/" render={() => <UserList users={users}/>}/>
            <Route path="/albums/:userId" render={() => <UserAlbums albums={albums}/>}/>
            <Route path="/posts/:userId" render={() => <UserPosts posts={posts}/>}/>
        </Switch>
    );
}

export default App;
