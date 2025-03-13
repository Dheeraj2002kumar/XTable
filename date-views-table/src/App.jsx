import { useState } from "react";
// import "./App.css";

const App = () => {
  // Initial data in state
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  // Sort by Date
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      // Sort by date in descending order
      if (a.date === b.date) {
        return b.views - a.views; // If dates are equal, sort by views
      }
      return new Date(b.date) - new Date(a.date); // Latest date first
    });
    setData(sortedData);
  };

  // Sort by Views
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      // Sort by views in descending order
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date); // If views are equal, sort by date
      }
      return b.views - a.views; // Higher views first
    });
    setData(sortedData);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>

      {/* Buttons to sort */}
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>

      {/* Table to display data */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
