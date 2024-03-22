import { DashboardBoxComponent } from "@/components/dashBoardBox";

type Props = {};

export const DashboardRow3 = (_props: Props) => {
  return (
    <>
      <DashboardBoxComponent gridArea="h"></DashboardBoxComponent>
      <DashboardBoxComponent gridArea="g"></DashboardBoxComponent>
      <DashboardBoxComponent gridArea="i"></DashboardBoxComponent>
      <DashboardBoxComponent gridArea="j"></DashboardBoxComponent>
    </>
  );
};
