import Button from "./PrimaryButton";

export default {
  title: "Components/Buttons",
  component: Button,
}

const Template = (args) => ({ Component: Button, props: args })

export const PrimaryButton = Template.bind();


PrimaryButton.args = {
  handleClick: () => { console.log("clicked") },
  label: "텍스트"
}