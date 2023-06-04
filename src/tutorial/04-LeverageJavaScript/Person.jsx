import avatar from '../../assets/default-avatar.svg';
export function Person({ name, nickName, images }) {
  //   const image = images[0].small.url;
  //   const img = images && images[0] && images[0].small && images[0].small.url;
  //// ?. 옵셔널, null아니면 다 괜찮은거임
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>닉네임 : {nickName}</p>
    </div>
  );
}
