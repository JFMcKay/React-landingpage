import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Textloop from "react-text-loop";

//STYLED-COMPONENTS SECTION
const Section = styled.section`
  height: calc(100vh - 80px);
  align-items: center;
  background: #131313;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  flex-basis: 100vw;
  @media screen and (max-width: 768px) {
    height: calc(100vh - 80px);
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 4rem;
    line-height: 1.1;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: flex-end;
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
  width: 45vw;
  h1 {
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


//HERO START!! MOTION VARIABLES ARE REQUIRED IN THE FUNCTION

const Hero = () => {
  //Motion Variables
  const fadeLeft = {
    hidden: { opacity: 0, rotate: -220, x: -500 },
    visible: { opacity: 1, rotate: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, rotate: 1, x: 0 },
  };

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
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.9,
              backgroundColor: "#999999",
              border: "solid 2px #999999",
            }}
          >
            Contact Me
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <motion.div
          // onTap={() => skillSetText()}
          >
            <motion.h1
                initial={{rotate: -45}}
                animate={{rotate: 45}}
                transition={{type: "spring",duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <Textloop interval={2000}>
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>SASS</span>
                <span>JQUERY</span>
              </Textloop>
            </motion.h1>
          </motion.div>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
