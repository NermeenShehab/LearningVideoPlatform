import React, { FC } from 'react';
import './ReviewsTab.scss';
import { Divider, Typography } from '@mui/material';
import RatingComponent from '@components/Rating/Rating';
import Grid from '@mui/material/Grid2';
import RatingItem from '@components/RatingItem/RatingItem';
import Comment from '@components/Comment/Comment';
import PaginationComponent from '@components/Pagination/Pagination';
import reviewsData from "@data/reviewsData.json";

interface ReviewsTabProps {}

const ReviewsTab: FC<ReviewsTabProps> = () => {

  return (
    <div className='ReviewsTab  d-flex flex-direction-col gap-2' data-testid='ReviewsTab'>
      <Typography variant='h6' className='fw-600 fs-18 label'>
        Comments
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid size={12}>
          <RatingComponent ratingData={reviewsData.overallRating} />
        </Grid>
        <Grid size={12}>
          {reviewsData.ratingDistribution.map((rating, index) => (
            <Grid key={index} size={{ xs: 12 }}>
              <RatingItem data={rating} />
            </Grid>
          ))}
          <Divider className='mn-t-3' />
        </Grid>
        <Grid size={12}>
          {reviewsData.comments.map((comment, index) => (
            <React.Fragment key={index}>
              <Comment
                userImage={`/imgs/${comment.userImage}`}
                userName={comment.userName}
                date={comment.date}
                commentText={comment.commentText}
              />
              <Divider className='mn-y-3' />
            </React.Fragment>
          ))}
          <PaginationComponent currentPage={reviewsData.pagination.currentPage} totalPages={reviewsData.pagination.totalPages} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewsTab;
