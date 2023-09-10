import { useEffect, useState } from 'react';

const RedirectModal = ({ countdown }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (countdown !== null) {
      setIsVisible(true);
    }
  }, [countdown]);

  return (
    isVisible && (
      <div className='overlay2'>
        <div className='modal'>
          <div className='modal-content'>
            <p>Redirecting in {countdown} seconds...</p>
            {/* Add any additional content or styling you want */}
          </div>
        </div>
      </div>
    )
  );
};

export default RedirectModal;
