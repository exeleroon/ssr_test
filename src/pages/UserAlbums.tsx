import React from 'react';

const UserAlbums = ({albums}) => {
    return (
        <div className={'main-container'}>
            <div className={'list-container'}>
                <div className="list-group">
                    {albums.map((album, i) =>
                        <div
                            key={i}
                            className="d-flex justify-content-between align-items-center list-group-item list-group-item-action"
                        >
                            <div>{album.title}</div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default UserAlbums;