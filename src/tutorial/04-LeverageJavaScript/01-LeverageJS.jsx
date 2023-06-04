import { Person } from './Person';
import { people } from './data';

export const LeverageJS = () => {
  return (
    <div>
      {people.map((p) => (
        <Person key={p.name} {...p} />
      ))}
    </div>
  );
};
