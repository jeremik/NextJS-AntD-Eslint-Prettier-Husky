import { Button } from "antd";
import { SiteLayout } from "components";
import { ReactElement } from "react";

const Live = () => {
  return (
    <>
      <Button type="primary">Live</Button>
    </>
  );
};

Live.getLayout = (page: ReactElement) => (
  <SiteLayout title="Live" theme="online">
    {page}
  </SiteLayout>
);

export default Live;
