import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { Routes, Route } from "react-router-dom"
import Fashion from './Fashion';
import Magazine from './Magazine';
import TopNewsDetails from './TopNewsDetailsPage';
import TrendDetails from './FashionTrendDetail';
import HomePageLayout from './HomePageLayout';
import Landing_Page from './LandingPage';
import MoreStoryDetails from './MoreStoriesDetail';
import News from './News';
import LatestNewsDetails from './LatestNewsDetail';
import BannerDetails from './BannerPageDetail';
import Subscribe from './Subscribe';
import Contact from './Contact';
import Entertainment from './Entertainment';






function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/'  element={<HomePageLayout/>}>

        <Route index="/" element={ <Landing_Page/> } />
        <Route path="fashion" element={ <Fashion/> } />
        <Route path="magazine" element={<Magazine/>} />
        <Route path="economy" element={<News/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/entertainment" element={<Entertainment/>} />
        <Route path="subscribe" element={<Subscribe/>} />
        <Route path="banner_details_page" element={<BannerDetails/>} />
        <Route path="/topnews/:pid" element={<TopNewsDetails/>} />
        <Route path="/fashion_trend/:pid" element={<TrendDetails/>} />
        <Route path="/more_stories/:pid" element={<MoreStoryDetails/>} />
        <Route path="/latestnews/:pid" element={<LatestNewsDetails/>} />
        
        </Route>
      
      </Routes>
    </div>
  )
}

export default App