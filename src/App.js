import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";

import ProjectContextPage from "./pages/ProjectContextPage";
import ProductIdentityPage from "./pages/ProductIdentityPage";
import PackagingDataPage from "./pages/PackagingDataPage";
import MarketingClaimsPage from "./pages/MarketingClaimsPage";
import SupplyChainPage from "./pages/SupplyChainPage";

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <nav style={{ padding: 10 }}>
          <Link to="/">Project</Link> |{" "}
          <Link to="/identity">Identity</Link> |{" "}
          <Link to="/packaging">Packaging</Link> |{" "}
          <Link to="/claims">Claims</Link> |{" "}
          <Link to="/supply">Supply</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProjectContextPage />} />
          <Route path="/identity" element={<ProductIdentityPage />} />
          <Route path="/packaging" element={<PackagingDataPage />} />
          <Route path="/claims" element={<MarketingClaimsPage />} />
          <Route path="/supply" element={<SupplyChainPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}
