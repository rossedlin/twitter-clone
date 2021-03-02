import React, {useRef, useState} from 'react';

import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

***REMOVED***
 *
 * @return {*|JSX.Element}
 * @constructor
***REMOVED***
function Icon({Image, Name, Placement, Classes}) {

  const [show, setShow] = useState(false***REMOVED***
  const target = useRef(null***REMOVED***

  return (
    <>
      <a href="#" ref={target} onClick={() => setShow(!show)}>
        <img src={Image} className={Classes} alt={Name}/>
      </a>
      <Overlay target={target.current} show={show} placement={Placement}>
        {(props) => (
          <Tooltip className="tooltip-danger" {...props}>
            {Name} not yet available in demo.
          </Tooltip>
        )}
      </Overlay>
    </>
  ***REMOVED***
}

Icon.defaultProps = {
  Placement: 'top',
  Classes: 'btn-icon',
};

export default Icon;
