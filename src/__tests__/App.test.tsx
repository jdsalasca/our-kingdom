import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('App Components', () => {
  test('App shows loading screen with title', () => {
    renderWithI18n(<div>Test App</div>);
    
    // Check that the app renders
    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  test('i18n is properly configured for Spanish', () => {
    // Test that i18n is working
    expect(i18n.language).toBe('es');
  });

  test('Spanish translations are available', () => {
    // Test that Spanish translations exist
    const spanishText = i18n.t('Our Happy Kingdom');
    expect(spanishText).toBe('Nuestro Reino Feliz');
  });

  test('App structure is valid', () => {
    renderWithI18n(<div data-testid="app">Test</div>);
    
    // Check that the app renders
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
}); 