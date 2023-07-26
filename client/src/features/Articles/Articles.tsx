import * as React from 'react';
import Grid from '@mui/material/Grid';
import useArticles from './useArticles';
import Preview from './Preview';

export default function Articles() {
  const { articles } = useArticles();
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2} sx={{ mt: '10px' }}>
      {articles?.length > 0 &&
        articles.map((article) => (
          <Grid item key={article.id} xs={12} sm={12} md={6}>
              <Preview article={article} />
          </Grid>
        ))}
    </Grid>
  );
}
