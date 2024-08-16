import React, { useState } from 'react'
import styles from './Hero.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export default function Hero() {
    const [xaxis1,setXAxis1]=useState(0);
    const [yaxis1,setYAxis1]=useState(0);
gsap.registerPlugin(useGSAP);

        gsap.to('#hoverelement',{
            x:xaxis1,
            y:yaxis1,
            // duration:2,
            // opacity:1,
            // scale:1
        })
        useGSAP(()=>{
            gsap.from('#mainheading',{
                y:200,
                duration:.75,
                opacity:0
    
            })
        })
        
   


    function mouseenter(){
        gsap.to('#hoverelement',{
            duration:2,
            opacity:1,
            scale:1
        })
    }
    function mouseleave(){
        gsap.to('#hoverelement',{
            duration:2,
            opacity:0,
            scale:0
        })
        
    }
    function mousemove(e){
        setXAxis1(e.clientX);
        setYAxis1(e.clientY);
        console.log(e);
    }
  return (
    <>
    <div className={styles.herowrapper}>
        <div className={styles.main}>
        <div className={styles.inmain}>
        <h1 id='mainheading' >
           change <br /> the course
        </h1>
        </div>
        </div>
        <div onMouseEnter={mouseenter} onMouseMove={mousemove} onMouseLeave={mouseleave} className={styles.mainvideo}>
            <div id='hoverelement' className={styles.hoverelement}>Play now</div>
            <div className={styles.video}>
                <video autoPlay loop muted src="assets/videos/video.mp4"></video>
            </div>
        </div>
    </div>
    </>
  )
}
