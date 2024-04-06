import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText'


const tabsName = ["Free ","New to Coding","Most popular","Skill paths","Career paths"]

const ExploreMore = () => {
 
 
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(
      HomePageExplore[0].courses[0].heading
    );

    console.log(currentCard+courses+currentCard)
    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore?.filter((course) => course.tag === value);
      
        setCourses(result[0]?.courses);
        setCurrentCard(result[0]?.courses[0]?.heading);
       
        
      };

      return (
    <div>
        <div className='text-4xl font-semibold text-center'>
            Unlock the <HighlightText text={"Power of code"}/>
        </div>
        <p className='text-center text-richblack-300 text-sm text-[16px]  mt-3'>
        Learn to Build Anything You Can Imagine
        </p>

        <div className='flex flex-row  gap-5 rounded-full bg-richblack-800 mb-5 border-richblack-100 mt-5 px-1 py-1 '>
            {
                tabsName.map((element,index)=> {
                    
                    return (
                        <div onClick={()=>setMyCards(element)} className={`text-[16px] flex flex-row items-center gap-2 ${currentTab === element ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}  key={index} >
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className='lg:h-[150px]'>

        {/* <div className='absolute flex flex-row gap-10 justify-between w-full'>
            {
                courses?.map((element,index)=>{
                    return (
                        <CourseCard key={index} cardData = {element} currentCard={currentCard} setCurrentCard ={setCurrentCard} />
                    )
                })
            }
        </div> */}

        </div>

    </div>
  )
}

export default ExploreMore