import BrandLogo from '../../assets/images/logo.svg?react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  return (
    <header className='header'>
      <BrandLogo className='logo' />
      <ThemeSwitcher />
    </header>
  );
}
