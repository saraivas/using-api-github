import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import gitHubLogo from "../../assets/images/github-logo.svg";

function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={gitHubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="Usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        {/* <Button type="submit"> */}
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} color="#fff" />
        </Button>
        {/* </Button> */}
      </Form>
    </Container>
  );
}

export default MainPage;
