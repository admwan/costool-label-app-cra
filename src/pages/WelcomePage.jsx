import { useNavigate } from 'react-router-dom';
import { useProduct } from "../context/ProductContext";

export default function WelcomePage() {
  const navigate = useNavigate();
  const { reset } = useProduct();

  const handleStartNew = () => {
    reset();
    navigate('/project-context');
  };

  const handleContinue = () => {
    navigate('/project-context');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Welcome to LabelReady</h1>
      <p>
        LabelReady is a tool designed to help you prepare all the information needed for your product label.
        This step-by-step guide will ensure you have everything required for compliance and clarity.
      </p>
      <h3>How It Works</h3>
      <ol style={{ textAlign: 'left' }}>
        <li>Fill in the required information for each section.</li>
        <li>Navigate through the sections using the Next and Back buttons.</li>
        <li>Review your information before submission.</li>
      </ol>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleStartNew}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Start New Session
        </button>
        <button
          onClick={handleContinue}
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
          Continue Previous Session
        </button>
      </div>
    </div>
  );
}
