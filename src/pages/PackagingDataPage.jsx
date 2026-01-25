import { useProduct } from "../context/ProductContext";

export default function PackagingDataPage() {
  const { data, update } = useProduct();

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
      </label>

      <br />

      <label>
        Nominal content:
        <input
          value={data.nominalContent || ""}
          onChange={(e) => update({ nominalContent: e.target.value })}
        />
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
