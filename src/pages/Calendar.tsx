import { useEffect } from 'react';

export function Calendar() {
  useEffect(() => {
    window.open('https://link.everydayworkflow.com/widget/booking/lD4WLH4Ne44kgT9ermdt', '_blank');
    window.location.href = '/';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Opening calendar in new tab...</p>
      </div>
    </div>
  );
}
