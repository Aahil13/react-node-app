import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>all Reviews</h1>
        {reviews &&
          reviews.map((blog) => <div key={blog.id}>{blog.title}</div>)}
      </header>
    </div>
  );
}

export default App;
