export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='#hero' className='logo'>
          Stefan Morejon
        </a>

        <div className='nav-links'>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#experience'>Experience</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </nav>
  );
}