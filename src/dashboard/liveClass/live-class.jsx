import React from 'react'
import SideBar from '../components/sidebar/sidebar'
import NavBar from '../components/topBar/topbar'
import '../main.css'
import "../../assets/styles/App.css"
import './live-class.css'
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import { MdAlarm } from "react-icons/md";
import { LiaUser } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import liveVideo from '../../assets/images/live.png'
import live1 from '../../assets/images/live1.png'
import live2 from '../../assets/images/live2.png'
import up1 from '../../assets/images/up1.png'
import up2 from '../../assets/images/up2.png'
import up3 from '../../assets/images/up3.png'
import up4 from '../../assets/images/up4.png'
import up5 from '../../assets/images/up5.png'
import up6 from '../../assets/images/up6.png'
import up7 from '../../assets/images/graph.png'
import up8 from '../../assets/images/study.png'

export default function LiveClass() {
    const navigate = useNavigate()
    return (

        <div className="home live-c">
            <SideBar />
            <div className="homeContainer">
                <NavBar />
                <div className="page-content">
                    <nav className='flex flex-center-column'>
                        <span onClick={() => {
                            console.log("Go back");
                            navigate(-1)
                        }}>
                            <BiArrowBack style={{ fontSize: "22px" }} />
                        </span>
                        <span className='medium-text bold-1'>Live Classes</span>
                    </nav>
                    <div className="flex live-classes">
                        <CurrentLive
                            image={live1}
                            subject={'Chemistry'}
                            statusLive={true}
                            topic={'Alkane and It"s Family'}
                            time={'Today, 02:00 PM'}
                            author={'Adewale Adekunle'} />
                        <CurrentLive
                            image={live2}
                            subject={'Chemistry'}
                            statusLive={false}
                            topic={'Alkane and It"s Family'}
                            time={'Today, 02:00 PM'}
                            author={'Adewale Adekunle'} />
                    </div>
                    <div className="upcoming-classes">
                        <span className='medium-text'>Upcomming Live Classes</span>
                        <div className="contain-up-classes">
                            <LClass
                                image={up1}
                                subject="Civic Education"
                                desc="Introduction to civic education"
                                time="21 Feb, 12:00 PM"
                                author="John Okafor"
                                live="true"
                            />
                            <LClass
                                image={up2}
                                subject="Digital Marketing"
                                desc="Introduction to Digital Marketing and Affiliate Sales"
                                time="21 Feb, 12:00 PM"
                                author="John Okafor"
                            />
                            <LClass
                                image={up3}
                                subject="Data Science"
                                desc="Introduction to Data Science and Machine Learning"
                                time="21 Feb, 12:00 PM"
                                author="John Okafor"
                            />
                            <LClass
                                image={up4}
                                subject="SQL for Newbies"
                                desc="Font Properties Challenge 3"
                                time="21 Feb, 12:00 PM"
                                author="John Okafor"
                            />
                            <LClass
                                image={up5}
                                subject="Complete Adobe Lightroom Megacourse"
                                desc="Adding Content to Our Website"
                                time="21 Feb, 12:00 PM"
                                author="John Okafor"
                            />
                            <LClass
                                image={up6}
                                subject="Machine Learning A-Z™"
                                desc="CSS Font Property Challenge Solution"
                                time="21 Feb, 12:00 PM"
                                author="John Okafor"
                            />
                            <LClass
                                image={up7}
                                subject="Premiere Pro CC for Beginners"
                                desc="Premiere Pro CC for Beginners"
                                time="21 Feb, 12:00 PM"
                                author="John Okafor"
                            />
                            <LClass
                                image={up8}
                                subject="Graphic Design Masterclass"
                                desc="The Dark Art of Centering Elements"
                                time="21 Feb, 12:00 PM"
                                author="John"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function CurrentLive({ image, subject, statusLive, topic, time, author }) {
    return (
        <>
            <section className='flex'>
                <div>

                    <span className="subject">{subject}</span>
                    <div className="small-text live" style={{ color: "var(--primary-color)" }}>
                        {statusLive ? <img src={liveVideo} /> : <span className='flex flex-center-column' style={{ padding: "5px 3px", backgroundColor: "skyblue", width: "fit-content", borderRadius: "5px" }}><SlCalender style={{ marginInline: "3px" }} />Upcoming</span>}
                    </div>
                    <div className='big-text live'>
                        {topic}
                    </div>
                    <div className="time-author live flex flex-between small-text">
                        <span>
                            <MdAlarm />
                            {time}
                        </span>
                        <span>
                            <LiaUser />
                            {author}
                        </span>
                    </div>
                </div>
                <img src={image} alt="" />
            </section>
        </>
    )
}
function LClass({ image, subject, desc, time, author, live }) {
    return (
        <>
            <div className='up-classes'>
                <div className="image">
                    <img src={image} alt="" />
                    <div className="indicate-upcoming small-text">
                        {live ? <img src={liveVideo} /> : <span className='flex flex-center-column'><SlCalender style={{ marginInline: "3px" }} />Upcoming</span>}
                    </div>
                </div>
                <div className="desc">
                    <h4>{subject}</h4>
                    <p className='small-text1 fade-text'>{desc}</p>
                </div>
                <div className="line"></div>
                <div className="time-teacher small-text flex flex-around flex-center-column">
                    <span>
                        <MdAlarm />
                        {time}
                    </span>
                    <span>
                        <LiaUser />
                        {author}
                    </span>
                </div>
            </div>
        </>
    )
}