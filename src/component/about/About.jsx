import React from 'react';
import Layout from '../layout/Layout';

const MyComponent = () => {
  const divStyle = {
    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVsZaIjvS0a_G5MaPSHz0eHarbbp7rRBUBjAH_BmrcdZt03PN4EQy4ML5TGeX0I74GDs&usqp=CAU)',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return  <Layout> <div style={divStyle}></div>; </Layout>
};

export default MyComponent;
