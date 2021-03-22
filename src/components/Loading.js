import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Loading() {
  return (
    <div className="container loading">
      <div className="row">
        <div className="col-12">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      </div>
    </div>
  );
}

export default Loading;
