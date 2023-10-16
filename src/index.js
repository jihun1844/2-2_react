
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';



const Info = (props) => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(
    () => {
      console.log("렌더링 완료됨");
      console.log({ name, pwd });
      return (
        () => {
          console.log('뒷처리 한다')

        }
      )
    }
  )


  const changeName = (e) => {
    setName(e.target.value);
  }
  const changePwd = (e) => {
    setPwd(e.target.value);
  }

  const [user, setUser] = useState({ name: '', pwd: '' });

  const changeUser = (e) => {
    e.preventDefault()

    const data = {
      name,
      pwd
    }

    setUser(data)
    console.log(user)
  }

  return (
    <>
      <form onSubmit={changeUser}>
        <input value={name} onChange={changeName} />
        <input value={pwd} onChange={changePwd} />
        <hr />
        <div>
          <div><b>이름:</b>{name}</div>
        </div>
        <div>
          <div><b>패스워드:</b>{pwd}</div>
        </div>
        <button type="submit">등록</button>
      </form>
    </>
  )
};

const App = () => {
  const [visivle, setVisivle] = useState(false);
  return (
    <>
      <div onClick={() => {
        setVisivle(!visivle);
      }}>
        <button>
          {visivle?'숨기기':'숨기기'}
        </button>
      </div>
    </>
  )
}

export default Info;

