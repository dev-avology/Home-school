import styled from "styled-components";
import BG from "../../../assets/banner-img.png";

export const BannerWrapper = styled.section`
    overflow: hidden;
    position: relative;
    background:url(${BG});
    background-size:cover;
    width:100%;
    height:auto;
    .overlay {
        height: 100%;
        padding: 60px 0 0 0;
    }
    .banner_inner{
        text-align:center;
        padding-top:180px;
    }
    .toggle_inner{
        display:flex;
        text-align:center;
        justify-content:center;
    }
    .vote_col{
        width:33%;
    }
    .vote_col p:nth-child(2) {
        min-height: 50px;
    }
    .vote_col .JoySwitch-track {
        background-color: transparent;
        border: 1px solid #fff;
    }
    .vote_col .JoySwitch-track.Joy-checked {
        background-color: transparent;
        border: 1px solid #ffc107;
    }
    
    .JoyTypography-inherit.css-1al052p-JoyTypography-root {
        display: none;
    }
    .JoySwitch-track .JoySwitch-thumb {
        background:radial-gradient(60.53% 60.53% at 34.21% 31.58%, #DFE0E3 0%, #BBBDC0 63.02%);
        box-shadow: none;
    }
    .JoySwitch-track.Joy-checked .JoySwitch-thumb.Joy-checked {
        background: radial-gradient(54.35% 65.38% at 38.46% 30.77%, #FFE8A4 0%, #FFC107 79.69%);
        box-shadow: none;
    }
    .vote_col input.JoySwitch-input {
        left: 0;
    }
    .vote_col .JoySwitch-track.Joy-checked > span:first-child {
        color: #ffc107;
        text-transform:uppercase;
    }
  }
`;
