import { Header, Footer } from "../../components";
import { BackButton, Paragraph, SecHeading, SubHeading, Div, Img } from "../../components";
import { Container, Row, Col } from "react-grid-system";
import { MainWrapper } from "./style";
import  Image from "../../assets/postimg.png";
export const CommunityPage = () => {
    return (
      <>
        <Header />
        <BackButton link="/" text="< Go back" fontsize="16" />
        <MainWrapper>
            <Container>
                <Row>
                    <Col xl={12} lg={12} >
                        <Div className="top_content">
                            <SubHeading color="#003580" fontSize="20" className="mb-0 mt-40" >BUILDING HOMESCHOOL COMMUNITIES / RESEARCH HIGHLIGHT</SubHeading>
                            <SecHeading color="#101729" textAlign="left" className="mt-0 lh-45 fs-40">The Homeschool Community Project</SecHeading>
                            <Paragraph color="#455467" className="fs-20">Utah’s Young Families to Usher in a New Way Forward in Education</Paragraph>
                        </Div>
                        <Row className="project_info" justify="between">
                            <Col lg={6} xs={7}>
                                <Paragraph className="fs-16 lh-25 mb-10 mt-40 fw-400"color="#101729">Lisa R English </Paragraph>
                                <Paragraph className="fs-16 lh-25 mb-10 mt-40 fw-400 ml-20"color="#848484">December 5, 2022</Paragraph>
                            </Col>
                            <Col lg={6} xs={5}>
                                <Paragraph className="fs-16 lh-25 mb-10 mt-40 fw-400"color="#101729" textAlign="right"> Reading Time: 7 minutes</Paragraph>
                            </Col>
                            <hr/>
                        </Row>
                        <Div className="middle_content pv-50">
                            <Img className="mb-50" src={Image} />
                            <Paragraph className="fs-20 graycolor lh-25 mb-20 fw-500">The question I get asked the most is, "Do I have to sell my home and move into a homeschool community so that I can finally feel confident homeschooling?" </Paragraph>
                            <Paragraph className="fs-20 graycolor lh-25 mb-20 fw-500">The initial concept model would be ideal if it were established in a community that supports homeschooling and complies with zoning regulations. The good news is that a homeschool community would benefit the neighborhoods within the boundary established. However, in reality, a homeschooler does not have to live in a community that encourages homeschooling. They would have the ability to develop their own resources within their current neighborhood.</Paragraph>
                            <SubHeading className="fs-30 fw-500 black uppercase mv-50">A HYBRID APPROACH</SubHeading>
                            <Paragraph className="fs-20 graycolor lh-25 mb-20  fw-500">More families should feel empowered to continue homeschooling through high school as a result of the growth of homeschool communities. Parents torn to enroll their children in a public, private, or charter school, would be able to acquire and use school resources on their own terms thanks to an intermediary platform called Willoby (formerly Homeschool Neighbor). Homeowners would be permitted to rent out their residences to homeschooling groups in a manner similar to Airbnb bookings, open classes, and using school amenities in the clubhouse.</Paragraph>
                            <Paragraph className="fs-20 graycolor lh-25 mb-50 pb-50 fw-500">In addition to a clubhouse with an auditorium, a library, and a science lab, there would also be teacher patrons on-site to assist families. Other features may include playgrounds, baseball and soccer fields, and benches where various groups may gather or relax while reading a book beneath a tree.</Paragraph>
                            <SubHeading className="fs-30 fw-500 black uppercase mt-50">THE PAY-OFF</SubHeading>
                            <Paragraph className="fs-20 graycolor lh-25 mb-20 fw-500">Currently, a typical homeschool group that is too large to meet in a single home will meet at a church or public building and share the expense with the other members of the group if they engage a hired instructor. As a result of multiple groups contributing financially in a homeschool community, families can benefit from chances like hiring teachers at a lower cost.</Paragraph>
                            <SubHeading className="fs-30 fw-500 black uppercase mt-50">No More Bureaucracy</SubHeading>
                            <Paragraph className="fs-20 graycolor lh-25 mb-20 fw-500">That’s sending a powerful message to families that there are now options available rather than being compelled to enroll their children in the public school system, which many people believe to be overrun with politics. If we can open these channels, future students may have access to catalogs of specialized courses than they would with just one high school catalog.</Paragraph>
                            <Paragraph className="fs-20 graycolor lh-25 mb-20 fw-500">Classes are one advantage. Additionally, there will be several extracurricular areas from which families can select. In essence, on-demand options would enable parents to build customized curriculum for their students. Field trip packages, educational opportunities, sports leagues, apprenticeships, and parent workshops are examples of this. By spending the majority of the week with their parents at home and the remaining time participating in social activities, exactly like they would in a public high school, students will be able to build more enduring and meaningful relationships.</Paragraph>
                            <Paragraph className="fs-20 graycolor lh-25 mb-20 fw-500">The challenge is not whether a home builder can build and sell homes in a homeschool community. Thanks to online marketplaces like Airbnb and Uber, that tested model is already in use in the vacation resort industry. Communities for homeschoolers could also become increasingly common. The challenge is there could be a finite number of situations. For example, how many parents will actually be willing to teach a class elective out of their home? Imagining that there will be a variety of esoteric options from which to choose does not mean they would actually be available.</Paragraph>
                            <Paragraph className="fs-20 graycolor lh-25 mb-20 fw-500">This is what is so tricky. The world seems limitless, but these physical things can actually be fairly limited. People might say they want to discover new classes, but in practice, will families stick with a small selection of popular subjects? Only time will tell. We're undoubtedly going into this with our eyes wide open and just seeing how it goes.</Paragraph>
                            <Paragraph className="fs-20 graycolor lh-25 mb-20 fw-500">For those who wish politics would stay out of our schools, something like this might be appealing just for the very fact that these communities are regular homes purchased by homeowners and far from the state schools where taxpayers are being gouged to build and repair more of them no one will ever actually own.</Paragraph>
                            <SubHeading className="fs-30 fw-500 black uppercase mt-50">About the Author</SubHeading>
                            <Paragraph className="fs-20 graycolor lh-25 fw-500">Lisa English is the organization's creator.</Paragraph>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </MainWrapper>
        <Footer/>
      </>
    );
  };
  