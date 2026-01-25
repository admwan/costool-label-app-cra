import { useProduct } from "../context/ProductContext";

export default function ProjectContextPage() {
  const { data, update } = useProduct();

  return (
    <div>
      <h2>Project Context</h2>

      <label>
        Targeting Markets:
        <input
          value={data.markets || ""}
          onChange={(e) => update({ markets: e.target.value })}
        />
      </label>

      <br />

      <label>
        Country of Origin:
        <input
          value={data.origin || ""}
          onChange={(e) => update({ origin: e.target.value })}
        />
      </label>
    </div>
  );
}
