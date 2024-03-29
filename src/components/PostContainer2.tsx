import React, {useEffect, useState} from 'react';
import {postAPI} from "../service/PostService";

const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100);

    return (
        <div>
            HELLO EVERYODY
            {/*{isLoading && <>isLoading</>}*/}
            {/*{error && <>eororror</>}*/}
            {/*/!*{posts && posts.map(post =>*!/*/}
            {/*/!*    <PostItem key={post.id} post={post}/>*!/*/}
            {/*/!*)}*!/*/}
        </div>
    );
};

export default PostContainer2;