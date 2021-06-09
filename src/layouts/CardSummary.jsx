import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Menu, Container } from "semantic-ui-react";

export default function CardSummary() {
  return (
    <Dropdown item text="Sepetiniz">
      <Dropdown.Menu>
        <Dropdown.Item>Acer Laptop</Dropdown.Item>
        <Dropdown.Item>Asus Laptop</Dropdown.Item>
        <Dropdown.Item>Dell Laptop</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/cart">
          Sepete Git
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
