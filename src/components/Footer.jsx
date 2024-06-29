import {
  FaEnvelope,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-6 px-12 md:px-24 grid sm:grid-cols-2 items-center gap-2">
      <p className="order-2 sm:order-none">
        {' '}
        &copy;ACSP 2023 - {new Date().getFullYear()} - designed by{' '}
        <a
          href="https://techieng.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          TechieNg
        </a>
        {', '} illustrations and Ai images from{' '}
        <a href="https://playground.ai/" target="_blank" rel="noreferrer">
          Playground.ai
        </a>
        .
      </p>
      <div className="order-1 sm:order-none sm:flex flex-1 items-center flex-wrap gap-2">
        <div className="flex-1">
          <h3 className="font-medium">Follow me on</h3>
          <ul className="flex items-center gap-2 text-blue-700">
            {socials.map((item, i) => (
              <li key={i}>
                <a href={item.link}>
                  <item.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>You can also reach me on</h3>
          <a
            href="mailto:acspworld@gmail.com"
            className="flex items-center gap-2"
          >
            <FaEnvelope /> <span>acspworld@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const socials = [
  { name: 'Facebook', icon: FaFacebook, link: '#' },
  { name: 'Linkedin', icon: FaLinkedinIn, link: '#' },
  { name: 'Twitter', icon: FaTwitter, link: '#' },
];
