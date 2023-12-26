import React from 'react';
import { IssuestManagerContext } from '../../IssuestManagerContext';
import './ButtonSession.css';

function ButtonSession() {
   
    const { setOpenFloatMenu } = React.useContext(IssuestManagerContext);
    
    return (
      <button
        className="button-session"
        onClick={() => {
          setOpenFloatMenu((state) => !state);
        }}
      ></button>
    );
}

export { ButtonSession };