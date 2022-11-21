import { Outlet } from "react-router-dom";
import { CardComponent } from "../CardComponent";
import { useShowcase } from "../../hooks/useShowcase";

export const Showcase = () => {
  const { isLoading, isError, showcase } = useShowcase();

  if (isLoading) return <>loading...</>;

  if (isError) return <>Sorry :( data is lost somewhere ^_^</>;

  return (
    <>
      <Outlet />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        {showcase.map((el) => (
          <CardComponent item={el} />
        ))}
      </div>
    </>
  );
};
