import { Link } from 'react-router-dom';
import About from '@Components/About';
import Cta from '@Components/Cta';
import Footer from '@Components/Footer';
import Header from '@Components/Header';
import Services from '@Components/Services';
import Typewriter from 'typewriter-effect';
import { MdCloudUpload } from 'react-icons/md';

const Homepage = () => {
  return (
    <div>
      <Header>
        <div className="py-12">
          <h1 className="text-2xl font-bold flex flex-col drop-shadow-[0_35px_35px_rgba(255,55,0,0.25)]">
            Hi! I am{' '}
            <span className="text-5xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
              Precious Aguluka
            </span>
          </h1>
          <p className="flex justify-left sm:justify-start gap-2 font-bold text-xl">
            <Typewriter
              options={{
                strings: [`A Data Analyst`, `An Accountant`, 'A Novelist'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </p>
          <p className="max-w-md">
            Imagine the precision of an accountant, the insights of a data
            analyst, and the imagination of a novelist, all converging in one
            mind. That&apos;s Me, weaving logic and magic, unearthing truths
            from both balance sheets and blank pages.
          </p>
          <Link
            to="#"
            className="mt-2 px-2.5 py-1.5 inline-flex items-center gap-2 text-base font-semibold bg-primary hover:bg-purple-600 text-white rounded shadow hover:shadow-none"
          >
            <MdCloudUpload /> Download MY CV
          </Link>
        </div>
      </Header>
      <About />
      <Cta />
      <Services />
      <Footer />
    </div>
  );
};

export default Homepage;
