import { useSiteStore } from "@/store/site-state";
import axios from "axios";

const siteStore = useSiteStore();

const getMarkdown = async (device: string) => {
  let data = "";
  await axios
    .get(`/device/${siteStore.i18nLanguage}/${device}.md`)
    .then((res: { data: string }) => {
      data = res.data;
    })
    .catch(() => {
      axios
        .get(`/device/zh-Hans/${device}.md`)
        .then((res: { data: string }) => {
          data = res.data;
        });
    })
    return data;
};

export default getMarkdown;