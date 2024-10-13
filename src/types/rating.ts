export interface RatingData {
    rating: number;
    percentage:number;
}
  
  export interface CommentData {
    userImage: string;
    userName: string;
    date: string;
    commentText: string;
  }
  
  export interface PaginationData {
    currentPage: number;
    totalPages: number;
  }
  
  export interface ReviewsData {
    overallRating: {
      ratingValue: number;
      totalRatings: number;
    };
    ratingDistribution: RatingData[];
    comments: CommentData[];
    pagination: PaginationData;
  }
  
  