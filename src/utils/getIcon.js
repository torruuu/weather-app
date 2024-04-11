import { useIconsStore } from '@/stores/icons';

export async function getIcon(code) {
    const iconStore = useIconsStore();
    const src = iconStore.getSrc(code);
    const description = iconStore.getDesc(code);
    return { src, description }
}