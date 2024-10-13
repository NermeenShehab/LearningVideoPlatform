
export const formatToOneDecimalPlace = (ratingValue: number): string => {
    return ratingValue.toFixed(1); 
  };
  
  export const formatNumberWithCommas = (totalCount: number): string => {
    return new Intl.NumberFormat('en-US').format(totalCount); 
  };
  