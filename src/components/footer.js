import React from 'react';
import './footer.css';

function Footer(props) {
  return (
    <footer role="contentinfo">
      {props.children}
      {/* <ul>
        <li>Email</li>
        <li>GI</li>
        <li>LI</li>
      </ul> */}
      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
       */}
    </footer>
  );
}

export default Footer;