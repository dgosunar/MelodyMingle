import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PBotton } from "../../components/Bottons";
import { Layout } from "../../components/Layout";

function Home() {
  const navigate = useNavigate();
  const redirecionar = (dirección) => navigate(dirección);

  const logIn = () => {
    redirecionar("/MelodyMingle/");
  };

  return (
    <Layout>
      <Container>
        <LogoBox>
          <img src="./Logos/CompleteLogo.png" alt="imagotipo" />
          <div className="secondarySubtitle"></div>
          <div className="secondarySubtitle"></div>
          <div style={{ margin: "20px" }}></div>
          <PBotton onClick={logIn}>Ingresar</PBotton>
        </LogoBox>
        <ImagenBox>
          <img src="./Images/User flow-bro.png" alt="imagenHome" />
          <a
            href="https://storyset.com/people"
            target="_blank"
            rel="noopener noreferrer"
          >
            People illustrations by Storyset
          </a>
        </ImagenBox>
      </Container>
    </Layout>
  );
}

export default Home;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;

export const ImagenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;
