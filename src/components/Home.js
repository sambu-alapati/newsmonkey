/*import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='container'>
        <h2  class="text-center mt-3" >Welcome to News Monkey</h2>
        <img src='https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg'  class="mx-auto d-block my-5"alt="Wecome-img"/>
        <p class="text-center mb-4">This text is centered</p>
      </div>
    </div>
  )
}  */


  import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-1.5">

      {/* Heading */}
      <h1 className="text-center mb-4">Welcome to NewsMonkey 🐵</h1>

      {/* Centered Image + About paragraph */}
      <div className="text-center mb-5">
        <img src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg" alt="NewsMonkey Logo" className="img-fluid mb-3" />
        <p className="lead">
          NewsMonkey provides you with real-time, reliable, and categorized news updates from all over the world. Stay ahead with the latest in tech, politics, sports, entertainment, and more.
        </p>
      </div>

      {/* News Info Section: Image + Text + Button */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src="https://content.jdmagicbox.com/comp/def_content/newspaper_advertising_agencies/default-newspaper-advertising-agencies-8-250.jpg" alt="Latest News" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h3>Latest News at Your Fingertips</h3>
          <p>
            Our website curates top stories and trending topics so you're always informed. Click below to jump into the latest headlines.
          </p>
          <button className="btn btn-primary mt-2" onClick={() => navigate('/news')}>
            Go to News Page
          </button>
        </div>
      </div>

      {/* Text section about today's news */}
      <div className="mb-5">
        <h4>🗞️ Today's Top Stories</h4>
        <p>
          From national developments to international affairs, NewsMonkey compiles the most important stories of the day. Get concise summaries, accurate facts, and fast delivery — no fluff, just facts.
        </p>
      </div>

      {/* Image + Text + Button side-by-side */}
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img src="https://nrdcindia.com//uploads/images/1642113282aboutus.jpg" alt="About Us" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 order-md-1">
          <h4>Want to Know More?</h4>
          <p>
            Learn about our mission, our values, and the team behind NewsMonkey. We’re here to change the way news is delivered.
          </p>
          <button className="btn btn-outline-secondary mt-2" onClick={() => navigate('/about')}>
            Visit About Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
