import { useProduct } from "../context/ProductContext";

export default function SupplyChainPage() {
  const { data, update } = useProduct();

  return (
    <div>
      <h2>Supply Chain Data</h2>

      <label>
        Barcode:
        <input
          value={data.barcode || ""}
          onChange={(e) => update({ barcode: e.target.value })}
        />
      </label>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
