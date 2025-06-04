import DropdownLanguageSwitcher from './dropdown';
import ListLanguageSwitcher from './list';

type NavLocalSwitchProps = {
  variant?: 'dropdown' | 'list';
};

export default function NavLocalSwitch({
  variant = 'dropdown',
}: NavLocalSwitchProps) {
  if (variant === 'list') return <ListLanguageSwitcher />;
  return <DropdownLanguageSwitcher />;
}
