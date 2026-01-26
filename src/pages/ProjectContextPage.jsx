import { useProduct } from "../context/ProductContext";
import { validateProjectContext } from "../utils/validators";
import { useState, useEffect } from "react";

export default function ProjectContextPage() {
  const { data, update } = useProduct();
  const [errors, setErrors] = useState({});

  // Log context data whenever it changes
  useEffect(() => {
    console.log("Context data updated:", data);
  }, [data]);

  const handleNext = () => {
    const validationErrors = validateProjectContext(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      alert(`Please fix the following errors: ${Object.values(validationErrors).join(', ')}`);
      return false;
    }
    return true;
  };

  return (
    <div>
      <h2>Project Context</h2>

      <div>
        <input
          placeholder="Targeting Markets"
          value={data.targetingMarkets || ""}
          onChange={(e) => update({ targetingMarkets: e.target.value })}
        />
        {errors.targetingMarkets && <p className="error">{errors.targetingMarkets}</p>}
      </div>

      <div>
        <input
          placeholder="Country of Origin"
          value={data.countryOfOrigin || ""}
          onChange={(e) => update({ countryOfOrigin: e.target.value })}
        />
        {errors.countryOfOrigin && <p className="error">{errors.countryOfOrigin}</p>}
      </div>
    </div>
  );
}
