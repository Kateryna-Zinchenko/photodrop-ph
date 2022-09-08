import styled from 'styled-components';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(124, 124, 124, 0.3);
  //backdrop-filter: blur(2px);
  z-index: 3;
`;

export const LogoWrapper = styled.div`
  border-bottom: 1px solid #F1F0EC;
  padding: 20px 0 18px;
  position: relative;
`;

export const Logo = styled.img`
  width: 125px;
  height: 16px;
  cursor: pointer;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  border-top: 1px solid #F1F0EC;
  padding: 20px 0 0;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
`;

export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50px;
  background: #3300CC;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 auto;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const AlbumsWrapper = styled.div`
  margin: 20px 0 0;
  padding: 0 15px;
`;

export const AlbumWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 0;
  padding: 15px 15px;
  border: 1px solid #CECCB5;
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  &:first-child {
    margin: 0;
  }
`;

export const Icon = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 8px 12px;
`;

export const AlbumInfo = styled.div`
  margin: 0 0 0 20px;
`;

export const AlbumName = styled.div`
  font-family: 'Futura PT Medium', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const AlbumLocation = styled(AlbumName)`

`;

export const ArrowRight = styled.div`
  background: url("/assets/icons/arrow-right.png") no-repeat;
  background-size: contain;
  width: 8px;
  height: 16px;
  position: absolute;
  right: 15px;
`;