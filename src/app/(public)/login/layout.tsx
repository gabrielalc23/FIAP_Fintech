interface ILoginLayout {
  children: React.JSX.Element;
}

export default function LoginLayout({ children }: ILoginLayout) {
  return <div>{children}</div>;
}
