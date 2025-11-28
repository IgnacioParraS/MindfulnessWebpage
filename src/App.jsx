import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Layout from './components/Layout';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;