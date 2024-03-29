import React from 'react';

const UserPosts = ({posts}) => {
    return (
        <div className={'main-container'}>
            <div className={'post-list list-container'}>
                <div className="list-group">
                    {posts.map((post, i) =>
                        <div
                            key={i}
                            className="d-flex justify-content-between flex-column align-items-center list-group-item list-group-item-action"
                        >
                            <div>
                                <h3 className={'mb-2'}>{post.title}</h3>
                                <div>{post.body}</div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </div>
    );
};

export default UserPosts;