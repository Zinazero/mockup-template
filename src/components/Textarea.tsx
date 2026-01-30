type TextareaProps = {
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
};

export const Textarea = ({ name, placeholder = '', rows = 4, required = true }: TextareaProps) => (
  <textarea name={name} placeholder={placeholder} rows={rows} required={required} />
);
