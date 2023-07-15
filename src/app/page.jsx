import SectionHome from "./components/SectionHome";
import SectionFeatures from "./components/SectionFeatures";
import SectionAbaoutUs from "./components/SectionAboutUs";
import SectionFooter from "./components/SectionFooter";

export default function RootPage() {
  return (
    <>
      <SectionHome />
      <SectionFeatures />
      <SectionAbaoutUs/>
      {/* <SectionFooter/> */}
    </>
  )
}