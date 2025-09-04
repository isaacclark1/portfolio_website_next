const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-center px-10 pb-2.5">
      <p>&copy; {year} Isaac Clark</p>
    </footer>
  );
};

export default Footer;
