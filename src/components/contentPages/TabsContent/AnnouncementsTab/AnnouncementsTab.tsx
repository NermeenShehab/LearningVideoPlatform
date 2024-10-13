import React, { FC } from 'react';
import './AnnouncementsTab.scss';
import { Box, Paper, Typography } from '@mui/material';
import { Announcement } from 'types/course';


interface AnnouncementsTabProps {
  announcements: Announcement[];
}

const AnnouncementsTab: FC<AnnouncementsTabProps> = ({ announcements }) => {
  return (
    <Box className='AnnouncementsTab' data-testid='AnnouncementsTab'>
      {announcements.length === 0 ? (
        <Paper
          role="alert"
          className="pn-x-3 pn-y-4 d-flex d-align-center text-center flex-direction-col gap-1">
          <Typography className="placeholder fs-2 fw-700" >
            No announcements posted yet
          </Typography>
          <Typography className="announcement fs-18 text-center">
            The instructor hasn’t added any announcements to this course yet. Announcements are used to inform you of updates or additions to the course.
          </Typography>
        </Paper>
      ) : (
        announcements.map((announcement) => (
          <Paper
            key={announcement.id}
            role="article"
            tabIndex={0}
            className="pn-x-3 pn-y-4  d-flex d-align-center text-center flex-direction-col gap-1">
            <Box key={announcement.id} className="announcement-item">
              <Typography className="announcement-title fs-2 fw-700 mn-b-2">{announcement.title}</Typography>
              <Typography className="announcement-message fs-18">{announcement.message}</Typography>
            </Box>
          </Paper>
        ))
      )}
    </Box>
  );
};



export default AnnouncementsTab;
