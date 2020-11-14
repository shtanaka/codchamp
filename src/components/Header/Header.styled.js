import styled from "styled-components"
import {
  sizes,
  colors,
  devices,
  pagePadding,
} from "shared/styleguide"

export default styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.black};
  
  padding: ${pagePadding.mobile};
  @media ${devices.tablet} {
    padding: ${pagePadding.tablet};
  }
  @media ${devices.desktop} {
    padding: ${pagePadding.desktop};
  }

  .logo {
    color: white;
    
    font-size: ${sizes.S};
    @media ${devices.tablet} {
      font-size: ${sizes.M};
    }
    @media ${devices.desktop} {
      font-size: ${sizes.M};
    }
  }
`