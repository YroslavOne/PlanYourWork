import { Pencil } from 'react-bootstrap-icons';
import React, { useEffect, useRef, useState } from 'react';

function Editor(props) {
  const editRef = useRef();

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (editRef.current && !editRef.current.contains(event.target)) {
        setEdit(false);
      } else {
        setEdit(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function enterName() {
    if (edit === false) {
      return (
        <div>
          <h2>{props.valueName}</h2> <Pencil />{' '}
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            value={props.valueName}
            onChange={(e) => props.setValueName(e.target.value)}
          />
        </div>
      );
    }
  }
  return (
    <div className="settings-timer-name" ref={editRef}>
      {enterName()}
    </div>
  );
}
export default Editor;
