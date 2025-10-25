interface IRegisterLayout {
  children: React.JSX.Element;
}

export default function RegisterLayout({ children }: IRegisterLayout) {
  return <div>{children}</div>;
}
