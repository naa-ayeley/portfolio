'use client';

import React, { useState, useEffect } from 'react';

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>

    </>
  );
}

export default ModalProvider;
