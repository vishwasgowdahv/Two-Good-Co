import React from 'react'
import styles from './Page1.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Page1() {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger) 
  useGSAP(()=>{
    gsap.from('.item',{
       scale:0,
        duration:1,
        opacity:0,
        scrollTrigger:{
          trigger:'.item',
          scroller:'body',
          // markers:true,
          end:'top 40%',
          scrub:2

        }

    })
})

  return (
    <>
      <div className={styles.page1Wrapper}>
        <div className={styles.topline}>
          <div className={styles.buygood}>
            <h4>buy good</h4>
             <h4>Do good</h4>
             </div>
        </div>
        <div className={styles.linebreak}></div>
        <div id='brands' className={styles.brands}>
          <div className={`${styles.item} item`}>
            <img src="assets/images/brand1.webp" alt="" />
              <div className={styles.brandexpand}>
                <div className={styles.maindiv}>
                  <div className={styles.visibleelem}><h1 className={styles.dot}>•</h1></div>
                  <div className={styles.visibleelem}><h3>shop</h3></div>
                  <div className={styles.visibleelem}><h3>pantry</h3></div>
                  <div className={styles.visibleelem}><i class="ri-arrow-right-s-line"></i></div>
                </div>
                <div className={styles.hoverdiv}>
                  <div className={styles.img}>
                    <div className={styles.imgdiv}>
                    <img className={styles.img1} src="assets/images/img1.webp" alt="" />
                    <div className={styles.text}>change the course cookbook</div>
                    </div>
                    <div className={styles.imgdiv}>
                    <img className={styles.img2} src="assets/images/img2.webp" alt="" />
                    <div className={styles.text}>change the course cook kit</div>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
          <div className={`${styles.item} item`}>
            <img src="assets/images/brand2.webp" alt="" />
            <div className={styles.brandexpand}>
                <div className={styles.maindiv}>
                  <div className={styles.visibleelem}><h1 className={styles.dot}>•</h1></div>
                  <div className={styles.visibleelem}><h3>shop</h3></div>
                  <div className={styles.visibleelem}><h3>pantry</h3></div>
                  <div className={styles.visibleelem}><i class="ri-arrow-right-s-line"></i></div>
                </div>
                <div className={styles.hoverdiv}>
                  <div className={styles.img}>
                    <div className={styles.imgdiv}>
                    <img className={styles.img1} src="assets/images/img3.webp" alt="" />
                    <div className={styles.text}>change the course cookbook</div>
                    </div>
                    <div className={styles.imgdiv}>
                    <img className={styles.img2} src="assets/images/img4.webp" alt="" />
                    <div className={styles.text}>change the course cook kit</div>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
          <div className={`${styles.item} item`}>
            <img src="assets/images/brand3.webp" alt="" />
            <div className={styles.brandexpand}>
                <div className={styles.maindiv}>
                  <div className={styles.visibleelem}><h1 className={styles.dot}>•</h1></div>
                  <div className={styles.visibleelem}><h3>shop</h3></div>
                  <div className={styles.visibleelem}><h3>pantry</h3></div>
                  <div className={styles.visibleelem}><i class="ri-arrow-right-s-line"></i></div>
                </div>
                <div className={styles.hoverdiv}>
                  <div className={styles.img}>
                    <div className={styles.imgdiv}>
                    <img className={styles.img1} src="assets/images/img5.webp" alt="" />
                    <div className={styles.text}>change the course cookbook</div>
                    </div>
                    <div className={styles.imgdiv}>
                    <img className={styles.img2} src="assets/images/img6.webp" alt="" />
                    <div className={styles.text}>change the course cook kit</div>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
