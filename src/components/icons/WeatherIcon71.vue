<style scoped>
    @import url("./styles.css");
</style>

<template>
    <svg width="56" height="48" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 48" preserveAspectRatio="xMidYMid meet">
    <defs>
        <filter id="blur" x="-.24684" y="-.26897" width="1.4937" height="1.6759">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="4" result="offsetblur" />
        <feComponentTransfer>
            <feFuncA slope="0.05" type="linear" />
        </feComponentTransfer>
        <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
        </filter>
    </defs>
    <g transform="translate(16,-2)" filter="url(#blur)">
        <g class="am-weather-cloud-3">
        <path transform="translate(-20,-11)"
            d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
            fill="#57a0ee" stroke="#fff" stroke-linejoin="round" stroke-width="1.2" />
        </g>
        <g class="am-weather-snow-1">
        <g transform="translate(12,28)" fill="none" stroke="#57a0ee" stroke-linecap="round">
            <line transform="translate(0,9)" y1="-2.5" y2="2.5" stroke-width="1.2" />
            <line transform="rotate(45,-10.864,4.5)" y1="-2.5" y2="2.5" />
            <line transform="rotate(90,-4.5,4.5)" y1="-2.5" y2="2.5" />
            <line transform="rotate(135,-1.864,4.5)" y1="-2.5" y2="2.5" />
        </g>
        </g>
    </g>
    </svg>
</template>