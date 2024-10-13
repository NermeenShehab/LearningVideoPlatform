import React, { FC } from 'react';
import './CourseDetails.scss';
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material';
import overviewData from "@data/overviewData.json";
import announcementsData from "@data/announcementsData.json";
import faqsData from "@data/faqs.json";
import OverviewTab from '@components/contentPages/TabsContent/OverviewTab/OverviewTab';
import AnnouncementsTab from '@components/contentPages/TabsContent/AnnouncementsTab/AnnouncementsTab';
import FaqTab from '@components/contentPages/TabsContent/FaqTab/FaqTab';
import ReviewsTab from '@components/contentPages/TabsContent/ReviewsTab/ReviewsTab';
import NotesTab from '@components/contentPages/TabsContent/NotesTab/NotesTab';

interface CourseDetailsProps {}

const CourseDetails: FC<CourseDetailsProps> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  const isSmallScreen = useMediaQuery('(max-width:650px)');

  return (
    <div className='CourseDetails' data-testid='CourseDetails'>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={isSmallScreen ? 'auto' : false}
          aria-label="course tabs example"
          sx={{
            [`& .MuiTabs-scrollButtons`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {['Overview', 'Notes', 'Announcements', 'FAQs', 'Reviews'].map((label, index) => (
            <Tab
              key={index}
              label={label}
              className={`tab ${value === index ? 'selected' : 'unselected'}`}
            />
          ))}
        </Tabs>
       <div className="tabPanel"> {value === 0 && <OverviewTab data={overviewData} />}
        {value === 1 && <NotesTab />}
        {value === 2 && <AnnouncementsTab announcements={announcementsData} />}
        {value === 3 && <FaqTab faqs={faqsData} />}
        {value === 4 && <ReviewsTab />}</div>

      </Box>
    </div>
  );
};

export default CourseDetails;
