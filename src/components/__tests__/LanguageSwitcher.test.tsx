import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import LanguageSwitcher from '../LanguageSwitcher';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    i18n.changeLanguage('en');
  });

  test('renders language buttons', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    expect(screen.getByLabelText('Switch to English')).toBeInTheDocument();
    expect(screen.getByLabelText('Cambiar a Español')).toBeInTheDocument();
  });

  test('shows active state for current language', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    const enButton = screen.getByLabelText('Switch to English');
    const esButton = screen.getByLabelText('Cambiar a Español');
    
    expect(enButton).toHaveClass('active');
    expect(esButton).toHaveClass('inactive');
  });

  test('buttons are clickable', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    const enButton = screen.getByLabelText('Switch to English');
    const esButton = screen.getByLabelText('Cambiar a Español');
    
    expect(enButton).not.toBeDisabled();
    expect(esButton).not.toBeDisabled();
  });

  test('has proper accessibility attributes', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    expect(screen.getByLabelText('Switch to English')).toBeInTheDocument();
    expect(screen.getByLabelText('Cambiar a Español')).toBeInTheDocument();
  });

  test('buttons have correct styling classes', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    const enButton = screen.getByLabelText('Switch to English');
    const esButton = screen.getByLabelText('Cambiar a Español');
    
    expect(enButton).toHaveClass('language-button');
    expect(esButton).toHaveClass('language-button');
  });
}); 