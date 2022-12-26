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
    }
  }
`;
