import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css';
import { useRouter } from "next/router";
import HamburgerMenu from '../HamburgerMenu';

const Navbar = () => {
    const router = useRouter();
    const linkClass = (pathname) => {
        return router.pathname == pathname ? `${styles.item} ${styles['active-link']}` : styles.item
    };
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li className={styles.logo}><Link href="/">Peter Alexander</Link></li>
                <div className={styles.hamburgerMenu}>
                    <HamburgerMenu />
                </div>
                <li className={linkClass('/')}><Link href="/">Home</Link></li>
                <li className={linkClass('/about')}><Link href="/about">About</Link></li>
                <li className={linkClass('/projects')}><Link href="/projects">Projects</Link></li>
                <li className={linkClass('/contact')}><Link href="/contact">Contact</Link></li>
                <li className={linkClass('/contact')}><Link href="/resume">Resume</Link></li>
                {/* <li className={linkClass('https://portfolio-react-2021.s3.us-west-1.amazonaws.com/pdfs/Peter_s_Resume.pdf')}>
                    <Link href="https://portfolio-react-2021.s3.us-west-1.amazonaws.com/pdfs/Peter_s_Resume.pdf">
                        <a target="_blank">
                            Resume
                        </a>
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar
