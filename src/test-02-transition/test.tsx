import "./test.css";

export default function Test2() {
  return (
    <div style={{ display: "flex", gap: 60, padding: 40 }}>
      <div>
        <h2>top / left 애니메이션</h2>
        <div className="container">
          <div className="box topLeft"></div>
        </div>
      </div>

      <div>
        <h2>transform 애니메이션</h2>
        <div className="container">
          <div className="box transformBox"></div>
        </div>
      </div>
    </div>
  );
}
