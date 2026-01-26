export default function ErrorModal({ errors, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: 20,
        borderRadius: 5,
        maxWidth: 400
      }}>
        <h3>Please fix the following errors:</h3>
        <ul>
          {Object.values(errors).map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
