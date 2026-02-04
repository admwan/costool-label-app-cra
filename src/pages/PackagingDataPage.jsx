import { useProduct } from "../context/ProductContext";
import { useState } from "react";

export default function PackagingDataPage() {
  const { data, update } = useProduct();
  const [errors, setErrors] = useState({});

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Packaging Data</h2>

      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <label style={{ width: '200px', textAlign: 'left' }}>Number of Layers:</label>
        <div style={{ flex: 1 }}>
          <input
            type="number"
            value={data.layers || ""}
            onChange={(e) => update({ layers: e.target.value })}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.layers && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.layers}</p>}
        </div>
      </div>

	  <div style={{ display: 'flex', marginBottom: '15px' }}>
	     <label style={{ width: '200px', textAlign: 'left' }}>Label design targeted at layer:</label>
	     <div style={{ flex: 1 }}>
	       <input
	         type="text"
	         value={data.targetingLayer || ""}
	         onChange={(e) => update({ targetingLayer: e.target.value })}
	         style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
	       />
	       {errors.targetingLayer && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.targetingLayer}</p>}
	     </div>
	   </div>


      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <label style={{ width: '200px', textAlign: 'left' }}>Nominal Content:</label>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            value={data.nominalContent || ""}
            onChange={(e) => update({ nominalContent: e.target.value })}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.nominalContent && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.nominalContent}</p>}
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '15px', alignItems: 'center' }}>
        <label style={{ width: '200px', textAlign: 'left' }}>Free Sample:</label>
        <div style={{ flex: 1 }}>
          <input
            type="checkbox"
            checked={data.freeSample || false}
            onChange={(e) => update({ freeSample: e.target.checked })}
            style={{ marginRight: '10px' }}
          />
          <span>Yes, this is a free sample</span>
        </div>
      </div>

      {/* Add more fields as needed, following the same pattern */}
    </div>
  );
}
