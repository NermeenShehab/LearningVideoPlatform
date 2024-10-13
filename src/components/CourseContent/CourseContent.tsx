import React, { FC, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Checkbox,
  IconButton,
} from '@mui/material';
import { ReactComponent as ExpandMoreIcon } from '@assets/icons/accordionIcon.svg';
import PlayIcon from '@components/icons/playIcon';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator
} from '@mui/lab';
import './CourseContent.scss';
import { Section } from 'types/course';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';


interface CourseContentProps {
  sections: Section[]
  currentVideoIndex: { section: number; video: number };
  onClose: () => void
  setCurrentVideoIndex: (section: number, video: number) => void
}

const CourseContent: FC<CourseContentProps> = ({ onClose, sections, currentVideoIndex, setCurrentVideoIndex }) => {
  const [expanded, setExpanded] = useState<number[]>(Array.from({ length: sections.length }, (_, i) => i));
  const handleChange = (sectionIndex: number) => {
    setExpanded((prev) => {
      if (prev.includes(sectionIndex)) {
        return prev.filter((index) => index !== sectionIndex);
      }
      return [...prev, sectionIndex];
    });
  };
  const getTotalDuration = (videos: { title: string; duration: string; isChecked: boolean; videoUrl: string; }[]) => {
    return videos.reduce((acc, video) => acc + parseInt(video.duration, 10), 0);
  };
  return (
    <div className="CourseContent d-flex gap-2 flex-direction-col">
      <Box className="header" display="flex" justifyContent="space-between">
        <Typography variant="h6" className="title">
          Course Content
        </Typography>
        <IconButton onClick={onClose} aria-label="Close course content panel">
          <CloseIcon />
        </IconButton>
      </Box>

      <Box className="timeline-container">
        {sections.map((section, sectionIndex) => {
          const completedVideos = section.videos.filter(video => video.isChecked).length;
          const totalDuration = getTotalDuration(section.videos);

          return (
            <Accordion key={sectionIndex} expanded={expanded.includes(sectionIndex)} onChange={() => handleChange(sectionIndex)}
             
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`section-${sectionIndex}-header`}>
                <Typography variant="body1" className="accordion-title">
                  <PlayIcon size={26} className="play-icon" />
                  <div className="acc-header fs-18 fw-700">
                    {section.sectionTitle}
                    <div className="subtitle fw-400">
                      {completedVideos} / {section.videos.length} | {totalDuration} min
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Timeline
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  {section.videos.map((video, videoIndex) => (
                    <TimelineItem key={videoIndex}>
                      <TimelineSeparator>
                        <PlayIcon size={20} />
                        {videoIndex < section.videos.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          sx={{
                            padding: '3px 0',
                            border: sectionIndex === currentVideoIndex.section && videoIndex === currentVideoIndex.video ? '1px solid #f0f0f0' : 'transparent',
                            borderRadius: '8px',
                            transition: 'border 0.3s ease',
                          }}
                        >
                          <Box className="pn-l-1" onClick={() => setCurrentVideoIndex(sectionIndex, videoIndex)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                setCurrentVideoIndex(sectionIndex, videoIndex);
                              }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-pressed={sectionIndex === currentVideoIndex.section && videoIndex === currentVideoIndex.video}
                            aria-label={`Play ${video.title}, duration ${video.duration}`} >
                            <Typography variant="body1" className="fs-2 fw-600" sx={{ color: sectionIndex === currentVideoIndex.section && videoIndex === currentVideoIndex.video ? "black" : '#C0C0C0' }}>
                              {video.title}
                            </Typography>
                            <Typography variant="caption" className="fs-1 caption" >
                              {video.duration}
                            </Typography>
                          </Box>
                          <Checkbox disabled checked={video.isChecked}
                            aria-label={`${video.title} is ${video.isChecked ? 'completed' : 'not completed'}`}
                          />
                        </Box>

                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </AccordionDetails>
            </Accordion>
          )
        }
        )}
      </Box>
    </div>
  );
}
export default CourseContent;