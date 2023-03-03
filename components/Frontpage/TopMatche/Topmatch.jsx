
import { SkelNewPost } from "components/Skeletons/Skeleton";
import Link from "next/link";
import * as moment from 'moment';
import { useEffect, useState } from "react";
import styles from "./Topmatch.module.scss";
import VideoMatch from "./VideoMatch";
const TopMatch = ({Data})=>{
    const [Loading, setLoading] = useState(false);
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
    })
    
    return(
        <>
            <div className={styles.topmatch_wrapper}>
                <div className="container">
                    <h2>Top Matches</h2>
                </div>
                
                <div className={`${styles.container} container`}>
                    <div className={`${styles.match_grid_wrapper} d-flex justify-content-between flex-wrap`}>
                        {
                           Data.map((item, i)=>{
                            return(
                                !Loading ?
                                <SkelNewPost />
                                :
                                <div key={i} className={`${styles.grid_item}`}>
                                    <div className={styles.image_wrapper}>
                                        <img src={item.thumbnail} alt="" />
                                    </div>
                                    {/* <div className="video_wrapper">
                                        <VideoMatch key={i} item={item} />
                                    </div> */}
                                    
                                    <div className={styles.details}>
                                        <Link href="">
                                            <div className={`${styles.compitition} d-flex align-items-center`}>                                                  
                                                <img src="/images/trophy.png" className={styles.trophy} alt="" />                                             
                                                <h6>{item.competition.name}</h6>
                                                
                                            </div>
                                            <ul className={`${styles.team_match} d-flex align-itms-center justify-content-between`}>                       
                                                <li className="d-flex align-items-center">
                                                    <img src="/images/ball.png" alt="" />                            
                                                    <h3>{item.side1.name}</h3>
                                                </li>
                                                <li className={`${styles.versus} d-flex align-items-center`}>VS</li>
                                                <li className="d-flex align-items-center">
                                                    <img src="/images/ball.png" alt="" />                            
                                                    <h3>{item.side2.name}</h3>
                                                </li>
                                            </ul>
                                        </Link>
                                    </div>
                                </div>
                            )
                           }) 
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopMatch;