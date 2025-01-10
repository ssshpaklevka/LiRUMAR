import type { FC } from 'react';
import React from 'react';

import Container from '@/src/shared/ui/containers/Container';

import HandMade from './HandMade';
import AttentionDetail from './AttentionDetail';
import YourStatus from './YourStatus';

const Uniqueness: FC = () => {
  return (
    <Container className="flex flex-col gap-[120px]">
      <HandMade />
      <AttentionDetail />
      <YourStatus />
    </Container>
  );
};

export default Uniqueness;
