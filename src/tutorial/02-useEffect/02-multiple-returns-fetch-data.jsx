import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

export const MultipleReturnFechDataReal = () => {
  const [isLaoding, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      // fetch를 하면 4xx, 5xx 번호대 에러를 따로 분기해서 또 처리해주어야함 try부분에서
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
      }
      const user = await response.json();
      console.log(response);
      // user의 정보를 전달한 후에, catch문 끝나고 loading을 끝나는 처리를 해줘야, 우리가 로딩화면이 아닌, FetchData를 받은 화면을 볼 수 있음.ㄴ
      setUser(user);
    } catch (err) {
      // 에러 발생시 true로 변경
      setIsError(true);
      console.log(err);
    } // catch문 끝난 후, 로딩을 반대로 해주어야함
    setIsLoading(false);
  };

  // 여기서 디펜던시에, fetchData()를 넣으면, 리렌더링되면서, 다시 fetchUser함수가 실행되고
  useEffect(() => {
    fetchUser();
  }, []);
  if (isLaoding) {
    return <h2>로딩 중입니다</h2>;
  }
  if (isError) {
    return <h2>에러가 발생했습니다.</h2>;
  }
  // const [user, setUser] = null 아래에 두면 에러 발생 null이기 떄문에 구조 분해 할당을 받지 못함, multiple return이 있는 경우, 구조분해할당 할떄, 조건문 다음에 구조분해할당을 해야함, 안그러면 null상태로 초기화했기 때문에 에러가 발생됨
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>{company}에서 근무중...</h4>
      <p>{bio}</p>
    </div>
  );
};

// fetch는 4xx대, 5xx대 에러를 에러로 간주하지 않음 이것을 성공인 경우로 봄
