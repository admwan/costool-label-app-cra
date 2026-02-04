import { useProduct } from "../context/ProductContext";

export default function CompletionPage() {
  const { data } = useProduct();

  const handleSubmit = () => {
    alert("Your data has been submitted successfully!");
    console.log("Submitted data:", data);
    // Here, you can add logic to send data to a backend or API
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Data Entry Complete</h1>
      <p>You have successfully filled in all the required information.</p>
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Submit Data
      </button>
    </div>
  );
}
