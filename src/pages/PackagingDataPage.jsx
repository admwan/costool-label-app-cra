import { useProduct } from "../context/ProductContext";
import { validatePackagingData } from "../utils/validators";
import { useState } from "react";

export default function PackagingDataPage() {
  const { data, update } = useProduct();
  const [errors, setErrors] = useState({}); // Declare errors state

  const handleNext = () => {
    const validationErrors = validatePackagingData(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      alert(`Please fix the following errors: ${Object.values(validationErrors).join(', ')}`);
      return false;
    }
    return true;
  };

  return (
    <div>
      <h2>Packaging Data</h2>

      <label>
        Number of layers:
        <input
          type="number"
          value={data.layers || ""}
          onChange={(e) => update({ layers: e.target.value })}
        />
        {errors.layers && <p className="error">{errors.layers}</p>}
      </label>

      <br />

      <label>
        Nominal content:
        <input
          value={data.nominalContent || ""}
          onChange={(e) => update({ nominalContent: e.target.value })}
        />
        {errors.nominalContent && <p className="error">{errors.nominalContent}</p>}
      </label>

      <br />

      <label>
        Free sample?
        <input
          type="checkbox"
          checked={data.freeSample || false}
          onChange={(e) => update({ freeSample: e.target.checked })}
        />
      </label>
    </div>
  );
}

