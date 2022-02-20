import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';

const reviewsIds = [
  'PnTjWZ_jC9f2wY8VnEcRLg',
  '5Nb2ouXgXh63FsWOjIjTaA',
  '6cazOQg35n-SwgW8QqgFBQ',
  'sUgc5QimCys-2K-shv9_2Q',
  'CwOlA4H6v3VLnsbNW_dgjg',
  'hBlWEnF7JT8uzGgAOAzh7w',
  'xlfrONiaMQF-cR3qFq1RIA',
  'rRocVuVR9wpyQcVr_qFEsQ',
  '_9fJiQOcj9lMQ00qUs-SfA',
  'coJc7jwOzhbVGx1vpgYDJg',
  'RnMw6C5oheiD2LiDio7_jg',
];

function YelpReviews() {
  const spansArr = reviewsIds.map((reviewId) => (
    <div key={reviewId} style={{ padding: '15px', minWidth: '400px' }}>
      <span
        className="yelp-review"
        data-review-id={reviewId}
        data-hostname="www.yelp.com"
      ></span>
    </div>
  ));
  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = 'https://www.yelp.com/embed/widgets.js';
    scriptTag.async = true;
    scriptTag.type = 'text/javascript';
    document.getElementById('yelpReview')?.appendChild(scriptTag);
    // @Eduardo - getting an error here while removing the script tag. not sure if we need to clean up after unmount or not
    // return () => {
    //   document.getElementById('yelpReview')?.removeChild(scriptTag);
    // };
  }, []);

  return (
    <Box
      id="yelpReview"
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignContent="space-between"
      sx={{ overflow: 'auto' }}
    >
      {spansArr}
    </Box>
  );
}

export default YelpReviews;
