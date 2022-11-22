import styled from 'styled-components';
import Image from 'next/legacy/image';

import { media } from '../../theme/media/index';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  height: 100%;
`;

export const Template = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 80px;
  height: calc(100% - 100px);
`;

export const Ray = styled(Image)`
  ${media.lessThan('md')`
    display: none;
  `}
`;
