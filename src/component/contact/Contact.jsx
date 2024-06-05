import React from 'react';
import Layout from '../layout/Layout';

const MyComponent = () => {
  const divStyle = {
    backgroundImage: 'url(https://www.shutterstock.com/image-photo/contact-us-customer-support-hotline-600nw-2067737414.jpg)',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return  <Layout> <div style={divStyle}></div>; </Layout>
};

export default MyComponent;
