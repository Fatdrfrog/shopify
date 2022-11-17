export const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
};
