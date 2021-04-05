import React from 'react';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Tweet({message}) {

  const {displayName, text, photoURL, createdAt} = message;

  return (
    <div className="tweet">
      <div>
        <div>
          <div className="tweet-image">
            <img src={photoURL || 'https://i.stack.imgur.com/wPh0S.jpg'} alt="Profile Picture"/>
          </div>
          <div className="tweet-text">
            <h6>{displayName || 'Unknown'} <span> - {createdAt.toDate().toLocaleDateString()}</span></h6>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
