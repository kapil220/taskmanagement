import { Input, InputProps } from 'react-daisyui';

import { CopyToClipboardButton } from '@/components/shared';

interface InputWithCopyButtonProps extends InputProps {
  label: string;
  description?: string;
}

const InputWithCopyButton = (props: InputWithCopyButtonProps) => {
  const { label, value, description, ...rest } = props;

  const id = label.replace(/ /g, '');

  return (
    <div className="form-control w-full">
      <div className="flex justify-between items-center">
        <label className="label pl-0" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
        <CopyToClipboardButton value={value?.toString() || ''} />
      </div>
      <Input
        id={id}
        className="input input-bordered w-full text-sm"
        {...rest}
        value={value}
      />
      {description && (
        <label className="label">
          <span className="label-text-alt">{description}</span>
        </label>
      )}
    </div>
  );
};

export default InputWithCopyButton;
