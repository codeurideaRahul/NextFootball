import Link from "next/link"
import styles  from './Header.module.scss';
const Header = ()=>{
    return(
        <>
            <header className={styles.header}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className={styles.logo}>
                        <Link href="/"><img src="/images/logo.png" alt="" /></Link>
                    </div>
                    <ul className={`${styles.menu_area} d-flex`}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Replay</Link>
                        </li>
                        <li>
                            <Link href="/">Live Stream</Link>
                        </li>
                        <li>
                            <Link href="/">Contact us</Link>
                        </li>
                    </ul>
                </div>
                
                
            </header>            
        </>
    )
}

export default Header;