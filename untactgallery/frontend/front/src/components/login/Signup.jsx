import React from 'react';
import styled, { keyframes, createGlobalStyle } from "styled-components";
import {Link, useHistory} from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  text-align: center;
  max-width: 100%;
  padding: 10px 13px;
  background: #f9f9fa;
  color: black;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button3 = styled.button`
  max-width: 100%;
  padding: 10px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: 0.2s ease-out forwards;
  }
`;

const Button4 = styled(Link)`
  text-align: center;
  text-decoration: none;
  max-width: 100%;
  padding: 10px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #50BCDF;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(0, 103, 163);
    animation: 0.2s ease-out forwards;
  }
`;

const handleClick = function(e) {
    const name = document.querySelector('[name=name]').value;
    const email = document.querySelector('[name=email]').value;
    const password = document.querySelector('[name=password]').value;
    const habitation = document.querySelector('[name=habitation]').value;
    const tel = document.querySelector('[name=tel]').value;
    const sex = document.querySelector('[name=sex]').value;

    const ajax = fetch(`http://localhost:10002/Signup?name=${name}&email=${email}&password=${password}&habitation=${habitation}&tel=${tel}&sex=${sex}`)
    ajax.then((res) => {
        return res.json();
    }).then((result) => {
        alert(result.msg);
    });
    e.preventDefault();
    e.stopPropagation();
}

const LoginPage = () => {
    const history = useHistory();
    return (
        <Wrapper>
            <Form>
                <Input
                    placeholder="??????"
                    type="name"
                    name="name" // ??????????????????
                />
                <Input
                    placeholder="?????????"
                    type="email"
                    name="email"  // ??????????????????
                />
                <Input
                    placeholder="????????????"
                    type="password"
                    name="password" // ??????????????????
                />
                <Input
                    placeholder="?????????"
                    type="habitation"
                    name="habitation" // ??????????????????
                />
                <Input
                    placeholder="????????????"
                    type="tel"
                    name="tel" // ??????????????????
                />
                <Input
                    placeholder="??????"
                    type="sex"
                    name="sex" // ??????????????????
                />
                <Button3 onClick={handleClick}> Sign Up </Button3>
                <Button4 to="login-detail"> Cancel </Button4>
            </Form>
        </Wrapper>
    );
};

export default LoginPage;