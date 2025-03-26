import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }: any) => css`
    flex: 1;
    background-color: ${({ theme }: any) => theme.colors.primary};

    justify-content: space-around;
  `}
`;

export const Header = styled.View`
  ${({ theme }: any) => css`
    /* width: 100%; */
    height: 30%;

    align-items: center;
    justify-content: center;

  `}
`;

export const CenterView = styled.View`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
  `}
`;

export const CardsView = styled.View`
  ${({ theme }: any) => css`
    width: 200px;
    height: 300px;
    background-color: ${({ theme }: any) => theme.colors.background};

    border-radius: 80px 80px 5px 5px;

    justify-content: flex-end;

    align-items: center;
  `}
`;

export const SearchView = styled.View`
  ${({ theme }: any) => css`
    align-items: center;

    padding: 0 10px 0 10px;
  `}
`;

export const ButtonSearch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  ${({ theme }: any) => css`
    width: 100%;
    height: 50px;

    background-color: ${theme.colors.otherPrimary};

    margin-top: 10px;

    border-radius: 5px;

    align-items: center;
    justify-content: center;
  `}
`;

export const TitleButton = styled.Text`
  ${({ theme }: any) => css`
    color: ${theme.colors.text};

    font-size: 25px;

    font-weight: bold;
  `}
`;

export const TextCard = styled.Text`
  ${({ theme }: any) => css`
    color: ${theme.colors.text};

    font-size: 25px;

    font-weight: bold;
  `}
`;