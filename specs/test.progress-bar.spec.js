import ProgressBar from "@/components/ProgressBar";
import { mount } from "@vue/test-utils";

test("progress-bar", () => {
  const wrapper = mount(ProgressBar, {
    propsData: {
      value: 20,
    },
  });
  expect(wrapper.text()).toContain("20%");
});