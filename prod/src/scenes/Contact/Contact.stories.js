import { I18nextProvider } from "react-i18next";
import ContactComponent from "./Contact";
import i18n from "../../i18n";

const Stories = {
  title: "Pages/Contact",
  component: ContactComponent,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};

export default Stories;

const Template = ({ ...args }) => <ContactComponent {...args} />;
export const Contact = Template.bind({});
