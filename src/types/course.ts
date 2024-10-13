export interface OverviewData {
    title: string;
    description: string;
    studentsCount: number;
    level: string;
    lessonsCount: number;
    totalMinutes: number;
  }

  export interface Announcement {
    id: number;
    title: string;
    message: string;
  }

  export interface CourseFaq {
    id: number;
    question: string;
    answer: string;
  }

  export interface RatingData {
    ratingValue: number;
    totalRatings: number;
  }


export  interface Video {
    title: string;
    duration: string;
    isChecked: boolean;
    videoUrl:string;
  }
  
export interface Section {
    sectionTitle: string;
    videos: Video[];
  }