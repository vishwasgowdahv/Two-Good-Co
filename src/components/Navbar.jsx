import React from "react";
import styles from "./Navbar.module.css";
export default function Navbar() {
  function onclickmenu() {
    document.getElementById("hovernav").style.top = "0vh";
    // document.body.style.overflow='hidden'
  }
  function closemenu() {
    document.getElementById("hovernav").style.top = "-100vh";
  }
  return (
    <>
       {/* sliding navbar code starts here */}
      <div className={styles.mainhovernav}>
        <div id="hovernav" className={styles.hovernav}>
          <div className={styles.hoverleft}>
            <h1>
              Two <br />
              Good <br />
              Co.
            </h1>
          </div>
          <div className={styles.hoverright}>
            <div className={styles.hovernavlinks}>
              <h3>shop</h3>
              <h3>Wholesale</h3>
              <h3>Cateering</h3>
              <h3>Donate</h3>
            </div>
            <div className={styles.hovercartsection}>
              <i onClick={closemenu} class="ri-close-line"></i>
              <i className="ri-shopping-cart-2-line"></i>
            </div>
          </div>
        </div>
      </div>
      {/* sliding navbar code ends here */}
      {/* main navbar code starts here */}
      <nav>
        <div className={styles.navwrapper}>
          <div className={styles.left}>
            <h1>
              Two <br />
              Good <br />
              Co.
            </h1>
          </div>
          <div className={styles.right}>
            <div className={styles.navlinks}>
              <h3>shop</h3>
              <h3>Wholesale</h3>
              <h3>Cateering</h3>
              <h3>Donate</h3>
            </div>
            <div className={styles.cartsection}>
              <i onClick={onclickmenu} className="ri-menu-line"></i>
              <i className="ri-shopping-cart-2-line"></i>
            </div>
          </div>
        </div>
      </nav>
      {/* main navbar code ends here */}
    </>
  );
}
