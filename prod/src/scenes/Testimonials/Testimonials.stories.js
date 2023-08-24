import { I18nextProvider } from "react-i18next";
import TestimonialsComponent from "./Testimonials";
import i18n from "../../i18n";

const Stories = {
  title: "Pages/Testimonials",
  component: TestimonialsComponent,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};

export default Stories;

const Template = ({ ...args }) => <TestimonialsComponent {...args} />;
export const Testimonials = Template.bind({});
