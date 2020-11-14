import styled from "styled-components"

import { devices, colors, sizes } from "shared/styleguide"

export default styled.div`
  color: white;

  .hero {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    height: 256px;
    @media ${devices.tablet} {
      height: 384px;
    }
    @media ${devices.desktop} {
      height: 512px;
    }

    .bg-img {
      width: 100%;
      filter: blur(8px);
      height: 100%;
      background-image: url(/war-crimes.jpg);
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center top;
      background-size: 512px;
      @media ${devices.tablet} {
        height: 384px;
        background-image: url(/war-crimes.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center top -128px;
        background-size: 1024px;
      }
      @media ${devices.desktop} {
        height: 512px;
        background-image: url(/war-crimes.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center top -256px;
        background-size: cover;
      }
    }
    
    .main-text-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: Goldman;
      
      text-align: center;
      padding: ${sizes.S} ${sizes.M};
      border-radius: ${sizes.S};
      background-color: rgba(${colors.darkGrey}, 0.5);
      h1 {
        font-weight: 500;
        color: ${colors.gold};
        
        font-size: ${sizes.XL};
        @media ${devices.tablet} {
          font-size: ${sizes.XXL};
        }
        @media ${devices.desktop} {
          font-size: ${sizes.XXL};
        }
      }
      h2 {
        font-weight: 400;
        font-size: ${sizes.M};
        @media ${devices.tablet} {
          font-size: ${sizes.L};
        }
        @media ${devices.desktop} {
          font-size: ${sizes.L};
        }
      }
    }
  }

  .content {
    h3 {
      font-family: Goldman;
      font-weight: 500;
      font-size: ${sizes.M};
      text-align: center;
      @media ${devices.tablet} {
        text-align: left;
        font-size: ${sizes.L};
      }
      @media ${devices.desktop} {
        text-align: left;
        font-size: ${sizes.L};
      }
    }
  }
`


  // backdrop-filter: contrast(4) blur(20px);