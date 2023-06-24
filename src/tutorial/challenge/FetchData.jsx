import useFetchPerson from './useFetchPerson';

const url = 'https://api.github.com/users/QuincyLarson';

export default function FetchData() {
  const { isLoading, isError, user } = useFetchPerson(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: '100px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      ></img>
      {user && (
        <div>
          <h1>{name}</h1>
          <h4>works at {company}</h4>
          <p>{bio}</p>
        </div>
      )}
    </div>
  );
}
