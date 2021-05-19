import React, { useState } from "react";
import { Login } from "../login";
import { ModalContainer } from "../modal";

import "./header.css";

export const Header = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const triggerModal = () => setToggleModal(!toggleModal);

  return <header className="header-container">
    <h1>Hack Ideas</h1>
    <div className="login-container" onClick={() => triggerModal()}>Login</div>
    <ModalContainer toggleModal={toggleModal}>
      <Login />
    </ModalContainer>
  </header>
}

