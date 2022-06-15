import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={['row', styles.footerNav].join(' ')}>
                    <div className="col-md-4">
                        <Link href="/">
                            <a>
                                <img src="/images/LOGO_BUILDER.png" alt="BuilderResume logo (resume builder)" className={styles.logo}/>
                            </a>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}>PAGES</li>
                            <li>
                                <Link href="/resume-builder">
                                    <a>Resume Builder</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}>LINKS</li>
                            <li>
                                <a href="https://github.com/LuisCamargoM/builderResume" target="_blank" rel="noopener noreferrer">
                                    github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
