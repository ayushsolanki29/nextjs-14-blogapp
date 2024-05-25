"use client"
import { useState } from 'react'
import styles from './links.module.css'
import NavLink from "./navLinks/navLink"
import Image from 'next/image'
import { hadleLogout } from '@/lib/actions'

const Links = ({ session }) => {

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ]
    const [open, setOpen] = useState(false);


    const isAdmin = true

    return (
        <div className={styles.contaier}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}

                {session?.user ? (
                    <>
                        {session.user ?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <form action={hadleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )
                }</div>

            <Image src={open ? "/close.png" : "/menu.png"} alt='' className={styles.menubtn} onClick={() => setOpen((prev) => !prev)} width={30} height={30} />
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map((link) => (
                            <NavLink item={link} key={link.title} />
                        ))}
                    </div>

                )}
        </div>
    )
}

export default Links
