import Banner from '@/components/NewsPage/Banner/Banner';
import ListNews from '@/components/NewsPage/ListNews/ListNews';
import React from 'react';

const NewsPage = () => {
  return (
    <section className="section " id="section-news">
      {/* Banner */}
      <Banner />
      {/* List News */}
      <ListNews />
    </section>
  );
};

export default NewsPage;
