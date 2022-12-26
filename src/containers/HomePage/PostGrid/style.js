import styled from "styled-components";


export const PostGridWrapper = styled.section`
    overflow: hidden;
    position: relative;
    padding:100px 0;
    h2{
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #6D767E;
        text-align:center;
        text-transform: capitalize;
        margin-bottom: 60px;
    }
    .post_col_1, .post_col_3 {
        max-width: 30% !important;
    }
    .post_col_2 {
        max-width: 40% !important;
        flex: 0 0 40% !important;
    }
    @media screen and (max-width:991px){
        .post_col_1, .post_col_2, .post_col_3{
            max-width: 100% !important;
            flex:0 0 100% !important;
            margin-bottom:40px;
        }
    }
`;
