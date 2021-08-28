import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Courier;
  }
  .fATxBR {
    background-color: transparent;
  }
.jARayQ {
display: none;
}
.blmMla {
background-color: #ffffff;
}
.obCWW svg {

    fill: rgb(189 17 17);
    
}
.izwwwB svg {

    fill: rgb(210 14 14);
    
}
.dlrOVJ {
background-color: transparent;
border-bottom-color: transparent; 
border-left-color: transparent;
border-right-color: transparent;
border-top-color: transparent;
}
.ivLgab, .ACFFk {
color: red;
fill: red;
}
.iGtzpP {
color: #ffffff;
}
.ernndx {
display: none;
}
.iahqga {
background-color: transparent;
border-bottom-color: transparent; 
border-left-color: transparent;
border-right-color: transparent;
border-top-color: transparent;
}
.jDnmwq, .iGtzpP {
color: #ffffff;
}
  .KKOai {
    display: none;
  }
  body {
    background-image: linear-gradient(35deg, purple, gold, blue, gold, purple);
  nones {
    background-image: linear-gradient(35deg, purple, gold, blue, gold, purple);
    background: linear-gradient(35deg, purple, gold, blue, gold, purple);
  }
  .kuDobx {
 background-color: gold;
 background-image: none;
  }
.eiRTmt {
background-color: red;
}
.llSJBl {
color: white;
}
.dRonwK {
color: white;
}
.dTawlu {
background-color: transparent;
}
.jFEWVt, .itaNLj, .KYHmT {
color: #b3b3b3;
}
.hMfOMz {
color: #000000;
}
  .dwqKIT {
 display: none;
}
.kUxtnz {
background-color: red;
color: #ffffff;
}
.knvZCf {
background-image: linear-gradient(45deg, gold, purple, blue, gold);
color: #ffffff;
}
  .fobcVZ {
 background: transparent;
  }
  .eUmtTA {
    background-color: #ffffff;
  }
  .imFMeb {
  background-color: transparent;
  }
  .LUmcf {
    color: #FFFFFF;
  }
  .kKnXie {
    color: #000000;
  }
  .ksnaJT {
    background-color: #b70c1f;
    color: #b3b3b3;
  }
  .tSBKF {
    display: none;
  }
  .hIkwok {
    background-color: transparent;
  }
  .gbIzQI {
    background-color: linear-gradient(55deg, red, blue);
    color: red;
  }
  a.sc-GvhzO bssNqU {
    background-image: url("https://i.ibb.co/t3V0hJL/1629736129850.png");
  }
  .jskajajajajajaajajafre {
    background-image: url("https://i.ibb.co/t3V0hJL/1629736129850.png");
  }
  .cLWmML {
    color: red;
  }
  .dlqLfN {
    background-color: red;
  }
  .WFckb {
    fill: red;
  }
  .iokwTE {
        background-color: #eeeaf400;
            border-radius: 16px;
                display: -webkit-inline-box;
                    display: -webkit-inline-flex;
                        display: -ms-inline-flexbox;
                            display: inline-flex;
                                border: 1px solid #d7caec00;
                                }
  }
  .eksRHR {
  border-color: transparent;
  color: red;
  }
  .JKEDj {
    background-color: transparent;
  }
  .MdleP, .cgMtet, .iwBuoH, .jPcoil {
    color: #FFFFFF;
  }
  .jfiVtQ {
    color: black;
  }
  sc-iiBnNu faPyQS token-amount-input::placeholder {
color: black;
  }
  .dvUMTZ {
    color: red;
  }
  .dwlfZz {
    background-color: red;
  }
  .lltITY, .kFooQR {
    color: red;
    border-color: transparent;
    background-color: transparent;
  }
  .ePVsVU, .bJFCMa {
    box-shadow: 0px 0px 0px 1px red, 0px 0px 0px 4px rgb(49 208 170 / 20%);
    background-color: transparent;
  }
  .bJFCMa:focus:not(:disabled) {
    box-shadow: 0px 0px 0px 1px red, 0px 0px 0px 4px rgb(49 208 170 / 20%);
  }
  .ePVsVU:focus:not(:disabled) {
    box-shadow: 0px 0px 0px 1px red, 0px 0px 0px 4px rgb(49 208 170 / 20%);
  }
  .hWRKzT, .dPIQsB, .hWRKzT, .leAbBL {
    color: white;
  }
  .cSiPfC {
    background-color: transparent;
  }
  .bssNqU .desktop-icon {
    display: none;
  }
  .bkuNTh {
    background-image: url('https://i.ibb.co/0tXY8LB/GOLDLOGO.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 40px 45px;
    height: 60px;
    background-color: transparent;
  }
  .dcRZAS {
    background: red;
  }
  div.pancakes {
    display: none;
    background: transparent;
  }
  .jGjMfK, .fjFJYx {
    background-color: gold;
  .dGkvIx, .hUyfFq {
    background-color: gold;
    color: black;
  }
  .kfJDrs {
    display: none;
  }
  .hMIuvo svg, .LtDiV {
    fill: #ba0f22;
  }
  .fngDZl {
    fill: white;
  }
  .bssNqU {
    display: none;
  }


    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
