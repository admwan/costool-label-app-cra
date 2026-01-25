import { useProduct } from "../context/ProductContext";

export default function ProductIdentityPage() {
  const { data, update } = useProduct();

  return (
    <div>
      <h2>Product Identity</h2>

      <input
        placeholder="Brand name"
        value={data.brand || ""}
        onChange={(e) => update({ brand: e.target.value })}
      />

      <br />

      <input
        placeholder="Product name"
        value={data.productName || ""}
        onChange={(e) => update({ productName: e.target.value })}
      />

      <br />

      <input
        placeholder="Product function"
        value={data.function || ""}
        onChange={(e) => update({ function: e.target.value })}
      />

      <br />

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
