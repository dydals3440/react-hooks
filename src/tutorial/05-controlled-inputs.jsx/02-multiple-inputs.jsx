import { useState } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트를 사용하여 스타일을 정의합니다.
const FormContainer = styled.div`
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-bottom: 10px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
`;

export const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <FormContainer>
      <Form className='form'>
        <h4>Multiple Inputs</h4>
        <FormRow>
          <Label htmlFor='name'>이름</Label>
          <Input
            type='text'
            className='form-input'
            id='name'
            value={user.name}
            onChange={handleChange}
            name='name'
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='email'>이메일</Label>
          <Input
            type='email'
            className='form-input'
            id='email'
            value={user.email}
            onChange={handleChange}
            name='email'
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='password'>비밀번호</Label>
          <Input
            type='password'
            className='form-input'
            id='password'
            value={user.password}
            onChange={handleChange}
            name='password'
          />
        </FormRow>
      </Form>
      <button onClick={handleSubmit}>Submit</button>
    </FormContainer>
  );
};
