import { Header } from "../../components/header";
import { Banner } from "./Banner";
import { PostGrid } from "./PostGrid";
import { CommunityInfo } from "./CommunityInfo";
import { FeatureRental } from "./FeatureRental";
import {ClubHouse} from "./ClubHouse";
export const HomePage = () => {
    return (
      <>
        <Header />
        <Banner />
        <PostGrid />
        <CommunityInfo />
        <FeatureRental />
        <ClubHouse />
      </>
    );
  };
  