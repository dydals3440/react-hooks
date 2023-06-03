import { useState } from 'react';

export const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  //// onClick = {toggleAlert}를 해서 하는 방법
  //   const toggleAlert = () => {
  //     if (showAlert) {
  //       setShowAlert(false);
  //       return;
  //     }
  //     setShowAlert(true);
  //   };
  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>;
};
