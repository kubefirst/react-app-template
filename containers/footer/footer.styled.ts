import styled from 'styled-components';

import { media } from '../../theme/media';

export const Container = styled.div`
  bottom: 0;
  display: flex;
  position: absolute;
  width: 100%;
`;

export const SocialIcons = styled.div`
  position: absolute;
  width: 100%;
  bottom: 40px;
  left: 50%;
  z-index: 1;
  width: auto;

  & > a > svg {
    color: white;
    cursor: pointer;
    margin: 5px;
  }

  ${media.lessThan('sm')`
    align-items: center;
    bottom: 10px;
    display: flex;
    justify-content: center;
    left: auto;
    position: relative;
    width: 100%;

    & > a > svg {
      color: black;
    }
  `}
`;
