import React from 'react';
import { useEffect } from 'react';

function YelpReviews() {
  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = 'https://www.yelp.com/embed/widgets.js';
    scriptTag.async = true;
    scriptTag.type = 'text/javascript';
    document.getElementById('yelpReview').appendChild(scriptTag);
    return () => {
      document.getElementById('yelpReview').removeChild(scriptTag);
    };
  }, []);

  return (
    <div id="yelpReview" width="100%" height="700px">
      <span
        className="yelp-review"
        data-review-id="PnTjWZ_jC9f2wY8VnEcRLg"
        data-hostname="www.yelp.com"
      >
        Read{' '}
        <a
          href="https://www.yelp.com/user_details?userid=Y23hv4wktm6EMBVbhdGWiw"
          rel="nofollow noopener"
        >
          Michael W.
        </a>
        's{' '}
        <a
          href="https://www.yelp.com/biz/carrectly-auto-care-chicago?hrid=PnTjWZ_jC9f2wY8VnEcRLg"
          rel="nofollow noopener"
        >
          review
        </a>{' '}
        of{' '}
        <a
          href="https://www.yelp.com/biz/TJwlpHYs_n7FyoTK3jN5-A"
          rel="nofollow noopener"
        >
          Carrectly Auto Care
        </a>{' '}
        on{' '}
        <a href="https://www.yelp.com" rel="nofollow noopener">
          Yelp
        </a>
      </span>
    </div>
  );
}

export default YelpReviews;
