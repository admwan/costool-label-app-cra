import { useProduct } from "../context/ProductContext";
import { validateProductIdentity } from "../utils/validators";
import { useState } from "react";

export default function ProductIdentityPage() {
  const { data, update } = useProduct();
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/svg+xml', 'application/pdf', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid file (PDF, SVG, JPG, or WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result;
      update({ brandLogo: base64String, brandLogoName: file.name });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Product Identity</h2>

      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <label style={{ width: '200px', textAlign: 'left' }}>Brand Name:</label>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            value={data.brandName || ""}
            onChange={(e) => update({ brandName: e.target.value })}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.brandName && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.brandName}</p>}
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '15px', alignItems: 'center' }}>
        <label style={{ width: '200px', textAlign: 'left' }}>Brand Logo:</label>
        <div style={{ flex: 1 }}>
          <input
            type="file"
            accept=".pdf,.svg,.jpg,.jpeg,.webp"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="brand-logo-upload"
          />
          <button
            type="button"
            onClick={() => document.getElementById('brand-logo-upload').click()}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Upload Brand Logo
          </button>
          {data.brandLogoName && <span style={{ marginLeft: '10px' }}>Selected: {data.brandLogoName}</span>}
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <label style={{ width: '200px', textAlign: 'left' }}>Product Name:</label>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            value={data.productName || ""}
            onChange={(e) => update({ productName: e.target.value })}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.productName && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.productName}</p>}
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <label style={{ width: '200px', textAlign: 'left' }}>Product Function:</label>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            value={data.productFunction || ""}
            onChange={(e) => update({ productFunction: e.target.value })}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.productFunction && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.productFunction}</p>}
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <label style={{ width: '200px', textAlign: 'left' }}>Product Category:</label>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            value={data.productCategory || ""}
            onChange={(e) => update({ productCategory: e.target.value })}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.productCategory && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.productCategory}</p>}
        </div>
      </div>

      {/* Display the uploaded image below all input fields */}
      {data.brandLogo && !data.brandLogoName.endsWith('.pdf') && (
        <div style={{ marginTop: '20px' }}>
          <h4>Brand Logo Preview:</h4>
          <img
            src={data.brandLogo}
            alt="Brand Logo Preview"
            style={{ maxWidth: '200px', maxHeight: '200px', border: '1px solid #ccc' }}
          />
        </div>
      )}
    </div>
  );
}
