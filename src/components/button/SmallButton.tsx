import './SmallButton.css'

export default function SmallButton({
  type,
  value,
  className,
  onClick,
}: {
  type: string;
  value: string;
  className: string;
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <input type={type} value={value} className={className} onChange={onClick}/>
    </>
  );
}
