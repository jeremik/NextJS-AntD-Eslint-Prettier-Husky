import { Button } from "antd";
import { SiteLayout } from "components";
import { ReactElement } from "react";

const Cycling = () => {
  return (
    <>
      <Button type="primary">Cycling</Button>
    </>
  );
};

Cycling.getLayout = (page: ReactElement) => (
  <SiteLayout title="Cycling" theme="cycling">
    {page}
  </SiteLayout>
);

export default Cycling;
