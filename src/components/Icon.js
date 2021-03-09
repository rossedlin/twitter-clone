import React, {useRef, useState} from 'react';

import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

/**
 *
 * @return {*|JSX.Element}
 * @constructor
 */
function Icon({Image, Name, Href, Placement, Classes}) {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  if (Href !== '#') {
    return IconEnabled({Image, Name, Href, Placement, Classes});
  } else {
    return IconDisabled({Image, Name, Href, Placement, Classes});
  }
}

/**
 *
 * @param Image
 * @param Name
 * @param Href
 * @param Placement
 * @param Classes
 * @returns {JSX.Element}
 * @constructor
 */
function IconEnabled({Image, Name, Href, Placement, Classes}) {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <a href={Href}>
        <img src={Image} className={Classes} alt={Name}/>
      </a>
    </>
  );
}

/**
 *
 * @param Image
 * @param Name
 * @param Href
 * @param Placement
 * @param Classes
 * @returns {JSX.Element}
 * @constructor
 */
function IconDisabled({Image, Name, Href, Placement, Classes}) {

  const [show, setShow] = useState(false);
  const target = useRef(null);

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
  );
}

Icon.defaultProps = {
  Href: '#',
  Placement: 'top',
  Classes: 'btn-icon',
};

export default Icon;
