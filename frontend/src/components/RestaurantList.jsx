import { Flex, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ResaturantCard from './ResaturantCard';
import PaginationButtons from './PaginationButtons'; // Import the new component
let Data = [{
  id: 1,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 2,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 3,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 4,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 5,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 6,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 7,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 8,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 9,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
},
{
  id: 10,
  image: "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Lazy Bear",
  desc: "Cakes, Pastry,Pastas",
  location: "Cannaught Place, New Delhi",
  price_starts_from: 200
}
]
function RestaurantList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch data for the current page from the API
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setTotalPages(res.totalPages);
      });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Grid
        gridTemplateColumns={{
          lg: 'repeat(4,1fr)',
          md: 'repeat(2,1fr)',
          sm: 'repeat(1,1fr)',
          base: 'repeat(1,1fr)',
        }}
        gap={5}
        mt={4}
      >
        {data?.map((el) => (
          <ResaturantCard key={el.id} el={el} />
        ))}
      </Grid>
      <Flex justifyContent="center">
        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

      </Flex>
    </>
  );
}

export default RestaurantList;
