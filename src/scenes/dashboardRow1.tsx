import { DashboardBoxComponent } from "@/components/dashBoardBox";
import { useGetKpisQuery } from "@/store/api";

type Props = {};

export const DashboardRow1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBoxComponent gridArea="a"></DashboardBoxComponent>
      <DashboardBoxComponent gridArea="b"></DashboardBoxComponent>
      <DashboardBoxComponent gridArea="c"></DashboardBoxComponent>
    </>
  );
};
