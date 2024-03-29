import React from 'react';
import {NavLink} from "react-router-dom";

const UserList = ({users}) => {

    return (
        <div className={'main-container'}>
            <div className={'user-list list-container'}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Search user by name</span>
                    <form onSubmit={e => {
                        e.preventDefault();
                        // navigate(`/${searchVal}`);
                    }} className={'d-flex needs-validation was-validated'}
                    >
                        <input
                            id={'search_input'}
                            className="form-control"
                            type="text"
                            required
                            onChange={e => console.log(e)}
                        />
                        <button type={'submit'} className={'btn btn-sm btn-outline-secondary'}>
                            Search User
                        </button>
                    </form>
                </div>

                <div className="list-group mb-3">
                    {users.map((user, i) =>
                        <div
                            key={i}
                            className="test d-flex justify-content-between align-items-center list-group-item list-group-item-action"
                        >
                            <div>{user.name}</div>
                                <div className={'user-list__btns d-flex justify-content-between'}>
                                    <NavLink className={'btn btn-light'} to={`/posts/${user.id}`}>Posts</NavLink>
                                    <NavLink className={'btn btn-light'} to={`/albums/${user.id}`}>Albums</NavLink>
                                </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserList;