import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Navi from "../layouts/Navi";
import Categories from "../layouts/Categories";
import ProductList from "../pages/ProductList";
import { Route } from "react-router-dom";
import ProductDetail from "./../pages/ProductDetail";
import CardDetail from "./../pages/CardDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Categories />
        </Grid.Column>
        <Grid.Column width={12}>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/:name" component={ProductDetail} />
          <Route path="/cart" component={CardDetail} />
        </Grid.Column>
      </Grid>
    </div>
  );
}
