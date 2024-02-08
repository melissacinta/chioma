const Footer = () => {
  return (
    <footer className="bg-primary/10 py-6 px-12 md:px-24 text-center">
      {' '}
      &copy;ACSP 2023 - {new Date().getFullYear()}- designed by{' '}
      <a
        href="https://www.techieng.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        TechieNg
      </a>{' '}
    </footer>
  );
};

export default Footer;
