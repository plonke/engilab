<script lang="ts" setup>
import videoMp4 from '~/assets/video/promo.mp4';
import videoWebm from '~/assets/video/promo.webm';
import { useMagicKeys } from '@vueuse/core'

const emit = defineEmits<{
    (e: 'init', play: () => void): void
}>();

const bgVideo = templateRef<HTMLVideoElement>('bgVideo');
const isDialogOpen = ref(false);
const { escape } = useMagicKeys();

function play() {
    bgVideo.value.currentTime = 0;
    bgVideo.value.play();
}

onMounted(() => {
    emit('init', play)
})

watch(escape, escape => {
    if (escape) {
        isDialogOpen.value = false
    }
});
</script>

<template>
    <div class="flex relative size-full px-5 cursor-pointer group" @click="isDialogOpen = true">
        <svg class="w-[32px] lg:w-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-90 group-hover:scale-125 transition-all"
            viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="-27.5" y="-27.9316" width="96.3069" height="101.863">
                <div xmlns="http://www.w3.org/1999/xhtml"
                    style="backdrop-filter:blur(14px);clip-path:url(#bgblur_0_776_2309_clip_path);height:100%;width:100%">
                </div>
            </foreignObject>
            <path data-figma-bg-blur-radius="28"
                d="M37.8856 17.8501L9.57874 0.927507C5.57944 -1.46338 0.5 1.41792 0.5 6.0774V23V39.9226C0.5 44.5821 5.57943 47.4634 9.57874 45.0725L37.8856 28.1499C41.7807 25.8213 41.7807 20.1787 37.8856 17.8501Z"
                fill="white" fill-opacity="0.5" />
            <defs>
                <clipPath id="bgblur_0_776_2309_clip_path" transform="translate(27.5 27.9316)">
                    <path
                        d="M37.8856 17.8501L9.57874 0.927507C5.57944 -1.46338 0.5 1.41792 0.5 6.0774V23V39.9226C0.5 44.5821 5.57943 47.4634 9.57874 45.0725L37.8856 28.1499C41.7807 25.8213 41.7807 20.1787 37.8856 17.8501Z" />
                </clipPath>
            </defs>
        </svg>

        <video ref="bgVideo" class="size-full object-cover object-center rounded-[20px]" autoplay playsinline muted
            loop>
            <source :src="videoMp4" type="video/mp4">
            <source :src="videoWebm" type="video/webm">
        </video>
    </div>

    <Teleport to="body">
        <div v-if="isDialogOpen" class="fixed inset-0 bg-black z-[100]">
            <div class="fixed top-[20px] right-[20px] hover:rotate-90 transition-all cursor-pointer active:scale-90 z-10 "
                @click="isDialogOpen = false">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5708 29.461L1.14935 2.03955" stroke="white" stroke-width="3" />
                    <path d="M1.14935 29.4614L28.5708 2.03998" stroke="white" stroke-width="3" />
                </svg>
            </div>

            <iframe src="https://kinescope.io/embed/r88JiV7k9dbtx1yDqYMgEB" title="Видео с производства Engilab."
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                frameborder="0" allowfullscreen style="width: 100%; height: 100%;"></iframe>
        </div>
    </Teleport>
</template>