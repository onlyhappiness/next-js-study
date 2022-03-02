import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href='/'>
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={router.pathname === '/about' ? 'active' : ''}>about</a>
      </Link>

      {/* FIXME: style jsx global로 하면 전체 적용되는 css가 된다. */}
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
