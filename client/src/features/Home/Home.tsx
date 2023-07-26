import * as React from 'react';
import Container from '@mui/material/Container';
import PaginationComponent from '../Pagination/Pagination';
import Articles from '../Articles/Articles';

export default function Home() {
  return (
    <main>
      <Container>
        <Articles />
      </Container>
      <PaginationComponent />
    </main>
  );
}
