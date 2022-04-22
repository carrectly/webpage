import React, { FC } from 'react';
import { Card, CardHeader, Avatar, CardContent, Typography, Rating, Link } from '@mui/material';
import parse from 'html-react-parser';
import { yelpReviewType } from '../../../utils/types';

type customeReviewProps = {
  review: yelpReviewType;
};

const CustomReviewCard: FC<customeReviewProps> = ({ review }) => {
  const { user, localizedDate, comment, rating, id } = review;
  return (
    <Card sx={{ minWidth: '400px' }}>
      <Link href={`https://www.yelp.com/${user.userUrl}`} target="_blank">
        <CardHeader
          avatar={<Avatar alt={user.markupDisplayName} src={user.src} />}
          title={user.markupDisplayName}
          subheader={localizedDate}
        >
          Test
        </CardHeader>
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.displayLocation}
        </Typography>
        <Link
          href={`https://www.yelp.com/biz/carrectly-auto-care-chicago?hrid=${id}`}
          target="_blank"
        >
          <Rating name="read-only" value={rating} readOnly sx={{ color: 'red' }} />
        </Link>
        <Typography variant="body2" color="text.secondary">
          {parse(comment.text)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomReviewCard;
