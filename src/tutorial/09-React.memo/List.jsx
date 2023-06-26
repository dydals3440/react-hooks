import { memo } from 'react';

function List({ people }) {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />;
      })}
    </div>
  );
}

export default memo(List);
