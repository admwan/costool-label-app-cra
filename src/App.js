import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProductProvider, useProduct } from './context/ProductContext';
import ErrorModal from './components/ErrorModal';
import WelcomePage from './pages/WelcomePage';
import ProjectContextPage from './pages/ProjectContextPage';
import ProductIdentityPage from './pages/ProductIdentityPage';
import PackagingDataPage from './pages/PackagingDataPage';
import MarketingClaimsPage from './pages/MarketingClaimsPage';
import SupplyChainPage from './pages/SupplyChainPage';
import CompletionPage from './pages/CompletionPage';
import {
  validateProjectContext,
  validateProductIdentity,
  validatePackagingData,
  validateMarketingClaims,
  validateSupplyChain
} from './utils/validators';
import './App.css';

// Define pages excluding Welcome and Completion
const dataEntryPages = [
  { path: '/project-context', element: <ProjectContextPage />, validator: validateProjectContext },
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
  const PageComponent = dataEntryPages[index].element.type;
  const validator = dataEntryPages[index].validator;

  const goNext = () => {
    const validationErrors = validator(data);
    if (Object.keys(validationErrors).length > 0) {
      setModalErrors(validationErrors);
      setShowModal(true);
    } else {
      const nextIndex = index + 1;
      if (nextIndex < dataEntryPages.length) {
        navigate(dataEntryPages[nextIndex].path);
      } else {
        navigate('/completion');
      }
    }
  };

  const goBack = () => {
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      navigate(dataEntryPages[prevIndex].path);
    } else {
      navigate('/welcome');
    }
  };

  return (
    <div className="page-container">
      <PageComponent />
      <div className="navigation-buttons" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ padding: '10px 20px' }}>Back</button>
        <button onClick={goNext} style={{ padding: '10px 20px' }}>Next</button>
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
  // Clear localStorage when the app loads
  useEffect(() => {
    localStorage.removeItem('productData');
  }, []);

  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          {dataEntryPages.map((page, index) => (
            <Route
              key={page.path}
              path={page.path}
              element={<PageWithNavigation index={index} />}
            />
          ))}
          <Route path="/completion" element={<CompletionPage />} />
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
