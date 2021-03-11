import React from 'react';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Tweet({message}) {

  const {username, displayName, text, photoURL, createdAt} = message;

  return (
    <div className="row">
      <div className="col-12">
        <div className="row border-bottom border-dark">
          <div className="col-3">
            <img src={photoURL || 'https://i.stack.imgur.com/wPh0S.jpg'}
                 className="img img-fluid rounded-circle rounded p-2"
                 alt="Profile Picture"/>
          </div>
          <div className="col-9 p-2 text-white">
            <h6>{displayName || 'Unknown'} <span className="text-dark">@{username || 'unknown'} - {createdAt.toDate().toLocaleDateString()}</span></h6>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
