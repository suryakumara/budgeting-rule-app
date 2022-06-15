import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ChartComponent from "../components/ChartComponent";
import FormInputSalary from "../components/FormInputSalary";
import useAuthContext from "../hooks/useAuthContext";
import styles from "../styles/Home.module.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Sliders from "../components/Sliders";
import { useRouter } from "next/router";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
`;

const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
`;

const Header = styled.header`
  height: 48px;
  display: flex;
  align-items: center;
`;

const ContainerChart = styled.div`
  width: 30rem;
`;

const Home = () => {
  const { user } = useAuthContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title className="text-red-400">Budgeting Rule App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className="mt-10">
        <p className="ml-10 text-5xl">Budgeting Rule App</p>
      </Header>
      <main className={styles.main}>
        <Container>
          <ContainerForm>
            <FormInputSalary />
          </ContainerForm>
          <ContainerChart>
            <ChartComponent />
          </ContainerChart>
        </Container>
        <div>
          <button onClick={() => setIsModalOpen(true)}>Click Modal</button>
        </div>
      </main>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        style={{ width: 400, textAlign: "center" }}
      >
        <div className="w-full my-5">
          <Sliders />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
