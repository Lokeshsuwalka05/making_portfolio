import React from 'react';
import './App.css';
import EducationJourney from './Sections/Educational_journey/Education_career';
import ArticlesAndBlogs from './Sections/Articles&Blogs/Articles&Blogs';
import Testimonials from './Sections/Testimonials/Testimonials';
import MyFeedsAndPosts from './Sections/MyFeeds&post/MyFeeds&post';
import Form from './Sections/Form/Form'



const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {/* <EducationJourney /> */}
        {/* <ArticlesAndBlogs/> */}
        {/* <Testimonials/> */}
        <MyFeedsAndPosts/>
        {/* <Form/> */}
      
      </main>
      {/* <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
