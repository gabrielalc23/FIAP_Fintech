interface ILoginLayout {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: ILoginLayout) {
  return <div>{children}</div>;
}
