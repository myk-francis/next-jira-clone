import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <Image src="/logo.svg" alt="logo" width={100} height={50} />
      {children}
    </div>
  );
};

export default AuthLayout;
