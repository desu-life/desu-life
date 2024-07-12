<script lang="tsx">
import { defineComponent, ref } from "vue";
import defaultbg from "@/assets/main/background.webp";
import axios from "axios";
export default defineComponent({
  name: "randombg",
  props: {
    viewType: {
      type: String,
      default: "h",
    },
  },

  setup(props) {
    const bg = ref("");
    const bg_preview = ref("");
    const bgload = ref(false);
    const bgpreviewload = ref(false);
    axios
      .get(
        `https://rdmimg.desu.life/utils/execute?type=json&viewType=${props.viewType}`
      )
      .then((res: { data: { url: string; url_preview: string } }) => {
        bg_preview.value = res.data.url_preview;
        bg.value = res.data.url;
      })
      .catch(() => {
        bgpreviewload.value = true;
        bg.value = defaultbg;
      });

    const onBGload = () => {
      setTimeout(() => {
        bgload.value = true;
      }, 100);
    };

    const onPreviewLoad = () => {
      setTimeout(() => {
        bgpreviewload.value = true;
      }, 100);
    };

    const onBGLoadFail = () => {
      if (bgpreviewload.value) {
        bg.value = defaultbg;
      }
    };

    return () => (
      <div>
        <div
          class={
            bgpreviewload.value
              ? "bg-base bg-default hide"
              : "bg-base bg-default"
          }
        />
        <img
          src={bg_preview.value}
          class={
            bgload.value ? "bg-base bg-preview hide" : "bg-base bg-preview"
          }
          alt=""
          onLoad={onPreviewLoad}
        />
        <img
          src={bg.value}
          alt=""
          class={!bgpreviewload.value ? "bg-base bg hide" : "bg-base bg"}
          onLoad={onBGload}
          onError={onBGLoadFail}
        />
      </div>
    );
  },
});
</script>

<style scoped lang="scss">
.bg-base {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bg {
  z-index: -3;
  filter: brightness(70%);
}
.bg-preview {
  z-index: -2;
  transition: opacity 1s ease 0s;
  opacity: 1;
  filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='$'%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0,0 1 0 0 0,0 0 1 0 0,0 0 0 9 0'/%3E%3CfeComposite in2='SourceGraphic' operator='in'/%3E%3C/filter%3E%3C/svg%3E#$");
}
.bg-default {
  z-index: -1;
  transition: opacity 1s ease;
  background-color: var(--vt-c-black);
  opacity: 1;
}
.hide {
  opacity: 0;
}
</style>
