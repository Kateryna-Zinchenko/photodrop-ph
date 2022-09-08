import styled from "styled-components";

export const OpenedImageWrapper = styled.div<{ isOpen: boolean }>`
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

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: #000;
`;

export const OpenedImage = styled.div`
  z-index: 1;
  max-width: 30%;
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
  opacity: 1;
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
  //transform: rotate(45deg);

  //&:before {
  //  position: absolute;
  //  width: 2px;
  //  height: 20px;
  //  top: 50%;
  //  left: 50%;
  //  transform: translate(-50%, -50%);
  //  content: '';
  //  background: #5C5C5C;
  //  margin: 0;
  //  border-radius: 100px;
  //}
  //
  //&:after {
  //  position: absolute;
  //  width: 20px;
  //  height: 2px;
  //  top: 50%;
  //  left: 50%;
  //  transform: translate(-50%, -50%);
  //  content: '';
  //  background: #5C5C5C;
  //  margin: 0;
  //  border-radius: 100px;
  //}
`;

export const CloseButton1 = styled.div`
  display: flex;
  position: relative;
  border-radius: 100px;
  transform: rotate(45deg);

  &:before {
    position: absolute;
    width: 2px;
    height: 22px;
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
    width: 22px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #fff;
    margin: 0;
    border-radius: 100px;
  }
`;