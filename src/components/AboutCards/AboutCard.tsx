import styled from '@emotion/styled';
import {AppBar, AppBarProps, CardProps, Box} from '@mui/material'
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const StyledCard = styled(Card)<CardProps>`
    background: yellow;
`;

const cardStyle = {
    width: 350
}

type infoProps = {
    title: string,
    description: string,
    image: string,
}

type AboutCardProps = {
    info: infoProps
  }


const AboutCard = ({info}: AboutCardProps): JSX.Element => {
    return (
        <Card sx={cardStyle}>
            <Box display="flex" justifyContent="center"> 
            <img src={info.image} alt={info.title} />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                {info.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AboutCard
