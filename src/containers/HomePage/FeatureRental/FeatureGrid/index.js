import React from "react";
import { FeatureGridWrap } from "./style";
import { Button } from "../../../../components";
import {LocationOn} from '@mui/icons-material';

export const FeatureGrid = ({data}) => {
    console.log(data);
  return (
    <FeatureGridWrap className="feature_grid_col">
        <div className="feature_img">
            {data?.img ? (
                <img src={data?.img} alt="featureImage"/>
            ) : null}
            <p className="feature_img_txt">
                {data?.img_txt ? (
                    <h3>{data?.img_txt}</h3>
                ) : null} 
            </p>
        </div>
        <div className="feature_txt">
            <div className="title">
                {data?.westlake ? (
                    <h3>{data?.westlake}</h3>
                ) : null}    
            </div>
            <div className="feature_info">
                 <div>
                    {data?.Icon1 ? (
                        <img src={data?.Icon1} />
                    ) : null} 
                 </div>
                 <div>
                    {data?.classes ? (
                        <img src={data?.classes} />
                    ) : null} 
                 </div>
            </div>
        </div>
        
    </FeatureGridWrap>
  );
};
