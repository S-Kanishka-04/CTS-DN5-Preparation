import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

  return (

    <div className="container">

      <div className="box">
        <CourseDetails />
      </div>

      <div className="box">
        <BookDetails />
      </div>

      <div className="box">
        <BlogDetails />
      </div>

    </div>

  );

}

export default App;