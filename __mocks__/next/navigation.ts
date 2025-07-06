export const useParams = () => ({ slug: 'program-abc' });

export const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  refresh: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
});

export const usePathname = () => '/mocked-path';

export const useSearchParams = () => ({
  get: (key: string) => `mocked-${key}`,
});
