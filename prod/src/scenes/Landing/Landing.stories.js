import { I18nextProvider } from "react-i18next";
import LandingComponent from "./Landing";
import i18n from "../../i18n";

const Stories = {
  title: "Pages/Landing",
  component: LandingComponent,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};

export default Stories;

const Template = ({ ...args }) => <LandingComponent {...args} />;
export const Landing = Template.bind({});
