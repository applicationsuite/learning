export function DataBinding() {
  var categories = ["All", "Electronice", "Footwear", "Fashion"];

  return (
    <div className="container-fluid">
      <nav className="btn-group-vertical">
        {categories.map((category) => (
          <button className="btn btn-danger mb-1">{category}</button>
        ))}
      </nav>
      <h2>Categories</h2>
      <ol>
        {
          categories.map((category)=><li>{category}</li>)
        }
      </ol>
      <select>
        {
          categories.map((category)=><option value={category}><input type="checkbox"/>{category}</option>)
        }
      </select>
      <ul>
        {
          categories.map((category)=><li><input type="checkbox"/>{category}</li>)
        }
      </ul>
    </div>
  );
}
