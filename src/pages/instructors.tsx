import { Button } from "antd";
import { SiteLayout } from "components";
import { ReactElement } from "react";

const Instructors = () => {
  return (
    <>
      <Button type="primary">Instructors</Button>
    </>
  );
};

Instructors.getLayout = (page: ReactElement) => (
  <SiteLayout title="Instructors" theme="cycling">
    {page}
  </SiteLayout>
);

export default Instructors;
