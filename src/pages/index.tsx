import { Button } from "antd";
import { SiteLayout } from "components";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
      <Button type="primary">Home</Button>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <SiteLayout title="Home">{page}</SiteLayout>;

export default Home;
