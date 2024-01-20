import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinar } from "../components/Spinar.jsx";
const Navbar = lazy(() => import("../components/Navbar.jsx"));
const Home = lazy(() => import("./Home.jsx"));
const Post = lazy(() => import("./Post.jsx"));
const Login = lazy(() => import("./Login.jsx"));
const SignUp = lazy(() => import("./SignUp.jsx"));
const Course = lazy(() => import("./Course.jsx"));
const Free = lazy(() => import("./Free.jsx"));
const Data = lazy(() => import("./Data.jsx"));
const ForgotPassword = lazy(() => import("../components/ForgotPassword.jsx"));
const ResetPassword = lazy(() => import("../components/ResetPassword.jsx"));
const SinglePostPage = lazy(() => import("./SinglePostPage.jsx"));
const ViewDetails = lazy(() => import("./ViewDetails.jsx"));
const ViewFreeData = lazy(() => import("./ViewFreeData.jsx"));
const MyCourse = lazy(() => import("./MyCourse.jsx"));
const MyCourseDetails = lazy(() => import("./MyCourseDetails.jsx"));
const PdfViewer = lazy(() => import("../components/PdfViewer.jsx"));

// import { AdminHome } from "../AdminSide/AdminPages/AdminHome"
// import { AdminPost } from "../AdminSide/AdminPages/AdminPost"
// import { AdminCourse } from "../AdminSide/AdminPages/AdminCourse"
// import { AdminFree } from "../AdminSide/AdminPages/AdminFree"
// import { AdminSignUp } from "../AdminSide/AdminPages/AdminSignUp"
// import { ViewDetails } from "./ViewDetails"
// import { Coupon } from "../AdminSide/AdminPages/Coupon"
// import { AdminAddCourse } from "../AdminSide/AdminPages/AdminAddCourse"
// import { Box } from "@chakra-ui/react"

function MainRoutes() {
  return (
    <>
      {/* <Suspense fallback={"<Spinar />."}>
        <Navbar />
      </Suspense> */}

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinar />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/posts"
          element={
            <Suspense fallback={<Spinar />}>
              <Post />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Spinar />}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path="/signup"
          element={
            <Suspense fallback={<Spinar />}>
              <SignUp />
            </Suspense>
          }
        />

        <Route
          path="/course"
          element={
            <Suspense fallback={<Spinar />}>
              <Course />
            </Suspense>
          }
        />

        <Route
          path="/free"
          element={
            <Suspense fallback={<Spinar />}>
              <Free />
            </Suspense>
          }
        />

        <Route
          path="/dataHub"
          element={
            <Suspense fallback={<Spinar />}>
              <Data />
            </Suspense>
          }
        />

        <Route
          path="/forgotpassword"
          element={
            <Suspense fallback={<Spinar />}>
              <ForgotPassword />
            </Suspense>
          }
        />

        <Route
          path="/forgot-password/:id/:token"
          element={
            <Suspense fallback={<Spinar />}>
              <ResetPassword />
            </Suspense>
          }
        />

        <Route
          path="/singlepostpage/:postId/:index/:category"
          element={
            <Suspense fallback={<Spinar />}>
              <SinglePostPage />
            </Suspense>
          }
        />

        <Route
          path="/viewdetails/:courseId"
          element={
            <Suspense fallback={<Spinar />}>
              <ViewDetails />
            </Suspense>
          }
        />

        <Route
          path="/viewfreedata/:freeDataId"
          element={
            <Suspense fallback={<Spinar />}>
              <ViewFreeData />
            </Suspense>
          }
        />

        <Route
          path="/mycourse"
          element={
            <Suspense fallback={<Spinar />}>
              <MyCourse />
            </Suspense>
          }
        />

        <Route
          path="/mycoursedetail/:id/:courseId"
          element={
            <Suspense fallback={<Spinar />}>
              <MyCourseDetails />
            </Suspense>
          }
        />

        <Route
          path="/previewPdf/uploads/:link"
          element={
            <Suspense fallback={<Spinar />}>
              <PdfViewer />
            </Suspense>
          }
        />

        {/* Admin Routes  */}
        {/* <Route path="/adminhome" element={<AdminHome />}/>
                <Route path="/adminpost" element={<AdminPost />}/>
                <Route path="/admincourse" element={<AdminCourse />}/>
                <Route path="/adminaddcourse" element={<AdminAddCourse />}/>
                <Route path="/adminfree" element={<AdminFree />}/>
                <Route path="/adminsignup" element={<AdminSignUp />}/>
                <Route path="/coupon" element={<Coupon />}/> */}
      </Routes>
    </>
  );
}
export default MainRoutes;
