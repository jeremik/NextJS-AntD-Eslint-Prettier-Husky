import { Button } from "antd";
import { SiteLayout } from "components";
import { ReactElement } from "react";

const Workouts = () => {
  return (
    <>
      <Button type="primary">Workouts</Button>
    </>
  );
};

Workouts.getLayout = (page: ReactElement) => (
  <SiteLayout title="Our Workouts" theme="online">
    {page}
  </SiteLayout>
);

export default Workouts;
