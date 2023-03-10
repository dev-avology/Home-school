import { Header } from "../../components/header";
import { Banner } from "./Banner";
import { PostGrid } from "./PostGrid";
import { CommunityInfo } from "./CommunityInfo";
import { FeatureRental } from "./FeatureRental";
import {ClubHouse} from "./ClubHouse";
import { Footer } from "../../components";
import { Neighbour } from "./Neighbourhood";
export const HomePage = () => {
    return (
      <>
        <Header />
        <Banner />
        <PostGrid />
        <CommunityInfo />
        <FeatureRental />
        <ClubHouse />
        <Neighbour />
        <Footer/>
      </>
    );
  };
  