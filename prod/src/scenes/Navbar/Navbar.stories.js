import { I18nextProvider } from "react-i18next";
import NavbarComponent from "./Navbar";
import i18n from "../../i18n";

const Stories = {
  title: "Utilities/Navbar",
  component: NavbarComponent,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};

export default Stories;

const Template = ({ ...args }) => <NavbarComponent {...args} />;
export const Navbar = Template.bind({});
