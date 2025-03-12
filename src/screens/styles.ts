import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }: any) => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
  `}
`;

export const Header = styled.View`
  ${({ theme }: any) => css`
    /* width: 100%; */
    height: 30%;

    align-items: center;
    justify-content: center;

    /* background-color: ${({ theme }) => theme.colors.secondary}; */
  `}
`;

export const CenterView = styled.View`
  ${({ theme }: any) => css`
    align-items: center;
  `}
`;

export const CardsView = styled.View`
  ${({ theme }: any) => css`
    width: 90%;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.background};

    border-radius: 5px;
  `}
`;

export const SearchView = styled.View`
  ${({ theme }: any) => css`
    
  `}
`;

// export const StyledText = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.regular};
//   font-size: 16px;
//   color: ${({ theme }) => theme.colors.text};
// `;

// export const StyledView = styled.View`
//   background-color: ${({ theme }) => theme.colors.background};
//   padding: ${({ theme }) => theme.spacing.medium}px;
// `;