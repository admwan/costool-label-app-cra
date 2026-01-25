import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import ProjectContextPage from './pages/ProjectContextPage';
import ProductIdentityPage from './pages/ProductIdentityPage';
import PackagingDataPage from './pages/PackagingDataPage';
import MarketingClaimsPage from './pages/MarketingClaimsPage';
import SupplyChainPage from './pages/SupplyChainPage';
import './App.css';

const pages = [
  { path: '/', element: <ProjectContextPage /> },
  { path: '/product-identity', element: <ProductIdentityPage /> },
  { path: '/packaging-data', element: <PackagingDataPage /> },
  { path: '/marketing-claims', element: <MarketingClaimsPage /> },
  { path: '/supply-chain', element: <SupplyChainPage /> },
];

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          {pages.map((page, index) => (
            <Route
              key={page.path}
              path={page.path}
              element={<PageWithNavigation index={index} />}
            />
          ))}
        </Routes>
      </Router>
    </ProductProvider>
  );
}

function PageWithNavigation({ index }) {
  const navigate = useNavigate();
  const goNext = () => navigate(pages[(index + 1) % pages.length].path);
  const goBack = () => navigate(pages[(index - 1 + pages.length) % pages.length].path);

  return (
    <div className="page-container">
      {pages[index].element}
      <div className="navigation-buttons">
        <button onClick={goBack}>Back</button>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
