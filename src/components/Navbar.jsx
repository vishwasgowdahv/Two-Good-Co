import React from 'react'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
   <>
   <nav>
    <div className={styles.navwrapper}>
    <div className={styles.left}><h1>Two <br />Good <br />Co.</h1></div>
    <div className={styles.right}>
        <div className={styles.navlinks}>
        <h3>shop</h3>
        <h3>Wholesale</h3>
        <h3>Cateering</h3>
        <h3>Donate</h3>
        </div>
        <div className={styles.cartsection}>
        <i className="ri-menu-line"></i>
        <i className="ri-shopping-cart-2-line"></i>
        </div>
    </div>
    </div>
   </nav>
   </>
  )
}
