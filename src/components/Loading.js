import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Loading() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-white font-weight-bold text-center" style={{fontSize: 36, marginTop: "30%"}}>
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      </div>
    </div>
  );
}

export default Loading;
