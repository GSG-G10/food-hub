import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { api } from '../../api/axios';
import { CategoryCard } from '../../components/CategoryCard';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const items = 10;
  useEffect(() => {
    api.get(`/category?items=${items}&page=${page}`).then((response) => {
      setCount(response.data.pagination.count);
      setCategories(response.data.data);
    });
  }, [items, page]);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', flexDirection: 'column', mt: '2rem' }}
    >
      <Typography variant="h1" fontWeight="500">
        All Categories
      </Typography>
      <FormControl
        variant="outlined"
        size="small"
        sx={{ alignSelf: 'self-end' }}
      >
        <InputLabel htmlFor="search-field">Search</InputLabel>
        <OutlinedInput
          id="search-field"
          type="text"
          value={searchValue}
          size="small"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Box
        mt={6}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        sx={{ gridGap: '30px' }}
      >
        {categories.map(({ id, name, image }) => (
          <CategoryCard
            key={id}
            categoryId={id}
            categoryImage={image}
            categoryName={name}
          />
        ))}
      </Box>
      <Pagination
        count={Math.ceil(count / items)}
        variant="outlined"
        shape="rounded"
        color="primary"
        page={page}
        onChange={handlePageChange}
        sx={{ display: 'flex', justifyContent: 'center', py: '3rem' }}
      />
    </Container>
  );
};
