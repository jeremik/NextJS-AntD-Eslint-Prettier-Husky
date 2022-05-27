import { Button } from "antd";
import { SiteLayout } from "components";
import { ReactElement } from "react";

const Boxing = () => {
  return (
    <>
      <Button type="primary">Boxing</Button>
    </>
  );
};

Boxing.getLayout = (page: ReactElement) => (
  <SiteLayout title="Boxing" theme="boxing">
    {page}
  </SiteLayout>
);

export default Boxing;
