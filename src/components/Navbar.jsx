import React from "react";
import styles from "./Navbar.module.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  gsap.registerPlugin(useGSAP);
  
  function onclickmenu() {
    // document.getElementById("mainhovernav").style.top = "0vh";
    // document.body.style.overflow='hidden'
    gsap.to('#mainhovernav',{
        top:'0vh',
        duration:0.1,
    })

      gsap.from('#mainitems h3',{
          y:100,
          delay:.8,
          duration:.5,
          opacity:0,
          stagger:0.1
  
      })
      gsap.from('.itemwrap',{
        y:100,
        delay:1,
        duration:.5,
        opacity:0,
    })
  }
  function closemenu() {
    document.getElementById("mainhovernav").style.top = "-120%";
  }
  return (
    <>
      {/* sliding navbar code starts here */}
      <div id="mainhovernav" className={styles.mainhovernav}>
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
        <div className={styles.navcontents}>
          <div className={styles.foooter}>
            <div className={styles.items}>
              <div className={`${styles.itemwrap} itemwrap`}>
              <h1 className="heading">connect with us</h1>
              <div className={styles.lists}>
              <h3 className="listitem">facebook</h3>
                <h3 className="listitem">instagram</h3>
                <h3 className="listitem">twitter</h3>
                <h3 className="listitem">LinkedIn</h3>
                <h3 className="listitem">YOuTube</h3>
              </div>
              </div>
            </div>
            <div className={styles.items}>
            <div className={`${styles.itemwrap} itemwrap`}>
              <h1 className="heading">Nitty Gritties</h1>
              <div className={styles.lists}>
                <h3 className="listitem">Good Things FQAs</h3>
                <h3 className="listitem">Good Food FQAs</h3>
                <h3 className="listitem">Good Places</h3>
              </div>
              </div>

            </div>
            <div className={styles.items}>
            <div className={`${styles.itemwrap} itemwrap`}>
              <h1 className="heading">Get Started</h1>
              <div className={styles.lists}>
                <h3 className="listitem">Path Ways</h3>
                <h3 className="listitem">Careers</h3>
              </div>
              </div>

            </div>
          </div>
          <div className={styles.main}>
          <div id="mainitems" className={styles.mainitems}>
              <div className={styles.wrap}>
              <h3 className="listitem">shop</h3>
              </div>
              <div className={styles.wrap}>
              <h3 className="listitem">wholesale</h3>
              </div>
              <div className={styles.wrap}>
              <h3 className="listitem">Cateering</h3>
              </div>
              <div className={styles.wrap}>
              <h3 className="listitem">impact</h3>
              </div>
              <div className={styles.wrap}>
              <h3 className="listitem">stories</h3>
              </div>
              <div className={styles.wrap}>
              <h3 className="listitem">about</h3>
              </div>
              <div className={styles.wrap}>
              <h3 className="listitem">contact</h3>
              </div>
              <div className={styles.wrap}>
              <h3 className="listitem">donate</h3>
              </div>
              <div className={styles.wrap}>
              <h3 className="listitem">sign in </h3>
              </div>
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
