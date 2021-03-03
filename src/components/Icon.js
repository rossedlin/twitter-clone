import React, {useRef, useState} from 'react';

import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

***REMOVED***
 *
 * @return {*|JSX.Element}
 * @constructor
***REMOVED***
function Icon({Image, Name, Href, Placement, Classes}) {

  const [show, setShow] = useState(false***REMOVED***
  const target = useRef(null***REMOVED***

  if (Href !== '#') {
    return IconEnabled({Image, Name, Href, Placement, Classes}***REMOVED***
  } else {
    return IconDisabled({Image, Name, Href, Placement, Classes}***REMOVED***
  }
}

***REMOVED***
 *
 * @param Image
 * @param Name
 * @param Href
 * @param Placement
 * @param Classes
 * @returns {JSX.Element}
 * @constructor
***REMOVED***
function IconEnabled({Image, Name, Href, Placement, Classes}) {

  const [show, setShow] = useState(false***REMOVED***
  const target = useRef(null***REMOVED***

  return (
    <>
      <a href={Href}>
        <img src={Image} className={Classes} alt={Name}/>
      </a>
    </>
  ***REMOVED***
}

***REMOVED***
 *
 * @param Image
 * @param Name
 * @param Href
 * @param Placement
 * @param Classes
 * @returns {JSX.Element}
 * @constructor
***REMOVED***
function IconDisabled({Image, Name, Href, Placement, Classes}) {

  const [show, setShow] = useState(false***REMOVED***
  const target = useRef(null***REMOVED***

  return (
    <>
      <a href={Href} ref={target} onClick={() => setShow(!show)}>
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
  Href: '#',
  Placement: 'top',
  Classes: 'btn-icon',
};

export default Icon;
