import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

export const MultipleReturnFechDataReal = () => {
  const [isLaoding, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);
        // user의 정보를 전달한 후에, catch문 끝나고 loading을 끝나는 처리를 해줘야, 우리가 로딩화면이 아닌, FetchData를 받은 화면을 볼 수 있음.ㄴ
        setUser(user);
      } catch (err) {
        // 에러 발생시 true로 변경
        setIsError(true);
        console.log(err);
      } // catch문 끝난 후, 로딩을 반대로 해주어야함
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  if (isLaoding) {
    return <h2>로딩 중입니다</h2>;
  }
  if (isError) {
    return <h2>에러가 발생했습니다.</h2>;
  }
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>{user.company}에서 근무중...</h4>
      <p>{user.bio}</p>
    </div>
  );
};
