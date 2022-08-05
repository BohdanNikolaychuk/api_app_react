import './App.css';

import { Routes, Route } from 'react-router-dom';
import Voting from './Page/Voting/Voting';
import Breed from './Page/Breed/Breeds';
import ImgSide from './Page/ImgSide/ImgSide';
import Gallery from './Page/Gallery/Gallery';
import Layout from './components/Layout/Layout';
import Like from './Page/Like/Like';
import NotFound from './Page/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ImgSide />} />
          <Route path="voting" element={<Voting />} />
          <Route path="pet" element={<Breed />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="voting/:like" element={<Like />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
