import '../styles/HeaderLink.css';

interface Props {
  className?: string;
  href: string;
  isActive?: boolean;
  children: JSX.Element | (JSX.Element | string)[];
  target?: string;
}

const HeaderLink = ({ className, href, isActive, children, target }: Props) => {
  const classes = `${className} ${isActive ? 'active' : ''}`;

  return (
    <a className={classes} href={href} target={target}>
      {children}
    </a>
  );
}

export default HeaderLink;
