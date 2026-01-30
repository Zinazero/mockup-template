type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export const Input = ({ type, name, placeholder = '', required = false }: InputProps) => (
  <input type={type} name={name} placeholder={placeholder} required={required} />
);
