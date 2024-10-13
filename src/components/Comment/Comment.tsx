import React, { FC } from 'react';
import './Comment.scss';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { ReactComponent as ReplyIcon } from "@assets/icons/replay.svg";

interface CommentProps {
  userName: string;
  date: string;
  commentText: string;
  userImage?: string;
}

const Comment: FC<CommentProps> = ({ userName, date, commentText, userImage }) => {
  return (
    <Box
      className='Comment' data-testid='Comment'
      display="flex"
      alignItems='start'
      gap={2}
      role="article"
       aria-labelledby="comment-title"
    >
      <Avatar
        alt={userName}
        src={userImage}
        sx={{ width: 57, height: 57 }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Box gap={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography className='fs-2 fw-600' variant="subtitle1" >
            {userName}
          </Typography>
          <Typography className='fs-2 ' variant="body2" >
            {date}
          </Typography>
        </Box>
        <Typography className='fs-18 mn-y-1 ' variant="body1" >
          {commentText}
        </Typography>
        <Button
          size="small"
          className="fs-2 fw-500 replay-button"
          startIcon={<ReplyIcon />}
          color='inherit'
          aria-label={`Reply to ${userName}`}
        >
          Reply
        </Button>
      </Box>
    </Box>
  );
};


export default Comment;
