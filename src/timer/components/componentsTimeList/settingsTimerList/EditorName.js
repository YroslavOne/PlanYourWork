import { Pencil } from 'react-bootstrap-icons';
import React, { useEffect, useRef, useState } from 'react';
import './editorName.css';

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
        <div className="settings-editor-name-text">
          <h2 className="settings-editor-name-text-title">{props.valueName}</h2>{' '}
          <Pencil className="settings-editor-name-text-pencil" />
        </div>
      );
    } else {
      return (
        <div className="settings-editor-name-text">
          <input
            className="settings-editor-name-input"
            type="text"
            value={props.valueName}
            onChange={(e) => props.setValueName(e.target.value)}
          />
        </div>
      );
    }
  }
  return (
    <div className="settings-editor-name" ref={editRef}>
      {enterName()}
    </div>
  );
}
export default Editor;
