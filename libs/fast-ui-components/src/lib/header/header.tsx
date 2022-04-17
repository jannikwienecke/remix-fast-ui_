/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className="bg-red-400 text-4xl p-4">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header;
