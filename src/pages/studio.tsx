import { Button } from "antd";
import { SiteLayout } from "components";
import { ReactElement } from "react";

const Studio = () => {
  return (
    <>
      <Button type="primary">Studio</Button>
    </>
  );
};

Studio.getLayout = (page: ReactElement) => (
  <SiteLayout title="Studio" theme="cycling">
    {page}
  </SiteLayout>
);

export default Studio;
