import Lightning from "@/assets/icons/Lightning.svg";
import Speed from "@/assets/icons/SpeedFilled.svg";
import Light from "@/assets/icons/LightbulbOutlined.svg";
import customTrigger from "@/assets/icons/custom-trigger.svg";
import usbC from "@/assets/icons/usb-c-port.svg";
import v2Image from "@/assets/images/device/meowpad/v2.webp";
import v2SEImage from "@/assets/images/device/meowpad/v2-se.webp";

const i18n = {
  titleKey: "page.device.v2.title",
  subtitleKey: "page.device.v2.subtitle",
  linkToMarketText: "page.device.v2.linkToMarket",
  linkTooltip: "page.device.v2.linkTooltip",
  btnOpenDialogText: "page.device.v2.btnOpenDialog",
  btnTooltip: "page.device.v2.btnTooltip",
  modalTitleKey: "page.device.v2.modalTitle",
}

export interface DeviceInfo {
  icons: { src: string; alt: string; labelKey: string }[];
  imageSrc: string;
  imageAlt: string;
  deviceModel: string;
  i18n: {
    titleKey: string;
    subtitleKey: string;
    linkToMarketText: string;
    linkTooltip: string;
    btnOpenDialogText: string;
    btnTooltip: string;
    modalTitleKey: string;
  }
}

export const devices: { [key: string]: DeviceInfo } = {
  meowpadV2: {
    icons: [
      { src: Lightning, alt: "Lightning", labelKey: "page.device.v2.benefits.0" },
      { src: Speed, alt: "Speed", labelKey: "page.device.v2.benefits.1" },
      { src: Light, alt: "Light", labelKey: "page.device.v2.benefits.2" },
      { src: customTrigger, alt: "Custom Trigger", labelKey: "page.device.v2.benefits.3" },
    ],
    imageSrc: v2Image,
    imageAlt: "Meowpad V2 Image",
    deviceModel: "meowpadV2",
    i18n
  },
  meowpadV2SE: {
    icons: [
      { src: usbC, alt: "USB-C", labelKey: "page.device.v2Se.benefits.0" },
      { src: Speed, alt: "Speed", labelKey: "page.device.v2Se.benefits.1" },
      { src: Light, alt: "Light", labelKey: "page.device.v2Se.benefits.2" },
      { src: customTrigger, alt: "Custom Trigger", labelKey: "page.device.v2Se.benefits.3" },
    ],
    imageSrc: v2SEImage,
    imageAlt: "Meowpad V2 SE Image",
    deviceModel: "meowpadV2SE",
    i18n
  },
};
