export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

export const isIOSDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const openMaps = (address: string): void => {
  if (!isMobileDevice()) return;
  
  const encodedAddress = encodeURIComponent(address);
  const isIOS = isIOSDevice();
  
  let mapUrl: string;
  if (isIOS) {
    mapUrl = `maps://maps.apple.com/?q=${encodedAddress}`;
  } else {
    mapUrl = `https://maps.google.com/?q=${encodedAddress}`;
  }
  
  const mapWindow = window.open(mapUrl, '_blank');
  
  setTimeout(() => {
    if (!mapWindow || mapWindow.closed) {
      window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
    }
  }, 1000);
};