import '@testing-library/jest-dom/extend-expect';

beforeAll(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();

  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
  }));
});
