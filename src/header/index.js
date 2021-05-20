import React, { useState } from "react";
import { Login } from "../login";
import { Register } from "../register";
import { ModalContainer } from "../modal";

import "./header.css";

export const Header = () => {
  const [toggleLoginModal, setToggleLoginModal] = useState(false);
  const [toggleRegisterModal, setToggleRegisterModal] = useState(false);

  const triggerLoginModal = () => setToggleLoginModal(!toggleLoginModal);
  const triggerRegisterModal = () => setToggleRegisterModal(!toggleRegisterModal);

  return <header className="header-container">
    <h1>Hack Ideas</h1>
    <div className="login-container" onClick={() => triggerRegisterModal()}>Register</div>
    <div className="login-container" onClick={() => triggerLoginModal()}>Login</div>
    <ModalContainer toggleModal={toggleLoginModal}>
      <Login />
    </ModalContainer>
    <ModalContainer toggleModal={toggleRegisterModal}>
      <Register />
    </ModalContainer>
  </header>
}

