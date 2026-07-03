import "./App.css";

export default function App() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    <div className="Center">
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit">Search </button>
      </form>
    </div>
  );
}
