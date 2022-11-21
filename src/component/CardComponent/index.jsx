import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppContext } from "../../Context";
import { Link } from "react-router-dom";

import bank from "../../assets/bank.png";

export const CardComponent = ({ item }) => {
  const { name, type, price } = item;
  const { handleAddToCart } = React.useContext(AppContext);

  // 1 => Создать компонент для каждого продукта
  // 2 => передать id через param
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={bank} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} | {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type} are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleAddToCart(item)}>
          Add to Cart
        </Button>
        <Button size="small" component={Link} to={`/${item._id}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
