import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Navi from "../layouts/Navi";
import Categories from "../layouts/Categories";
import ProductList from "../pages/ProductList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Categories />
        </Grid.Column>
        <Grid.Column width={12}>
          <ProductList />
        </Grid.Column>
      </Grid>
    </div>
  );
}
