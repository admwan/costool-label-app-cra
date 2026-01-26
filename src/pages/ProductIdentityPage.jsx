import { useProduct } from "../context/ProductContext";
import { validateProductIdentity } from "../utils/validators";
import { useState } from "react";

export default function ProductIdentityPage() {
  const { data, update } = useProduct();
  const [errors, setErrors] = useState({});

  const handleBlur = () => {
    const validationErrors = validateProductIdentity(data);
    setErrors(validationErrors);
  };

  return (
    <div>
      <h2>Product Identity</h2>

      <div>
        <input
          placeholder="Brand name"
          value={data.brand || ""}
          onChange={(e) => update({ brand: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.brand && <p className="error">{errors.brand}</p>}
      </div>

      <div>
        <input
          placeholder="Product name"
          value={data.productName || ""}
          onChange={(e) => update({ productName: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.productName && <p className="error">{errors.productName}</p>}
      </div>

      <div>
        <input
          placeholder="Product function"
          value={data.function || ""}
          onChange={(e) => update({ function: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.function && <p className="error">{errors.function}</p>}
      </div>

      <div>
        <input
          placeholder="Product category"
          value={data.category || ""}
          onChange={(e) => update({ category: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.category && <p className="error">{errors.category}</p>}
      </div>

      <label>
        Professional use?
        <input
          type="checkbox"
          checked={data.professional || false}
          onChange={(e) => update({ professional: e.target.checked })}
        />
      </label>
    </div>
  );
}
