"use client";

import { useState } from "react";

export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div onClick={toggle}>
        {children}
    </div>
    );
}
