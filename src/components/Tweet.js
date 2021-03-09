import React from 'react';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Tweet({auth, message}) {

  const {username, displayName, text, uid, photoURL, createdAt} = message;

  return (
    <div className="row">
      <div className="col-12">
        <div className="row border-bottom border-dark">
          <div className="col-3">
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
                 className="img img-fluid rounded-circle rounded p-2"/>
          </div>
          <div className="col-9 p-2 text-white">
            <h6>{displayName || "Unknown"} <span className="text-dark">@{username || 'unknown'} - </span></h6>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
