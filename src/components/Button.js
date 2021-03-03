***REMOVED***
import Icon from './Icon';

function Button({Text, Classes}) {
  return (
    <button type={"submit"} className={Classes}>{Text}</button>
  ***REMOVED***
}

Button.defaultProps = {
  Text: 'Button',
  Classes: 'btn btn-primary m-3',
};

export default Button;
