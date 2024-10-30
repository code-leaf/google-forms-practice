import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconInputProps = {
  icon?: 'date' | 'time';
  value: string;
  faIcon: IconDefinition;
};

export const IconInput = ({ icon, value, faIcon }: IconInputProps) => {
  return (
    <div className='w-1/3 text-gray-400 border-b border-b-gray-300 p-1 flex-grow  bg-transparent focus:outline-none'>
      <input type='text' value={value} />
      <FontAwesomeIcon icon={faIcon} />
    </div>
  );
};
