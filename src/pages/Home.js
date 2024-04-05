import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';

const Home = () => {
    return (
        <div>
            {/* section  1*/}

            <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify max-w-maxContent'>
                <Link to={"/signup"}>

                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-hite'>
                        <div className='flex flex-row items-center gap-2 rounded-full py-[5px] transition-all duration-200 group-hover:bg-richblack-900' >
                            <p>Become an Instructor</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                </Link>

            <div className="text-center text-4xl font-semibold mt-7 ">
                Empower Your Future With <HighlightText text={"Coding Skills"}/>
            </div>

            <div className='mt-4 w-[90%] text-center font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                <CTAButton linkto={"/login"}>Book a Demo</CTAButton>

            </div>  

            <div className='mx-3 my-12 shadow-blue-200 max-w-maxContent'>
                <video 
                muted 
                loop 
                autoPlay>
                        <source src={Banner} type='video/mp4'/>
                </video>
            </div>

            {/* code section 1 */}

            <div>
                <CodeBlocks position={"lg:flex-row"} 
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock your <HighlightText text={"coding potential"}/> with our online courses.
                            
                        </div>
                        }
                    subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

                        ctabtn1={
                            {
                                btnText : "Try it yourself",
                                linkto:"/signup",
                                active:true
                            }
                        }

                        ctabtn2={
                            {
                                btnText : "Learn more",
                                linkto:"/login",
                                active:false
                            }
                        }

                        codeBlock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                        codeColor={"text-yellow-25"}
                />
                
            </div>

            <div>
                <CodeBlocks position={"lg:flex-row-reverse"} 
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock your <HighlightText text={"coding potential"}/> with our online courses.
                            
                        </div>
                        }
                    subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

                        ctabtn1={
                            {
                                btnText : "Try it yourself",
                                linkto:"/signup",
                                active:true
                            }
                        }

                        ctabtn2={
                            {
                                btnText : "Learn more",
                                linkto:"/login",
                                active:false
                            }
                        }

                        codeBlock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                        codeColor={"text-yellow-25"}
                />
                
            </div>

            </div>


            {/* section  2*/}
            {/* section  3*/}
            {/* section  4*/}

        </div>
    )
}


export default Home