import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Textloop from "react-text-loop";
import Modal from './Modal.js';
import Form from './Form/Form';

//STYLED-COMPONENTS SECTION
const Section = styled.section`
  color: #FDFBED;
  height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #141414 0%, #0a0a0a 100%);
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2em;
  max-width: 1000px;
  flex-basis: 100vw;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 350px;
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 4rem;
    line-height: 1.1;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    margin-bottom: 3em;
    h1 {
    font-size: 3rem;
    }
    p {
    font-size: 2.5rem;

    }
  }
`;

const Button = styled(motion.div)`
  color: #fff;
  align-self: flex-end;
  margin-top: 0.5em;
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  z-index: 1;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
  h1 {
    position: relative;
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    // required to prevent bouncing from animations
    height: 80px;
    justify-content: flex-start;
    align-items: center;
    h1 {
        font-size: 2.5rem;
        width: 100%;
        height: 20%;
    }
  }
`;
//

//HERO START!! MOTION VARIABLES ARE REQUIRED IN THE FUNCTION
  //Motion Variables
  const fadeLeft = {
    hidden: { opacity: 0, rotate: -220, x: -500 },
    visible: { opacity: 1, rotate: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, rotate: 1, x: 0 },
  };

  const fadeTop = {
    hidden: { opacity: 0, y: -500 },
    visible: { opacity: 1, y: 0 },
  };

class Hero extends Component {

  constructor(props) {
    super(props)

    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  render() {
    return (
        <Section>
          <Container>
            <ColumnLeft>
              <motion.h1
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", duration: 2, bounce: 0.6 }}
              >
                Jeremy
              </motion.h1>
              <motion.p
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", duration: 2, bounce: 0.6}}
              >
                McKay
              </motion.p>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <Form handleClose={this.hideModal}/>
              </Modal>
              <Button
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.9,
                  color: '#a0a0a0',
                  fontWeight: 'bold',
                  backgroundColor: "#FDFBED",
                  border: "solid 2px #FDFBED",
                }}
              onClick={this.showModal}>
                Contact Me
              </Button>
            </ColumnLeft>
            <ColumnRight>
              <motion.h2
                variants={fadeTop}
                initial="hidden"
                animate="visible"
                >I can help you with:</motion.h2>
              <div
              >
                
                <motion.h1
                    initial={{opacity: 0.5, y: 25}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  < Textloop interval={3000}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                    <span>SASS</span>
                    <span>JQUERY</span>
                  </Textloop>
                </motion.h1>
              </div>
            </ColumnRight>
          </Container>
        </Section>
      )
    }
}

export default Hero;
