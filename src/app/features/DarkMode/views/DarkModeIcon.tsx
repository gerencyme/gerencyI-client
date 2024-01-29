import { Icon } from '~/src/app/shared/components/Icon';
import { useTheme } from '~hooks/contexts/useTheme';
import { IoIosMoon, IoMdSunny } from 'react-icons/io';
import { darkModeIconTv } from '../DarkModeTV';
import { VariantProps } from 'tailwind-variants';

export function DarkModeIcon({ darkMode }: VariantProps<typeof darkModeIconTv>) {
  const { theme } = useTheme();

  const iconPosition: typeof darkMode = theme === 'dark' ? 'isDarkMode' : 'notDarkMode';
  const icon = theme === 'dark' ? IoIosMoon : IoMdSunny;

  return (
    <div className={darkModeIconTv({ darkMode: iconPosition })}>
      <Icon icon={icon} color="warning" className="cursor-pointer" />
    </div>
  );
}
