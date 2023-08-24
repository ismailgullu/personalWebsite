import { I18nextProvider } from "react-i18next";
import FooterComponent from "./Footer";
import i18n from "../../i18n";

const Stories = {
  title: "Utilities/Footer",
  component: FooterComponent,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};

export default Stories;

const Template = ({ ...args }) => <FooterComponent {...args} />;
export const Footer = Template.bind({});
