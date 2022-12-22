import styled from "styled-components";

export const PostGridColWrap = styled.div`
    position: relative; 
    .post_grid_col img {
        width: 100%;
    }
    h3{
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #6D767E;
        text-align:center;
        margin-top:0;
    }
    .post_img img {
        width: 100%;
    }
    .post_img {
        position: relative;
        &:after {
            content: "";
            position: absolute;
            top: 18px;
            left: 50%;
            width: 90%;
            height: 100%;
            background: rgba(16, 23, 41, 0.4);
            border-radius: 20%;
            transform: translateX(-50%);
            filter: blur(21.5px);
            z-index: -1;
        }
        .post_grid_text {
            background: red;
            padding: 10px;
        }
        .img_txt {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            width: 100%;
            text-align: center;
        }
        .img_txt p {
            font-family: 'Times New Roman';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #CDCDCD;
        }
    }
    
    
`;
