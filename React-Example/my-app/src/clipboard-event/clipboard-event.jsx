import { useState } from "react";

export function ElementStatee() {
  const [msg, setMsg] = useState("");

  function Cut() {
    setMsg("Removed - Copied to Clipboard");
  }
  function Copy() {
    setMsg("Copied to Clipboard");
  }
  function Paste() {
    setMsg("Inserted from Clipboard");
  }

  return (
    <div className="container-fluid">
      <div>
        <textarea
          onCut={Cut}
          onCopy={Copy}
          onPaste={Paste}
          rows="4"
          cols="40"
        ></textarea>
        <p>{msg}</p>
      </div>
    </div>
  );
}
