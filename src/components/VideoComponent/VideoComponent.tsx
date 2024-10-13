import React, { FC, useRef, useState, useEffect } from 'react';
import './VideoComponent.scss';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { ReactComponent as BackArrowIcon } from "@assets/icons/backArrow.svg";
import { ReactComponent as PlayIcon } from "@assets/icons/play.svg";
import { ReactComponent as PauseIcon } from "@assets/icons/pause.svg";
import { ReactComponent as InfoIcon } from "@assets/icons/info.svg";
import { ReactComponent as PrevIcon } from "@assets/icons/prev.svg";
import { ReactComponent as NextIcon } from "@assets/icons/next.svg";
import { ReactComponent as ArrowIcon } from "@assets/icons/Arrow 2.svg";


interface VideoComponentProps {
    videoSrc: string;
    videoTitle: string;
    handleNextClick: () => void;
    handlePreviousClick: () => void;
    showCourseContent: () => void;
    isCourseContentVisible: boolean;
}

const VideoComponent: FC<VideoComponentProps> = ({ showCourseContent, isCourseContentVisible, videoSrc, videoTitle, handleNextClick, handlePreviousClick }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [showButton, setShowButton] = useState<boolean>(true);
    const [showAnimation, setShowAnimation] = useState<boolean>(true);
    const [isHovered, setIsHovered] = useState(false);
    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
            setShowButton(true);
            setShowAnimation(true);

            setTimeout(() => {
                setShowButton(false);
                setShowAnimation(false);
            }, 1500);
        }
    };

    useEffect(() => {
        setShowButton(true);
    }, []);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            setIsPlaying(false);
            setShowButton(true);
        }
    }, [videoSrc]);
    return (
        <div className='VideoComponent' data-testid='VideoComponent'>
            <Box display="flex" alignItems="center"  >
                <Button className='backBtn mn-x-1 mn-y-2'   aria-label="Go back">
                    <BackArrowIcon />
                </Button>
                <Typography className='videoName fw-700 fs-2'>{videoTitle}</Typography>
            </Box>
            <div className='videoContainer'>
                <video ref={videoRef} width="100%" height="450" onClick={handlePlayPause} controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Tooltip title={videoTitle} arrow>
                    <IconButton className="info-button"
                        aria-label={`Information about ${videoTitle}`}
                    >
                        <InfoIcon />
                    </IconButton>
                </Tooltip>

                <Button
                    variant="text"
                    color="secondary"
                    onClick={handlePreviousClick}
                    className="prev-button"
                    aria-label="Previous video"
                >
                    <PrevIcon />
                </Button>
                <Button
                    variant="text"
                    color="secondary"
                    onClick={handleNextClick}
                    className="next-button"
                    aria-label="Next video"

                >
                    <NextIcon />
                </Button>
                {!isCourseContentVisible && <div
                    className="show-btn"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <IconButton onClick={() => {
                        showCourseContent()
                        setIsHovered(false)
                    }}
                    
                    aria-label="Show course content"
                    >
                        <ArrowIcon fontSize="large" />
                        {isHovered && <span className="tooltip fs-2 fw-500">Show Course Content</span>}
                    </IconButton>
                </div>}


                {!isPlaying && showButton && (
                    <Button
                        variant="text"
                        color="secondary"
                        onClick={handlePlayPause}
                        className={`play-button ${showAnimation ? 'fade-in' : ''}`}
                     aria-label="Play video"
                  >
                        <PlayIcon />
                    </Button>
                )}
                {isPlaying && showButton && (
                    <Button
                        variant="text"
                        color="secondary"
                        onClick={handlePlayPause}
                        className={`pause-button ${showAnimation ? 'fade-in' : ''}`}
                  aria-label="Pause video"
                 >
                        <PauseIcon />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default VideoComponent;
