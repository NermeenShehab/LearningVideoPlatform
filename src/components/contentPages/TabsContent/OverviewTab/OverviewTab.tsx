import React, { FC } from 'react';
import './OverviewTab.scss';
import { Box, Typography } from '@mui/material';
import { ReactComponent as EducationIcon } from "@assets/icons/education.svg"
import { ReactComponent as DocumentIcon } from "@assets/icons/document.svg"
import { OverviewData } from 'types/course';

interface OverviewTabProps {
  data: OverviewData
}

const OverviewTab: FC<OverviewTabProps> = ({ data }) => {
  return (
    <Box className="OverviewTab" display="flex" flexDirection="column" gap={4} data-testid='OverviewTab'>
      <Box
        display="flex" gap={3}
        flexDirection="column"
      >
        <Typography
          variant="h6"
          className='fs-3 fw-600 label'
        >
          {data.title}
        </Typography>
        <Box
          display="flex" gap={2} alignItems='start'
          flexGrow={1}
        >
          <Box display="flex" gap={1} alignItems="center">
            <EducationIcon />
            <Typography
              className='fs-2 text-secondary'
            >
              {data.studentsCount} Students
            </Typography>
          </Box>
          <Box display="flex" gap={1} alignItems="center">
            <EducationIcon />
            <Typography
              className='fs-2 text-secondary'
            >
              {data.level} Level
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex" gap={2} alignItems='start'
          flexGrow={1}
        >
          <Box display="flex" gap={1} alignItems="center">
            <DocumentIcon />
            <Typography
              className='fs-2 text-secondary'
            >
              {data.lessonsCount} Lessons
            </Typography>
          </Box>
          <Box display="flex" gap={1} alignItems="center">
            <DocumentIcon />
            <Typography
              className='fs-2 text-secondary'
            >
              {data.totalMinutes} total mins
            </Typography>
          </Box>
        </Box>

      </Box>

      <Typography
        className='fs-18  text-secondary description'>
        <Typography className='label'>Description:</Typography>
        {data.description}
      </Typography>
    </Box>


  );
};



export default OverviewTab;
