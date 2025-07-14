import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import LanguageSwitcher from '../components/LanguageSwitcher';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('App Components', () => {
  test('LanguageSwitcher renders correctly', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  test('LanguageSwitcher has proper styling', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    const enButton = screen.getByText('EN');
    const esButton = screen.getByText('ES');
    
    expect(enButton).toHaveClass('language-button');
    expect(esButton).toHaveClass('language-button');
  });

  test('LanguageSwitcher shows active state', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    const enButton = screen.getByText('EN');
    expect(enButton).toHaveClass('active');
  });

  test('LanguageSwitcher has accessibility attributes', () => {
    renderWithI18n(<LanguageSwitcher />);
    
    expect(screen.getByLabelText('Switch to English')).toBeInTheDocument();
    expect(screen.getByLabelText('Cambiar a Español')).toBeInTheDocument();
  });
}); 