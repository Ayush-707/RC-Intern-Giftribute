import React from 'react';
import SearchBar from '../../../Component/Search';

function Home() {
  const styles = {
    backgroundImage: 'url(/form1.avif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };

  return (
    <>
    <div style={styles}>
      <div className="flex justify-end">
        <div className="w-1/3 p-1">
          <SearchBar />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
