import { FirstComponents } from './FirstComponents';
import { SecondComponents } from './SecondComponents';

// main entry point
export const Example = () => {
  return (
    <div className='container'>
      <h2>example</h2>
      <FirstComponents />
      <SecondComponents />
    </div>
  );
};
