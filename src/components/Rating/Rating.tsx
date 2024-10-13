import React, { FC } from 'react';
import './Rating.scss';
import { Box, Rating, Typography } from '@mui/material';
import SolidStarIcon from '@components/icons/solidStar';
import StarIcon from '@components/icons/star';
import { RatingData } from 'types/course';
import { formatNumberWithCommas, formatToOneDecimalPlace } from '@utils/formatters';

interface RatingProps {
  ratingData: RatingData;
}

const RatingComponent: FC<RatingProps> = ({ratingData}) => {
  return (

    <Box  display="flex" gap={2} alignItems="center" className='Rating' data-testid='Rating'>
      <Typography variant="h6" className='rating-value'>
      {formatToOneDecimalPlace(ratingData.ratingValue)}
      </Typography>
      <Box display="flex" alignItems="start" flexDirection="column">
        <Rating  readOnly name="customized-10" defaultValue={4} max={5} icon={<SolidStarIcon size={25}  />} emptyIcon={<StarIcon size={25} />} />

        <Typography variant="body2" className='label'>
          based on {formatNumberWithCommas(ratingData.totalRatings)} ratings
        </Typography>
      </Box>
    </Box>

  );
};



export default RatingComponent;
