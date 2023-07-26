import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShareIcon from '@mui/icons-material/Share';
import { Article } from '../../types/article';
import useArticles from './useArticles';

interface IPreviewProps {
  article: Article;
}
export default function Preview({ article }: IPreviewProps) {
  const { truncate } = useArticles();
  return (
    <Card sx={{ mb: '15px' }}>
      <CardHeader title={article.title} subheader={new Date(article.id).toDateString()} />
      <CardMedia component='img' height='128' image={article.thumbImage} alt={article.title} />
      <CardContent>
        <Typography variant='body2' color='text.secondary' sx={{ textAlign: 'left' }}>
          {truncate(article.text, 500)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='read'>
          <AutoStoriesIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
