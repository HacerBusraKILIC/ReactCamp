import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGYaXBJfKpy-g/profile-displayphoto-shrink_200_200/0/1617460611148?e=1628726400&v=beta&t=DIhFoPJxnyhu8J5N8ieOEvhXvB0xOeZqfraA6_mNQxo"
        />
        <Dropdown pointing="top left" text="Hacer Büşra">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
