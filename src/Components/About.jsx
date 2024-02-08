import about1 from '../assets/images/about1.png';
import Headding from './Headding';
import AboutItem from './aboutItem';
const About = () => {
  return (
    <section id="about">
      <div className="section-padding">
        <div>
          <Headding text="About Me" extraClasses={'text-center'} />
        </div>
        <AboutItem
          image={about1}
          text="Throughout my career, I have successfully implemented process enhancements and cost-saving initiatives, providing strategic analytical expertise that goes beyond the conventional. My commitment to excellence is reflected in my skills with Microsoft Power BI and Python, which elevate my ability to offer top-tier data analysis proficiency for organizational success. I invite you to delve into my resume to gain a comprehensive understanding of my professional journey and the impact I've made. Let's collaborate and elevate your financial strategies to new heights!"
          btnLink={'/about'}
        />
      </div>
    </section>
  );
};

export default About;
