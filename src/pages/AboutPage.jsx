import about01 from '@assets/images/about/Ab01.jpg';
import about1 from '@assets/images/about/01.png';
import about2 from '@assets/images/about/02.png';
import about3 from '@assets/images/about/02.jpg';
import about4 from '@assets/images/about/04.jpg';
import { MdCloudUpload } from 'react-icons/md';
import Header from '@components/Header';
import Headding from '@components/Headding';
import AboutItem from '@components/AboutItem';
import Footer from '@components/Footer';
import Experiences from '@components/Experiences';

const AboutPage = () => {
  return (
    <div>
      <Header>
        <div className="py-12 max-w-md">
          <h1 className="text-3xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
            Unveiling the Narratives Within Data and Beyond
          </h1>
          <p className="mt-2">
            Welcome to a realm where numbers whisper stories and insights ignite
            imagination. I am a seasoned navigator of financial landscapes, a
            weaver of data-driven revelations, and a relentless seeker of
            truth—both within spreadsheets and blank pages.
          </p>
          <a
            href="https://drive.google.com/file/d/1nzyS9VEG_dYlSCSktDz37PaycwyIR8q0/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-2.5 py-1.5 inline-flex items-center gap-2 text-base font-semibold bg-primary hover:bg-purple-600 text-white rounded shadow hover:shadow-none"
          >
            <MdCloudUpload /> Download MY CV
          </a>
        </div>
      </Header>
      <Experiences />
      <section className="section-padding">
        <Headding text="The Story Of Me" extraClasses={'text-center'} />
        <AboutItem
          image={about01}
          text={`Hi! I am Chioma Precious Aguluka, A graduate of Nnamdi Azikiwe University(Unizik) Awka Nigeria, from the Department of Accounting. With over ${
            new Date().getFullYear() - 2023
          }+ years of experience as a data analyst, over ${
            new Date().getFullYear() - 2020
          }+ years of experience as an accountant and a lifetime experience as a novelist.`}
          swap
        />
        <AboutItem
          image={about1}
          text="By day, I wield the scalpel of an accountant, dissecting ledgers and
          wielding debits and credits with surgical precision. Over two years,
          I've honed my financial management skills, ensuring compliance and
          navigating regulations with eagle-eyed accuracy. But numbers, for me,
          are more than just figures on a page."
        />
        <AboutItem
          image={about2}
          text="They're whispers of stories untold, threads of hidden meaning waiting
          to be unraveled. So, when the moon casts its silver spell, I slip into
          the cloak of a data analyst. Armed with the wizardry of SQL, I conjure
          insights from vast troves of information, transforming raw numbers
          into shimmering constellations of knowledge. Python and Power BI are
          my loyal companions, their languages revealing patterns unseen,
          potential untapped."
          swap
        />
        <AboutItem
          image={about3}
          text="Yet, even with meticulous analysis and potent insights, something
          still yearns to be unleashed. That's when I don the mantle of a
          novelist. Under the spell of storytelling, I weave threads of data and
          finance into fantastical tapestries, where spreadsheets pirouette into
          epic sagas and balance sheets morph into thrilling mysteries. In my
          worlds, numbers sing symphonies and algorithms dance ballets,
          revealing the hidden poetry amidst the spreadsheets."
        />
        <AboutItem
          image={about4}
          text={`So, accountant, data analyst, novelist - these are not just titles,
          they're facets of my multifaceted soul. And as I delve deeper into
          each, I discover the profound connections that bind them. For me,
          numbers are not just digits, they are the whispers of stories waiting
          to be told.`}
          swap
        />
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
