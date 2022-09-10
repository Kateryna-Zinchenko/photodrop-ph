import styled from "styled-components";

export const OpenedImageWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(124, 124, 124, 0.3);
  z-index: 3;
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(0,0,0,.85);
`;

export const OpenedImageInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  max-width: 320px;
  max-height: 320px;
  
   @media (min-width: 768px) {
     max-width: 400px;
     max-height: 400px;
   }
   @media (min-width: 1024px) {
     max-width: 600px;
     max-height: 600px;
   }
`;

export const OpenedImage = styled.img`
  max-width: 320px;
  max-height: 320px;
  border-radius: 20px;
  object-fit: contain;

  @media (min-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media (min-width: 1024px) {
    max-width: 600px;
    max-height: 600px;
  }
`;

export const SearchWrapper = styled.div<{ isOpenSearch:boolean }>`
  display: ${({isOpenSearch}) => isOpenSearch ? 'block' : 'none'};
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 8px;
  z-index: 1;
  overflow: hidden;
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const CLoseButton2 = styled.button`
  width: 16px;
  height: 16px;
  border: 1px solid #000;
  //position: absolute;
  top: 6px;
  right: 6px;
`;

export const Header = styled.div`
  width: 300px;
  padding: 20px 15px 18px 15px;
  border-bottom: 1px solid #F1F0EC;
  position: fixed;
  background: #fff;
  border-radius: 8px 8px 0 0;
`;

export const SearchInput = styled.input`
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  outline: none;
  padding: 0 13px;
  width: 100%;
  height: 40px;
  font-family: 'Futura PT Light',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #262626;
  
  &::placeholder {
    font-weight: 400;
  }
`;

export const List = styled.ul`
  width: 100%;
  margin: 81px 0 0;
  padding: 12px 15px 0 15px;
`;

export const Li = styled.li`
  font-family: 'Futura PT Light',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #262626;
  padding: 8px 0;
  cursor: default;
  
  &:first-child {
    padding: 0 0 8px 0;
  }
`;

export const Hover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: red;
  z-index: 124;
  &:hover {
    
  }
`;

export const LogoWrapper = styled.div`
  border-bottom: 1px solid #F1F0EC;
  padding: 20px 0 18px;
  position: relative;
`;

export const ArrowBack = styled.div`
  background: url("/assets/icons/arrow-right.png") no-repeat;
  background-size: contain;
  width: 10px;
  height: 20px;
  position: absolute;
  left: 15px;
  transform: rotate(180deg);
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 125px;
  height: 16px;
  cursor: pointer;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: block;
  width: 345px;
  height: 50px;
  background: #3300CC;
  border: none;
  border-radius: 50px;
  margin: 0;
  padding: 14px 0;
  font-family: 'Futura PT Medium', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 2;
`;

export const LabelText = styled.div`
    
`;

export const Input = styled.input`
  display: none;
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  flex: 1 1 30%;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  //overflow: hidden;
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 33.33vw;
  object-fit: cover;
  max-width: 33.33%;
  flex: 0 1 33.33333%;
  background: #d3d3d3;
  width: 100%;
`;

export const Img = styled.img`
  height: 33.33vw;
  object-fit: cover;
  width: 100%;
  
  &:hover {
    background: #000;
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 2px;
  right: 2px;
  background: #FFF;
  border-radius: 50%;
  cursor: pointer;
`;

export const CloseWrapper1 = styled(CloseWrapper)`
  background: none;
  width: 28px;
  height: 28px;
  top: 16px;
  right: 16px;
`;

export const CloseButton = styled.div`
  display: flex;
  position: relative;
  height: 2px;
  width: 12px;
  background: #5C5C5C;
  border-radius: 100px;
`;

export const CloseButton1 = styled.div`
  display: flex;
  position: relative;
  border-radius: 100px;
  transform: rotate(45deg);

  &:before {
    position: absolute;
    width: 3px;
    height: 28px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #fff;
    margin: 0;
    border-radius: 100px;
  }

  &:after {
    position: absolute;
    width: 28px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #fff;
    margin: 0;
    border-radius: 100px;
  }
`;