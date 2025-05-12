 
import humanizeDuration from 'humanize-duration';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY
 
  const navigate = useNavigate()
 const [allCourses,setAllCourses] = useState([])

 const [isEducator,setIsEducator]=useState(true)


 //Fetch All Courses
  const fetchAllCourses = async ()=>{
  setAllCourses(dummyCourses)
 }

 //Function to cal the average rating of course
 const calculateRating = (course)=>{
  if(course.courseRatings.length === 0){
    return 0;
  }
  let totalRating = 0
  course.courseRatings.forEach(rating =>{
    totalRating +=rating.rating
  })
  return totalRating / course.courseRatings.length
 }

//Function to Calculate Course Chapter Taime
 const calculateChapterTime = (chapter) =>{

  let time = 0
  chapter.chapterContent.map((lecture) =>time +=lecture.lectureDuration)
  return humanizeDuration(time*60*1000,{units:["h","m"]})
 }

 // Function to calculate course duration

 const calculateCourseDuration = (course)=>{
  let time = 0

  course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time +=lecture.lectureDuration))

  return humanizeDuration(time * 60 * 1000,{units:["h","m"]})
 }


 // Function calculate to No of lecture in this code

 const calculateNoOfLectures = (course) =>{
  let totalLectures = 0;
  course.courseContent.forEach(chapter =>{
    if(Array.isArray(chapter.chapterContent)){
      totalLectures += chapter.chapterContent.length
    }
  });
  return totalLectures
 }

 



 useEffect(()=>{
  fetchAllCourses()
 },[])
 
 const value = {
    currency,allCourses,navigate,calculateRating,
  isEducator,setIsEducator,calculateNoOfLectures,calculateCourseDuration, calculateChapterTime,
  
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
