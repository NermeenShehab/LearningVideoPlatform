import React, { useEffect, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import VideoComponent from '@components/VideoComponent/VideoComponent';
import CourseContent from '@components/CourseContent/CourseContent';
import VideoDetails from '@components/CourseDetails/CourseDetails';
import { Section } from 'types/course';

function App() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState({ section: 0, video: 0 });
  const [sectionsData, setSectionsData] = useState<Section[]>([
    {
      sectionTitle: "Section 1: Introduction",
      videos: [
        { title: "Scrum Roles", duration: "4 min", isChecked: false, videoUrl: "videos/Scrum.mp4" },
        { title: "Coaching the team", duration: "2 min", isChecked: true, videoUrl: "videos/principle.mp4" },
        { title: "Agile Overview", duration: "3 min", isChecked: false, videoUrl: "videos/agile.mp4" }
      ]
    },
    {
      sectionTitle: "Section 2: Scrum Basics",
      videos: [
        { title: "Scrum Master in Scrum Guide", duration: "5 min", isChecked: false, videoUrl: "videos/Talk To Users - Agile Principle of Face-to-face Communication.mp4" },
        { title: "Coaching the team", duration: "2 min", isChecked: true, videoUrl: "videos/principle.mp4" },

      ]
    },  {
      sectionTitle: "Section 3: Advanced",
      videos: [
        { title: "Scrum Roles", duration: "4 min", isChecked: true, videoUrl: "videos/Scrum.mp4" },
        { title: "Coaching the team", duration: "2 min", isChecked: false, videoUrl: "videos/principle.mp4" },
        { title: "Agile Overview", duration: "3 min", isChecked: false, videoUrl: "videos/agile.mp4" }
      ]
    },
  ]);
  const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
  const handleResize = (): void => {
    if (window.innerWidth < 960) {
      setIsCourseContentVisible(false);
    } else {
      setIsCourseContentVisible(true);
    }
  };
  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);
        return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleNext = () => {
    const { section, video } = currentVideoIndex;

    if (video < sectionsData[section].videos.length - 1) {
      setCurrentVideoIndex({ section, video: video + 1 });
    } else if (section < sectionsData.length - 1) {
      setCurrentVideoIndex({ section: section + 1, video: 0 });
    }
  };

  const handlePrev = () => {
    const { section, video } = currentVideoIndex;

    if (video > 0) {
      setCurrentVideoIndex({ section, video: video - 1 });
    } else if (section > 0) {
      const prevSectionVideos = sectionsData[section - 1].videos;
      setCurrentVideoIndex({ section: section - 1, video: prevSectionVideos.length - 1 });
    }
  };

  const markAsCompleted = () => {
    const { section, video } = currentVideoIndex;
    const updatedSections = [...sectionsData];
    updatedSections[section].videos[video].isChecked = true;
    setSectionsData(updatedSections);
  };

  const currentSection = sectionsData[currentVideoIndex.section];
  const currentVideo = currentSection.videos[currentVideoIndex.video];
  const handleSetCurrentVideoIndex = (section: number, video: number) => {
    setCurrentVideoIndex({ section, video });
    markAsCompleted();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App" sx={{ width: '100%' }}>
        <Grid container rowSpacing={0} columnSpacing={1}>
          <Grid size={{ xs: 12, md: isCourseContentVisible ? 8 : 12 }}>
            <Grid container rowSpacing={0} columnSpacing={1}>
              <Grid size={12}>
                <VideoComponent
                  videoSrc={currentVideo.videoUrl}
                  videoTitle={currentVideo.title}
                  handlePreviousClick={handlePrev}
                  handleNextClick={() => {
                    handleNext();
                    markAsCompleted();
                  }}
                  isCourseContentVisible={isCourseContentVisible}
                  showCourseContent={() => setIsCourseContentVisible(true)}
                />
              </Grid>
              <Grid size={{ xs: 12, md: isCourseContentVisible ? 12 : 8 }}>
                <VideoDetails />
              </Grid>
            </Grid>
          </Grid>
          {isCourseContentVisible && (
            <Grid size={{ xs: 12, md: 4 }}>
              <CourseContent
                onClose={() => setIsCourseContentVisible(false)}
                sections={sectionsData}
                currentVideoIndex={currentVideoIndex}
                setCurrentVideoIndex={handleSetCurrentVideoIndex}
              />
            </Grid>
          )}


        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
