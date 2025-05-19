import { useAuth, useUser } from "@clerk/clerk-react";
import humanizeDuration from 'humanize-duration';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const {getToken} = useAuth()
const {user} = useUser()

  const [allCourses, setAllCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]); 
  const [isEducator, setIsEducator] = useState(true);

  // Fetch All Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // Function to calculate the average rating of a course
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) return 0;
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  // Function to calculate chapter time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map(
        (lecture) => (time += lecture.lectureDuration)
      )
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate number of lectures
  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };


  // Fetch User Enrolled Courses
  const fetchUserEnrolledCourses = async ()=>{
    setEnrolledCourses(dummyCourses)
  }

  // Test: Load dummy enrolled courses
  useEffect(() => {
    fetchAllCourses();
fetchUserEnrolledCourses()    
  }, []);

const logToken = async () =>{
  console.log(await getToken());
}
  useEffect(()=>{
    if(user){
    logToken()
    }
  },[user])

  
  const value = {
    currency,
    allCourses,
    navigate,
    isEducator,
    setIsEducator,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    enrolledCourses,fetchUserEnrolledCourses
   
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
