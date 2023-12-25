import { useEffect, useState } from 'react';

/**
 *
 * @param errorResolver callback error resolver
 * @returns companie longitude and latitude
 */

export const useCoordinates = (errorResolver?: () => void) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 10000
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        error.message === 'User denied Geolocation' && errorResolver?.();
      },
      options
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  return { latitude, longitude };
};
