import DotGroupComponent from "./DotGroup";

const Stories = {
  title: "Utilities/DotGroup",
  component: DotGroupComponent,
};

export default Stories;

const Template = ({ ...args }) => <DotGroupComponent {...args} />;
export const DotGroup = Template.bind({});
