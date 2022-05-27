import { Button } from "antd";
import { SiteLayout } from "components";
import { ReactElement } from "react";

const Rates = () => {
  return (
    <>
      <Button type="primary">Rates</Button>
    </>
  );
};

Rates.getLayout = (page: ReactElement) => (
  <SiteLayout title="Rates" theme="cycling">
    {page}
  </SiteLayout>
);

export default Rates;
