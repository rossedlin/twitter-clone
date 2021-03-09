import React from 'react';
import Icon from './Icon';

function Link({Text, href, classes}) {
  return (
    <a href={href} className={classes}>
      {Text}
    </a>
  );
}

Link.defaultProps = {
  href: '#',
  classes: 'btn btn-primary m-3',
};

export default Link;
