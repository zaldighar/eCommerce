const App = () => {
  const city = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rajshahi",
  ];

  return (
    <div>
      {
        <ul style={{  }}>
          {city.map((c) => (
            <li key={c} style={{ marginBottom: '5px', listStyleType: 'none', color: 'blue' }}>{c}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default App;
