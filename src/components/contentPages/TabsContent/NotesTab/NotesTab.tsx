import React, { FC, useState, useEffect } from 'react';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { ReactComponent as AddIcon } from "@assets/icons/add.svg";
import { ReactComponent as CustomSelectIcon } from "@assets/icons/expand.svg";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './NotesTab.scss';

interface NotesTabProps { }

const NotesTab: FC<NotesTabProps> = () => {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [note, setNote] = useState<string>('');
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const handleNoteChange = (value: string) => {
    setNote(value);
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem('course-notes');
    if (storedNotes) {
      setSavedNotes(JSON.parse(storedNotes));
    }
  }, []);

  const handleSaveNote = () => {
    const newNotes = [...savedNotes, note];
    setSavedNotes(newNotes);
    localStorage.setItem('course-notes', JSON.stringify(newNotes));
    setNote('');
    setShowEditor(false);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'b') {
        setShowEditor(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Box
      className='NotesTab' data-testid='NotesTab' >
      {!showEditor ?
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', marginBottom: '20px' }}>
          <Button
            onClick={() => { setShowEditor(true) }}
            className='addNoteBtn'>
            Create a new note at 3:14 <AddIcon />
          </Button>
        </Box>
        :
        <>
          <Typography className='timer fw-700 fs-18 mn-b-2' >
            3:14
          </Typography>

          <ReactQuill
            theme="snow"
            value={note}
            onChange={handleNoteChange}
            placeholder="Type your note here..."
          />
          <div className='d-flex d-justify-end gap-2 mn-b-3'>
            <Button className='cancelBtn fw-700' variant="outlined" onClick={() => { setShowEditor(false) }}>Cancel</Button>
            <Button className='addBtn fw-700 ' variant="contained" onClick={handleSaveNote}>Save Note</Button>
          </div>
        </>
      }
      <Box sx={{ display: 'flex', gap: {xs:'20px' , md:'33px'},  flexDirection: { xs: 'column', sm:"row"  },}} className="mn-b-2">
        <Box
        >
          <Select
            defaultValue=""
            displayEmpty
            IconComponent={CustomSelectIcon}
            className='custom-select'>
            <MenuItem value="">All lectures</MenuItem>
            <MenuItem value="Lecture 1">Lecture 1</MenuItem>
            <MenuItem value="Lecture 2">Lecture 2</MenuItem>
          </Select>
        </Box>

        <Box
        >
          <Select
            defaultValue=""
            displayEmpty
            IconComponent={CustomSelectIcon}
            className='custom-select'>
            <MenuItem value="">Sort by most recent</MenuItem>
            <MenuItem value="Recent">Most Recent</MenuItem>
            <MenuItem value="Oldest">Oldest</MenuItem>
          </Select>
        </Box>
      </Box>

      <Typography variant='subtitle1' className='fs-18  ' >
        Click the "Create a new note" box, the "+" button, or press "B" to make your first note.
      </Typography>

      <Box className='saved-notes' sx={{ marginTop: '20px' }}>
        {savedNotes.length > 0 &&
          savedNotes.map((savedNote, index) => (
            <Box
              key={index}
              className="note"
            >
              <Typography variant='h6'>Note {index + 1}:</Typography>
              <div dangerouslySetInnerHTML={{ __html: savedNote }} />
            </Box>
          ))
        }
      </Box>
    </Box>
  );
};



export default NotesTab;
