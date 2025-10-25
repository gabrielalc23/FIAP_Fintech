interface IRegisterLayout {
  children: React.ReactNode;
}

export default function RegisterLayout({ children }: IRegisterLayout) {
  return <div>{children}</div>;
}
