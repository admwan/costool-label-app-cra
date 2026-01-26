import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ErrorModal from './components/ErrorModal';
import { ProductProvider, useProduct } from './context/ProductContext';
import {
  validateProjectContext,
  validateProductIdentity,
  validatePackagingData,
  validateMarketingClaims,
  validateSupplyChain
} from './utils/validators';
import ProjectContextPage from './pages/ProjectContextPage';
import ProductIdentityPage from './pages/ProductIdentityPage';
import PackagingDataPage from './pages/PackagingDataPage';
import MarketingClaimsPage from './pages/MarketingClaimsPage';
import SupplyChainPage from './pages/SupplyChainPage';
import './App.css';

// Define pages with their validators
const pages = [
  { path: '/', element: <ProjectContextPage />, validator: validateProjectContext },
  { path: '/product-identity', element: <ProductIdentityPage />, validator: validateProductIdentity },
  { path: '/packaging-data', element: <PackagingDataPage />, validator: validatePackagingData },
  { path: '/marketing-claims', element: <MarketingClaimsPage />, validator: validateMarketingClaims },
  { path: '/supply-chain', element: <SupplyChainPage />, validator: validateSupplyChain },
];

function PageWithNavigation({ index }) {
  const navigate = useNavigate();
  const { data } = useProduct();
  const [showModal, setShowModal] = useState(false);
  const [modalErrors, setModalErrors] = useState({});
  const PageComponent = pages[index].element.type;
  const validator = pages[index].validator;

  const goNext = () => {
    const validationErrors = validator(data);
    if (Object.keys(validationErrors).length > 0) {
      setModalErrors(validationErrors);
      setShowModal(true);
    } else {
      navigate(pages[(index + 1) % pages.length].path);
    }
  };

  const goBack = () => navigate(pages[(index - 1 + pages.length) % pages.length].path);

  return (
    <div className="page-container">
      <PageComponent />
      <div className="navigation-buttons">
        <button onClick={goBack}>Back</button>
        <button onClick={goNext}>Next</button>
      </div>
      {showModal && (
        <ErrorModal
          errors={modalErrors}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}



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

export default App;
