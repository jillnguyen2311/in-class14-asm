import Head from 'next/head'
import styles from './SocialMedia.module.css'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Menu(){
    const [popup, setPopup] = useState(false);
    return(
        <>
        
           <div onClick={() => setPopup(true)}>
           <h1>+</h1>
            </div>

            {
                popup ?
                    <div>
                        <div> 
                            <div
                            onClick={() => setPopup(false)}><h1>-</h1></div>

                            <div className={styles.images}>
                            <Image src='/facebook.png' width='50' height='50'/>
                            <Image src='/twitter.png' width='50' height='50'/>
                            <Image src='/instagram.png' width='50' height='50'/>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}
