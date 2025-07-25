/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DonationDetailPage from '../DonationDetail';

// Mock API fetching hook
jest.mock('../hooks/useFetchProgramDetail', () => ({
  __esModule: true,
  default: () => ({
    status: 'success',
    error: null,
    program: {
      title: 'Mocked Program Title',
      image_url: '/example.jpg',
      collected_amount: 1000,
      target_amount: 2000,
      location: 'Jakarta',
      status: 'active',
      starts_at: '2025-07-01',
      ends_at: '2025-07-31',
      description: 'A short description',
      description_en: 'A short description',
      description_ar: 'A short description',
    },
  }),
}));


describe('DonationDetailPage (unit test)', () => {
  it('renders the mocked program title as heading', async () => {
    render(<DonationDetailPage />);

    const heading = await screen.findByRole('heading', {
      level: 1,
      name: /mocked program title/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders program location', async () => {
    render(<DonationDetailPage />);
    expect(await screen.findByText(/jakarta/i)).toBeInTheDocument();
  });
});
