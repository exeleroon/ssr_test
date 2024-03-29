import React, {useEffect, useState} from 'react';
import {postAPI} from "../service/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";
import {NavLink} from "react-router-dom";

const PostContainer = () => {
    // const [limit, setLimit] = useState(100);
    // // polling int refresh request data every 10000000 sec
    // // refetch also send request for instance from btn
    // const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000000
    // });
    // const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation();
    // const [updatePost, {}] = postAPI.useUpdatePostMutation()
    // const [deletePost, {}] = postAPI.useDeletePostMutation()
    // console.log(postAPI)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3);
    //     }, 200000)
    // }, [])
    //
    // const handleCreate = async () => {
    //     const title = prompt();
    //     await createPost({title, body: title} as IPost)
    // }
    //
    // const handleRemove = (post: IPost) => {
    //     deletePost(post)
    // }
    //
    // const handleUpdate = (post: IPost) => {
    //     updatePost(post)
    // }


    return (
        <div>
            <NavLink to={'/about'}>GOHER22E</NavLink>
            <button>WHAFFFF</button>
            {/*{isLoading && <>isLoading</>}*/}
            {/*{error && <>eororror</>}*/}
            {/*{posts && posts.map(post =>*/}
            {/*    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>*/}
        </div>
    );
};

export default PostContainer;