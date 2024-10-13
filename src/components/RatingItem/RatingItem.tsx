import React, { FC } from 'react';
import './RatingItem.scss';
import { Box, LinearProgress, Rating, Typography } from '@mui/material';

import { RatingData } from 'types/rating';
import SolidStarIcon from '@components/icons/solidStar';
import StarIcon from '@components/icons/star';


interface RatingItemProps {
  data: RatingData
}

const RatingItem: FC<RatingItemProps> = ({ data }) => {
  return (
    <div className='RatingItem' data-testid='RatingItem'>
      <Box display="flex"  alignItems="center" gap={2}>
      <Box display="flex"  alignItems="start" gap={1}>
        <Rating readOnly name="customized-10" defaultValue={data.rating} max={5} icon={<SolidStarIcon />} emptyIcon={<StarIcon />} />
        <Typography className='percentage' variant="body1">{data.percentage}%</Typography>
       </Box>
        <Box sx={{ flexGrow: 1, color: "#F6B40A" }}>
          <LinearProgress variant="determinate" color="inherit" sx={{ height: '8px' }} value={data.percentage} />
        </Box>

      </Box>
    </div>
  );
};



export default RatingItem;
