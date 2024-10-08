import HeroCarousel from '@/components/HeroCarousel';
import SearchBar from '@/components/SearchBar';
import { Icons } from '@/const/icons';
import Image from 'next/image';


const isValidAmazonProductURL = (url: string) => {
  
}

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here
              <Image
                src={Icons.arrow_right}
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Unleash the power of
              <span className="text-primary"> PriceWise</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more
            </p>
            <SearchBar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16"> </div>
      </section>
    </>
  );
};

export default Home;
