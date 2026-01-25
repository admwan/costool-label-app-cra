import { useProduct } from "../context/ProductContext";

export default function MarketingClaimsPage() {
  const { data, update } = useProduct();

  return (
    <div>
      <h2>Marketing Content & Claims</h2>

      <textarea
        placeholder="Functional claims"
        value={data.functionalClaims || ""}
        onChange={(e) => update({ functionalClaims: e.target.value })}
      />

      <br />

      <textarea
        placeholder="Marketing claims"
        value={data.marketingClaims || ""}
        onChange={(e) => update({ marketingClaims: e.target.value })}
      />
    </div>
  );
}
