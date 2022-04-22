import { Grid } from "@mui/material";
import { HorizontalStepper } from "./stepper/Stepper";
import { ISteps } from "./interfaces";
import { MUICard } from "./card/Card";

const steps: ISteps[] = [
  { id: 1, title: "Basic Info", subTitle: "Add Basic Information" },
  { id: 2, title: "Address", subTitle: "Enter Address of Employee" },
  {
    id: 3,
    title: "Filing Data Attributes",
    subTitle: "Select tax filing settings",
  },
];

export const Main = () => {
  const stepsData: ISteps[] = steps.map((item) => {
    return { id: item.id, title: item.title, subTitle: item.subTitle };
  });

  return (
    <Grid container>
      <HorizontalStepper stepsData={stepsData} />
      <MUICard />
    </Grid>
  );
};
