import { DashboardBoxComponent } from "@/components/dashBoardBox";

type Props = {};

export const DashboardRow2 = (props: Props) => {
  return (
    <>
      <DashboardBoxComponent gridArea="d"></DashboardBoxComponent>
      <DashboardBoxComponent gridArea="e"></DashboardBoxComponent>
      <DashboardBoxComponent gridArea="f"></DashboardBoxComponent>
    </>
  );
};
