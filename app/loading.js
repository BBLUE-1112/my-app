"use client"

import { useEffect, useState } from 'react';
import Loader from "./components/Loader"

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return <Loader />;
}