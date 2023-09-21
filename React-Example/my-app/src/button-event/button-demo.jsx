export function ButtonDemo() {
  function ViewLarge() {
    window.open("realme10.jpg", "Kids", "width=500 height=700");
  }
  function DisableContext() {
    document.oncontextmenu = function () {
      alert("Right Click Disabled");
      return false;
    };
  }
  return (
    <div className="container-fluid" onContextMenu={DisableContext}>
      <h2>Button Events</h2>
      <img onDoubleClick={ViewLarge} src="realme10.jpg" width="100" height="100" />
      <p>Double Click to View Large</p>
    </div>
  );
}
