import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>this output from nested level layout</h1>
      {children}
    </div>
  );
}
