import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-black text-white">This is auth navbar</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
