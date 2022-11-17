import { CardComponent } from "../CardComponent";
import { useProducts } from "../../hooks/useProducts";
import { CircularProgress } from "@mui/material";
import { CartSkeleton } from "../../UI/Skeletons/CartSkeleton";
import { Layout } from "../../UI/Layout";
import { useCurrentShowcase } from "../../hooks/useCurrentShowcase";

export const Showcase = () => {
  const { showcaseItems, isLoading, isError } = useProducts();

  const currentItems = useCurrentShowcase(showcaseItems);

  if (isLoading)
    return (
      <Layout>
        {Array.from(Array(12).keys()).map((el) => (
          <CartSkeleton key={el} />
        ))}
      </Layout>
    );

  if (isError) return <>Sorry ,showcase is unavaiable :(</>;

  // [0,1,2,3,4,5,6]
  return (
    <Layout>
      {currentItems.map((item) => (
        <CardComponent key={item._id} item={item} />
      ))}
    </Layout>
  );
};
