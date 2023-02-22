function Button({ 
  href, 
  type, 
  children, 
  fullWidth,
  onClick,
}) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      className={fullWidth ? 'button button--fullwidth' : 'button'}
      type={type}
      href={href}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}

export default Button;
