import Link from "next/link";
import styles from '../styles/link.module.css'

export default function ({children, href}){
    return(
        <Link href={href}>
            <a className={styles.link}>{children}</a>
        </Link>
    )
}
