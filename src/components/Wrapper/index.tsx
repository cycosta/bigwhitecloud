import "./_wrapper.scss";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => (
  <div className="wrapper">{children}</div>
);
