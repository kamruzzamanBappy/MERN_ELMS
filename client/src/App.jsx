import BrowserRouter, { Route, Routes } from "react-router-dom";
import Loading from "./components/student/Loading";
import AddCourse from "./pages/educator/AddCourse";
import Dashboard from "./pages/educator/Dashboard";
import Educator from "./pages/educator/Educator";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import CourseDetails from "./pages/student/CourseDetails";
import CoursesList from "./pages/student/CoursesList";
import Home from "./pages/student/Home";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CoursesList />} />
          <Route path="/course-list/:input" element={<CoursesList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/my-enrollments" element={<MyEnrollments />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path="/loading/:path" element={<Loading />} />

          <Route path="/educator" element={<Educator />}></Route>

          <Route path="educator" element={<Dashboard />}></Route>
          <Route path="/add-course" element={<AddCourse />}></Route>
          <Route path="/my-courses" element={<MyCourses />}></Route>
          <Route
            path="/student-enrolled"
            element={<StudentsEnrolled />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
