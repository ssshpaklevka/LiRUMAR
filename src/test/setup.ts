import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock fetch для тестов
globalThis.fetch = vi.fn();

// Mock window.confirm и window.alert
globalThis.confirm = vi.fn(() => true);
globalThis.alert = vi.fn();
