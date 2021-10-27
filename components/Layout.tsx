import React, { FC } from 'react'
import styles from '../styles/Layout.module.css'

type children = JSX.Element


interface LayoutProps {
    layout: children
}

const Layout: FC<LayoutProps> = ({children}): JSX.Element => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout
