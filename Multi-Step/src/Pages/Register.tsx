import { useState } from "react";
import styled from "styled-components";
import { BsCamera } from "react-icons/bs";
import pic from "../Assets/pix.jpg";

function Page1() {
  const mainData = JSON.parse(localStorage.getItem("data")!);
  const [show, setShow] = useState(0);
  const [name, setName] = useState(mainData?.name);
  const [email, setEmail] = useState(mainData?.email);

  return (
    <Main>
      <CircleContainer>
        <Circle c="white" bg="darkcyan">
          1
        </Circle>
        <Line />
        <Circle c="" bg="">
          2
        </Circle>
        <Line />
        <Circle c="" bg="">
          3
        </Circle>
      </CircleContainer>

      <Input
        placeholder="Input your name"
        value={name}
        onChange={(e: any) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="Input your email"
        value={email}
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
      />

      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(2));
            localStorage.setItem(
              "data",
              JSON.stringify({
                name,
                email,
                password: mainData?.password,
                image: mainData?.image,
              })
            );
            window.location.reload();
          }}
        >
          Next
        </Button>
      </ButtonHolder>
    </Main>
  );
}
function Page2() {
  const mainData = JSON.parse(localStorage.getItem("data")!);
  const [password, setPassword] = useState(mainData?.password);

  return (
    <Main>
      <CircleContainer>
        <Circle c="white" bg="darkcyan">
          1
        </Circle>
        <Line />
        <Circle c="white" bg="darkcyan">
          2
        </Circle>
        <Line />
        <Circle c="" bg="">
          3
        </Circle>
      </CircleContainer>

      <Input
        placeholder="Input your password"
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />
      {/* <Input placeholder="Input your email" /> */}

      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(1));
            window.location.reload();
          }}
        >
          Prev
        </Button>
        <Button
          bg="darkcyan"
          onClick={() => {
            localStorage.setItem(
              "data",
              JSON.stringify({
                password,
                name: mainData?.name,
                email: mainData?.email,
                image: mainData?.image,
              })
            );
            localStorage.setItem("page", JSON.stringify(3));
            window.location.reload();
          }}
        >
          Next
        </Button>
      </ButtonHolder>
    </Main>
  );
}
function Page3() {
  const mainData = JSON.parse(localStorage.getItem("data")!);
  const [image, setImage] = useState(mainData?.image ? mainData?.image : pic);
  const [show, setShow] = useState(0);

  const onHandleImage = (e: any) => {
    const file = e.target.files[0];
    const path = URL.createObjectURL(file);
    setImage(path);
  };

  return (
    <Main>
      <CircleContainer>
        <Circle c="white" bg="darkcyan">
          1
        </Circle>
        <Line />
        <Circle c="white" bg="darkcyan">
          2
        </Circle>
        <Line />
        <Circle c="white" bg="darkcyan">
          3
        </Circle>
      </CircleContainer>

      <Img src={image} />
      <Input2
        type="file"
        id="id"
        accept="img/jpg, img/png"
        onChange={onHandleImage}
      />

      <label htmlFor="id">
        <BsCamera />
      </label>

      {/* <Input placeholder="Input your email" /> */}

      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(2));
            window.location.reload();
          }}
        >
          Prev
        </Button>
        <Button
          bg="darkcyan"
          onClick={() => {
            localStorage.setItem(
              "data",
              JSON.stringify({
                name: mainData?.name,
                email: mainData?.email,
                password: mainData?.password,
                image,
              })
            );
            window.location.reload();
          }}
        >
          Submit
        </Button>
      </ButtonHolder>
    </Main>
  );
}

export const Register = () => {
  const x = JSON.parse(localStorage.getItem("page")!);

  return (
    <div>
      <Container>
        {x === 1 ? (
          <Page1 />
        ) : x === 2 ? (
          <Page2 />
        ) : x === 3 ? (
          <Page3 />
        ) : (
          <Page1 />
        )}
      </Container>
    </div>
  );
};

const Input2 = styled.input`
  display: none;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: blue;

  object-fit: cover;
`;

const Button = styled.div<{ bg?: string }>`
  width: 70px;
  height: 50px;
  background-color: ${({ bg }) => bg};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 20px;
`;

const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid darkcyan;
  padding-left: 20px;
  margin-bottom: 20px;
  outline: none;

  &::placeholder {
    font-family: Poppins;
  }
`;

const Line = styled.div`
  width: 50px;
  height: 3px;
  background-color: white;
  margin: 0 10px;
  background-color: darkcyan;
`;

const Circle = styled.div<{ bg: string; c: string }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg};
  border-radius: 50%;
  border: 1px solid darkcyan;

  color: ${({ c }) => c};

  font-size: 20px;
`;

const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 60px 0;
`;

const Main = styled.div`
  width: 600px;
  min-height: 400px;
  border: 4px solid darkcyan;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  flex-direction: column;

  label {
    font-size: 40px;
    margin: 20px 0;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
