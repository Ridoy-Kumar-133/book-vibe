import Banner from '@/components/Shared/homepage/Banner';
import Books from '@/components/Shared/homepage/Books';


const HomePage = () => {
  return (
    <section className='container w-[90%] mx-auto my-17.5'>
      <Banner></Banner>
      <Books></Books>
    </section>
  );
};

export default HomePage;