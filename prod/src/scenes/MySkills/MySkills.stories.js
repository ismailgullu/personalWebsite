import { I18nextProvider } from "react-i18next";
import MySkillsComponent from "./MySkills";
import i18n from "../../i18n";

const Stories = {
  title: "Pages/MySkills",
  component: MySkillsComponent,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};

export default Stories;

const Template = ({ ...args }) => <MySkillsComponent {...args} />;
export const MySkills = Template.bind({});
