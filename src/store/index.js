import { createStore } from "vuex";

export default createStore({
    state:{
       line : [
        {name : 'ln-attachment'},
        {name : 'ln-cloud-plus'},
        {name : 'ln-cloud-clock'},
        {name : 'ln-cloud-download'},
        {name : 'ln-cloud-exclamation'},
        {name : 'ln-cloud-times'},
        {name : 'ln-cloud-off'},
        {name : 'ln-cloud-minus'},
        {name : 'ln-cloud-upload'},
        {name : 'ln-cloud-check'},
        {name : 'ln-cloud'},
        {name : 'ln-copy'},
        {name : 'ln-upload'},
        {name : 'ln-file-plus'},
        {name : 'ln-file-audio'},
        {name : 'ln-file-check'},
        {name : 'ln-file-times'},
        {name : 'ln-file-document'},
        {name : 'ln-file-img'},
        {name : 'ln-file-minus'},
        {name : 'ln-file-video'},
        {name : 'ln-file'},
        {name : 'ln-folder-plus'},
        {name : 'ln-folder-check'},
        {name : 'ln-folder-times'},
        {name : 'ln-folder-document'},
        {name : 'ln-folder-img'},
        {name : 'ln-folder-music'},
        {name : 'ln-folder-minus'},
        {name : 'ln-folder-video'},
        {name : 'ln-folder'},
        {name : 'ln-download'},
        {name : 'ln-badge'},
        {name : 'ln-box'},
        {name : 'ln-cheque'},
        {name : 'ln-credit-card'},
        {name : 'ln-percent'},
        {name : 'ln-invoice'},
        {name : 'ln-bag'},
        {name : 'ln-store'},
        {name : 'ln-camera-img'},
        {name : 'ln-camera-video'},
        {name : 'ln-microphone-off'},
        {name : 'ln-microphone'},
        {name : 'ln-music'},
        {name : 'ln-music-l'},
        {name : 'ln-music-album'},
        {name : 'ln-music-artist'},
        {name : 'ln-play-c'},
        {name : 'ln-play-end'},
        {name : 'ln-play-next'},
        {name : 'ln-pause'},
        {name : 'ln-play'},
        {name : 'ln-play-previous'},
        {name : 'ln-play-start'},
        {name : 'ln-play-stop'},
        {name : 'ln-repeat-list'},
        {name : 'ln-repeat-song'},
        {name : 'ln-play-shuffle'},
        {name : 'ln-playlist'},
        {name : 'ln-volume-down'},
        {name : 'ln-volume-off'},
        {name : 'ln-volume-up'},
        {name : 'ln-3d'},
        {name : 'ln-apps'},
        {name : 'ln-bookmark-off'},
        {name : 'ln-bookmark'},
        {name : 'ln-briefcase'},
        {name : 'ln-calendar'},
        {name : 'ln-calendar-2'},
        {name : 'ln-calendar-plus'},
        {name : 'ln-calendar-minus'},
        {name : 'ln-category'},
        {name : 'ln-clock'},
        {name : 'ln-compass'},
        {name : 'ln-edit'},
        {name : 'ln-eye-off'},
        {name : 'ln-eye'},
        {name : 'ln-flag'},
        {name : 'ln-gift'},
        {name : 'ln-heart-off'},
        {name : 'ln-heart'},
        {name : 'ln-lightning'},
        {name : 'ln-lightning-2'},
        {name : 'ln-location-pin-off'},
        {name : 'ln-location-pin'},
        {name : 'ln-location'},
        {name : 'ln-lock-on'},
        {name : 'ln-lock'},
        {name : 'ln-moon'},
        {name : 'ln-sun'},
        {name : 'ln-mouse'},
        {name : 'ln-newspaper'},
        {name : 'ln-notification-off'},
        {name : 'ln-notification'},
        {name : 'ln-options'},
        {name : 'ln-printer'},
        {name : 'ln-scanner'},
        {name : 'ln-search'},
        {name : 'ln-secure-off'},
        {name : 'ln-star'},
        {name : 'ln-trash-simple'},
        {name : 'ln-trash'},
        {name : 'ln-zoom-in'},
        {name : 'ln-zoom-out'},
        {name : 'ln-arrow-bottom-left'},
        {name : 'ln-arrow-bottom-left-2'},
        {name : 'ln-arrow-bottom-left-s'},
        {name : 'ln-arrow-bottom-left-2-s'},
        {name : 'ln-arrow-bottom-left-c'},
        {name : 'ln-arrow-bottom-left-2-c'},
        {name : 'ln-arrow-bottom-right'},
        {name : 'ln-arrow-bottom-right-s'},
        {name : 'ln-arrow-bottom-right-2-s'},
        {name : 'ln-arrow-bottom-right-c'},
        {name : 'ln-arrow-bottom-right-2-c'},
        {name : 'ln-arrow-top-right-2-s'},
        {name : 'ln-arrow-down'},
        {name : 'ln-arrow-down-2'},
        {name : 'ln-arrow-down-s'},
        {name : 'ln-arrow-bottom-2-s'},
        {name : 'ln-arrow-bottom-c'},
        {name : 'ln-arrow-bottom-2-c'},
        {name : 'ln-arrow-left'},
        {name : 'ln-arrow-left-2'},
        {name : 'ln-arrow-left-s'},
        {name : 'ln-arrow-left-2-s'},
        {name : 'ln-arrow-left-c'},
        {name : 'ln-arrow-left-2-c'},
        {name : 'ln-arrow-bottom-right-2'},
        {name : 'ln-arrow-right'},
        {name : 'ln-arrow-right-2'},
        {name : 'ln-arrow-right-s'},
        {name : 'ln-arrow-right-2-s'},
        {name : 'ln-arrow-right-c'},
        {name : 'ln-arrow-right-2-c'},
        {name : 'ln-arrow-top-left'},
        {name : 'ln-arrow-top-left-2'},
        {name : 'ln-arrow-top-left-s'},
        {name : 'ln-arrow-top-left-2-s'},
        {name : 'ln-arrow-top-left-c'},
        {name : 'ln-arrow-top-left-2-c'},
        {name : 'ln-arrow-top-right'},
        {name : 'ln-arrow-top-right-2'},
        {name : 'ln-arrow-top-right-s'},
        {name : 'ln-arrow-top-right-c'},
        {name : 'ln-arrow-top-right-2-c'},
        {name : 'ln-arrow-up'},
        {name : 'ln-arrow-up-2'},
        {name : 'ln-arrow-up-s'},
        {name : 'ln-arrow-up-2-s'},
        {name : 'ln-arrow-up-c'},
        {name : 'ln-arrow-up-2-c'},
        {name : 'ln-history'},
        {name : 'ln-cursor'},
        {name : 'ln-login'},
        {name : 'ln-exit'},
        {name : 'ln-frame'},
        {name : 'ln-filter'},
        {name : 'ln-times'},
        {name : 'ln-compare'},
        {name : 'ln-component'},
        {name : 'ln-check-s'},
        {name : 'ln-check'},
        {name : 'ln-close-c'},
        {name : 'ln-times-c2'},
        {name : 'ln-close-s'},
        {name : 'ln-backspace'},
        {name : 'ln-bluetooth'},
        {name : 'ln-check-c'},
        {name : 'ln-check-c2'},
        {name : 'ln-share'},
        {name : 'ln-exclamation-c'},
        {name : 'ln-exclamation-s'},
        {name : 'ln-send'},
        {name : 'ln-nodes-share'},
        {name : 'ln-user'},
        {name : 'ln-phone'},
        {name : 'ln-phone-off'},
        {name : 'ln-comment-plus'},
        {name : 'ln-comment-check'},
        {name : 'ln-comment-times'},
        {name : 'ln-comment-dots'},
        {name : 'ln-comment-minus'},
        {name : 'ln-comment'},
        {name : 'ln-info-c'},
        {name : 'ln-info-s'},
        {name : 'ln-external-link'},
        {name : 'ln-info'},
        {name : 'ln-link'},
        {name : 'ln-brgr-menu'},
        {name : 'ln-brgr-menu-v'},
        {name : 'ln-menu-dot-hc'},
        {name : 'ln-menu-dot-hs'},
        {name : 'ln-menu-dot-h'},
        {name : 'ln-menu-dot-vc'},
        {name : 'ln-menu-dot-vs'},
        {name : 'ln-menu-dot-v'},
        {name : 'ln-move'},
        {name : 'ln-question-c'},
        {name : 'ln-question'},
        {name : 'ln-question-s'},
        {name : 'ln-restart'},
        {name : 'ln-full-screen'},
        {name : 'ln-screen-normal'},
        {name : 'ln-center-s'},
        {name : 'ln-left-s'},
        {name : 'ln-right-s'},
        {name : 'ln-swap'},
        {name : 'ln-sync'},
        {name : 'ln-type'},
        {name : 'ln-face-confused'},
        {name : 'ln-face-disappointed'},
        {name : 'ln-face-expressionless'},
        {name : 'ln-face-puzzled'},
        {name : 'ln-face-dumb'},
        {name : 'ln-face-frowning'},
        {name : 'ln-face-kissing-smile'},
        {name : 'ln-face-kissing'},
        {name : 'ln-face-natural'},
        {name : 'ln-face-pensive'},
        {name : 'ln-face-relieved'},
        {name : 'ln-face-smile'},
        {name : 'ln-face-smile-eye'},
        {name : 'ln-face-squinting'},
        {name : 'ln-face-upside-smile'},
        {name : 'ln-face-blinking'},
        {name : 'ln-calculator'},
        {name : 'ln-nmbr-zero-c'},
        {name : 'ln-nmbr-zero-s'},
        {name : 'ln-zero'},
        {name : 'ln-nmbr-one-c'},
        {name : 'ln-nmbr-one-s'},
        {name : 'ln-one'},
        {name : 'ln-nmbr-two-c'},
        {name : 'ln-nmbr-two-s'},
        {name : 'ln-two'},
        {name : 'ln-nmbr-three-c'},
        {name : 'ln-nmbr-three-s'},
        {name : 'ln-nmbr-three'},
        {name : 'ln-nmbr-four-c'},
        {name : 'ln-nmbr-four-s'},
        {name : 'ln-nmbr-four'},
        {name : 'ln-nmbr-five-c'},
        {name : 'ln-nmbr-five-s'},
        {name : 'ln-nmbr-five'},
        {name : 'ln-nmbr-seven-c'},
        {name : 'ln-nmbr-seven-s'},
        {name : 'ln-nmbr-seven'},
        {name : 'ln-nmbr-eight-c'},
        {name : 'ln-nmbr-eight-s'},
        {name : 'ln-nmbr-eight'},
        {name : 'ln-math-division-c'},
        {name : 'ln-slash'},
        {name : 'ln-math-division-s'},
        {name : 'ln-math-division'},
        {name : 'ln-math-equal'},
        {name : 'ln-math-f'},
        {name : 'ln-exclamation'},
        {name : 'ln-infinity'},
        {name : 'ln-minus-c'},
        {name : 'ln-minus-s'},
        {name : 'ln-minus'},
        {name : 'ln-math-percent'},
        {name : 'ln-math-pi'},
        {name : 'ln-plus-c'},
        {name : 'ln-plus-minus'},
        {name : 'ln-plus-s'},
        {name : 'ln-plus'},
        {name : 'ln-math-radical'},
        {name : 'ln-times-c'},
        {name : 'ln-times-s'},
        {name : 'ln-math-x'},
        {name : 'ln-math-y'},
        {name : 'ln-trend-down'},
        {name : 'ln-trend-up'},
        {name : 'ln-home'},
        {name : 'ln-terminal'},
        {name : 'ln-hashtag'},
        {name : 'ln-code'}
       ],
       dash : [
        {name : 'ds-camera-img'},
        {name : 'ds-camera-video'},
        {name : 'ds-microphone'},
        {name : 'ds-microphone-off'},
        {name : 'ds-music'},
        {name : 'ds-music-l'},
        {name : 'ds-music-album'},
        {name : 'ds-music-artist'},
        {name : 'ds-play-c'},
        {name : 'ds-play-end'},
        {name : 'ds-play-next'},
        {name : 'ds-pause'},
        {name : 'ds-play'},
        {name : 'ds-play-previous'},
        {name : 'ds-play-start'},
        {name : 'ds-play-stop'},
        {name : 'ds-repeat-list'},
        {name : 'ds-repeat-song'},
        {name : 'ds-play-shuffle'},
        {name : 'ds-playlist'},
        {name : 'ds-volume-down'},
        {name : 'ds-volume-off'},
        {name : 'ds-volume-up'},
        {name : 'ds-badge'},
        {name : 'ds-box'},
        {name : 'ds-cheque'},
        {name : 'ds-credit-card'},
        {name : 'ds-percent'},
        {name : 'ds-invoice'},
        {name : 'ds-bag'},
        {name : 'ds-store'},
        {name : 'ds-comment'},
        {name : 'ds-comment-plus'},
        {name : 'ds-comment-check'},
        {name : 'ds-comment-times'},
        {name : 'ds-comment-dots'},
        {name : 'ds-comment-minus'},
        {name : 'ds-phone'},
        {name : 'ds-phone-off'},
        {name : 'ds-user'},
        {name : 'ds-send'},
        {name : 'ds-nodes-share'},
        {name : 'ds-share'},
        {name : 'ds-attachment'},
        {name : 'ds-cloud'},
        {name : 'ds-cloud-plus'},
        {name : 'ds-cloud-clock'},
        {name : 'ds-cloud-download'},
        {name : 'ds-cloud-exclamation'},
        {name : 'ds-cloud-times'},
        {name : 'ds-cloud-off'},
        {name : 'ds-cloud-minus'},
        {name : 'ds-cloud-upload'},
        {name : 'ds-cloud-check'},
        {name : 'ds-copy'},
        {name : 'ds-upload'},
        {name : 'ds-file'},
        {name : 'ds-file-plus'},
        {name : 'ds-file-audio'},
        {name : 'ds-file-check'},
        {name : 'ds-file-times'},
        {name : 'ds-file-document'},
        {name : 'ds-file-img'},
        {name : 'ds-file-minus'},
        {name : 'ds-file-video'},
        {name : 'ds-folder'},
        {name : 'ds-folder-plus'},
        {name : 'ds-folder-check'},
        {name : 'ds-folder-times'},
        {name : 'ds-folder-document'},
        {name : 'ds-folder-img'},
        {name : 'ds-folder-music'},
        {name : 'ds-folder-minus'},
        {name : 'ds-folder-video'},
        {name : 'ds-download'},
        {name : 'ds-3d'},
        {name : 'ds-apps'},
        {name : 'ds-bookmark'},
        {name : 'ds-bookmark-off'},
        {name : 'ds-briefcase'},
        {name : 'ds-calendar'},
        {name : 'ds-calendar-2'},
        {name : 'ds-calendar-plus'},
        {name : 'ds-calendar-minus'},
        {name : 'ds-category'},
        {name : 'ds-clock'},
        {name : 'ds-compass'},
        {name : 'ds-edit'},
        {name : 'ds-eye'},
        {name : 'ds-eye-off'},
        {name : 'ds-flag'},
        {name : 'ds-gift'},
        {name : 'ds-heart'},
        {name : 'ds-heart-off'},
        {name : 'ds-lightning'},
        {name : 'ds-lightning-2'},
        {name : 'ds-location'},
        {name : 'ds-location-pin'},
        {name : 'ds-location-pin-off'},
        {name : 'ds-lock'},
        {name : 'ds-lock-on'},
        {name : 'ds-moon'},
        {name : 'ds-sun'},
        {name : 'ds-mouse'},
        {name : 'ds-newspaper'},
        {name : 'ds-notification'},
        {name : 'ds-notification-off'},
        {name : 'ds-options'},
        {name : 'ds-printer'},
        {name : 'ds-scanner'},
        {name : 'ds-search'},
        {name : 'ds-secure-off'},
        {name : 'ds-star'},
        {name : 'ds-trash'},
        {name : 'ds-trash-simple'},
        {name : 'ds-zoom-in'},
        {name : 'ds-zoom-out'},
        {name : 'ds-face-confused'},
        {name : 'ds-face-disappointed'},
        {name : 'ds-face-expressionless'},
        {name : 'ds-face-puzzled'},
        {name : 'ds-face-dumb'},
        {name : 'ds-face-frowning'},
        {name : 'ds-face-kissing'},
        {name : 'ds-face-kissing-smile'},
        {name : 'ds-face-natural'},
        {name : 'ds-face-pensive'},
        {name : 'ds-face-relieved'},
        {name : 'ds-face-smile'},
        {name : 'ds-face-smile-eye'},
        {name : 'ds-face-squinting'},
        {name : 'ds-face-upside-smile'},
        {name : 'ds-face-blinking'},
        {name : 'ds-arrow-bottom-left'},
        {name : 'ds-arrow-bottom-left-2'},
        {name : 'ds-arrow-bottom-left-s'},
        {name : 'ds-arrow-bottom-left-2-s'},
        {name : 'ds-arrow-bottom-left-c'},
        {name : 'ds-arrow-bottom-left-2-c'},
        {name : 'ds-arrow-bottom-right'},
        {name : 'ds-arrow-bottom-right-s'},
        {name : 'ds-arrow-bottom-right-2-s'},
        {name : 'ds-arrow-bottom-right-c'},
        {name : 'ds-arrow-bottom-right-2-c'},
        {name : 'ds-arrow-top-right-2-s'},
        {name : 'ds-arrow-down'},
        {name : 'ds-arrow-down-2'},
        {name : 'ds-arrow-down-s'},
        {name : 'ds-arrow-bottom-2-s'},
        {name : 'ds-arrow-bottom-c'},
        {name : 'ds-arrow-bottom-2-c'},
        {name : 'ds-arrow-left'},
        {name : 'ds-arrow-left-2'},
        {name : 'ds-arrow-left-s'},
        {name : 'ds-arrow-left-2-s'},
        {name : 'ds-arrow-left-c'},
        {name : 'ds-arrow-left-2-c'},
        {name : 'ds-arrow-bottom-right-2'},
        {name : 'ds-arrow-right'},
        {name : 'ds-arrow-right-2'},
        {name : 'ds-arrow-right-s'},
        {name : 'ds-arrow-right-2-s'},
        {name : 'ds-arrow-right-c'},
        {name : 'ds-arrow-right-2-c'},
        {name : 'ds-arrow-top-left'},
        {name : 'ds-arrow-top-left-2'},
        {name : 'ds-arrow-top-left-s'},
        {name : 'ds-arrow-top-left-2-s'},
        {name : 'ds-arrow-top-left-c'},
        {name : 'ds-arrow-top-left-2-c'},
        {name : 'ds-arrow-top-right'},
        {name : 'ds-arrow-top-right-2'},
        {name : 'ds-arrow-top-right-s'},
        {name : 'ds-arrow-top-right-c'},
        {name : 'ds-arrow-top-right-2-c'},
        {name : 'ds-arrow-up'},
        {name : 'ds-arrow-up-2'},
        {name : 'ds-arrow-up-s'},
        {name : 'ds-arrow-up-2-s'},
        {name : 'ds-arrow-up-c'},
        {name : 'ds-arrow-up-2-c'},
        {name : 'ds-exclamation-c'},
        {name : 'ds-exclamation-s'},
        {name : 'ds-backspace'},
        {name : 'ds-bluetooth'},
        {name : 'ds-check'},
        {name : 'ds-check-c'},
        {name : 'ds-check-c2'},
        {name : 'ds-check-s'},
        {name : 'ds-close-c'},
        {name : 'ds-close-c'},
        {name : 'ds-times-c2'},
        {name : 'ds-close-s'},
        {name : 'ds-compare'},
        {name : 'ds-component'},
        {name : 'ds-cursor'},
        {name : 'ds-login'},
        {name : 'ds-exit'},
        {name : 'ds-frame'},
        {name : 'ds-filter'},
        {name : 'ds-history'},
        {name : 'ds-info-c'},
        {name : 'ds-info-s'},
        {name : 'ds-link'},
        {name : 'ds-external-link'},
        {name : 'ds-brgr-menu'},
        {name : 'ds-brgr-menu-v'},
        {name : 'ds-menu-dot-h'},
        {name : 'ds-menu-dot-hc'},
        {name : 'ds-menu-dot-hs'},
        {name : 'ds-menu-dot-v'},
        {name : 'ds-menu-dot-vc'},
        {name : 'ds-menu-dot-vs'},
        {name : 'ds-move'},
        {name : 'ds-question-c'},
        {name : 'ds-question-s'},
        {name : 'ds-restart'},
        {name : 'ds-full-screen'},
        {name : 'ds-screen-normal'},
        {name : 'ds-center-s'},
        {name : 'ds-left-s'},
        {name : 'ds-right-s'},
        {name : 'ds-swap'},
        {name : 'ds-sync'},
        {name : 'ds-type'},
        {name : 'ds-calculator'},
        {name : 'ds-zero'},
        {name : 'ds-nmbr-zero-c'},
        {name : 'ds-nmbr-zero-s'},
        {name : 'ds-one'},
        {name : 'ds-nmbr-one-c'},
        {name : 'ds-nmbr-one-s'},
        {name : 'ds-nmbr-two'},
        {name : 'ds-nmbr-two-c'},
        {name : 'ds-nmbr-two-s'},
        {name : 'ds-nmbr-three'},
        {name : 'ds-nmbr-three-c'},
        {name : 'ds-nmbr-three-s'},
        {name : 'ds-nmbr-four'},
        {name : 'ds-nmbr-four-c'},
        {name : 'ds-nmbr-four-s'},
        {name : 'ds-nmbr-five'},
        {name : 'ds-nmbr-five-c'},
        {name : 'ds-nmbr-five-s'},
        {name : 'ds-nmbr-seven'},
        {name : 'ds-nmbr-seven-c'},
        {name : 'ds-nmbr-seven-s'},
        {name : 'ds-nmbr-eight'},
        {name : 'ds-nmbr-eight-c'},
        {name : 'ds-nmbr-eight-s'},
        {name : 'ds-math-division'},
        {name : 'ds-math-division-c'},
        {name : 'ds-slash'},
        {name : 'ds-math-division-s'},
        {name : 'ds-math-equal'},
        {name : 'ds-math-f'},
        {name : 'ds-exclamation'},
        {name : 'ds-infinity'},
        {name : 'ds-minus'},
        {name : 'ds-minus-c'},
        {name : 'ds-minus-s'},
        {name : 'ds-math-percent'},
        {name : 'ds-math-pi'},
        {name : 'ds-plus'},
        {name : 'ds-plus-c'},
        {name : 'ds-plus-minus'},
        {name : 'ds-plus-s'},
        {name : 'ds-math-radical'},
        {name : 'ds-times'},
        {name : 'ds-times-c'},
        {name : 'ds-times-s'},
        {name : 'ds-math-x'},
        {name : 'ds-math-y'},
        {name : 'ds-trend-down'},
        {name : 'ds-trend-up'},
        {name : 'ds-home'},
        {name : 'ds-terminal'},
        {name : 'ds-hashtag'},
        {name : 'ds-code'},
       ],
       duo : [
        {name : 'dt-flag'},
        {name : 'dt-3d'},
        {name : 'dt-apps'},
        {name : 'dt-bookmark-off'},
        {name : 'dt-briefcase'},
        {name : 'dt-category'},
        {name : 'dt-clock'},
        {name : 'dt-compass'},
        {name : 'dt-gift'},
        {name : 'dt-do-redo'},
        {name : 'dt-heart-off'},
        {name : 'dt-component'},
        {name : 'dt-times-s'},
        {name : 'dt-location-pin'},
        {name : 'dt-location-pin-off'},
        {name : 'dt-lock'},
        {name : 'dt-lock-on'},
        {name : 'dt-exclamation-s'},
        {name : 'dt-backspace'},
        {name : 'dt-check-c'},
        {name : 'dt-check-s'},
        {name : 'dt-times-c'},
        {name : 'dt-sun'},
        {name : 'dt-mouse'},
        {name : 'dt-notification'},
        {name : 'dt-notification-off'},
        {name : 'dt-options'},
        {name : 'dt-printer'},
        {name : 'dt-search'},
        {name : 'dt-gear'},
        {name : 'dt-secure-off'},
        {name : 'dt-trash'},
        {name : 'dt-trash-simple'},
        {name : 'dt-zoom-in'},
        {name : 'dt-zoom-out'},
        {name : 'dt-exclamation-c'},
        {name : 'dt-comment-plus'},
        {name : 'dt-comment-check'},
        {name : 'dt-comment-times'},
        {name : 'dt-comment-dots'},
        {name : 'dt-comment-minus'},
        {name : 'dt-phone-off'},
        {name : 'dt-user'},
        {name : 'dt-send'},
        {name : 'dt-nodes-share'},
        {name : 'dt-do-undo'},
        {name : 'dt-info-c'},
        {name : 'dt-info-s'},
        {name : 'dt-question-c'},
        {name : 'dt-question-s'},
        {name : 'dt-camera-img'},
        {name : 'dt-camera-video'},
        {name : 'dt-microphone'},
        {name : 'dt-microphone-off'},
        {name : 'dt-music'},
        {name : 'dt-music-l'},
        {name : 'dt-music-album'},
        {name : 'dt-play-c'},
        {name : 'dt-play-end'},
        {name : 'dt-play-next'},
        {name : 'dt-play-previous'},
        {name : 'dt-play-start'},
        {name : 'dt-playlist'},
        {name : 'dt-volume-down'},
        {name : 'dt-volume-off'},
        {name : 'dt-volume-up'},
        {name : 'dt-cloud-plus'},
        {name : 'dt-cloud-clock'},
        {name : 'dt-cloud-download'},
        {name : 'dt-cloud-exclamation'},
        {name : 'dt-cloud-times'},
        {name : 'dt-cloud-off'},
        {name : 'dt-cloud-minus'},
        {name : 'dt-cloud-upload'},
        {name : 'dt-cloud-check'},
        {name : 'dt-copy'},
        {name : 'dt-file'},
        {name : 'dt-file-audio'},
        {name : 'dt-file-check'},
        {name : 'dt-file-times'},
        {name : 'dt-file-document'},
        {name : 'dt-file-img'},
        {name : 'dt-file-minus'},
        {name : 'dt-file-video'},
        {name : 'dt-folder'},
        {name : 'dt-folder-plus'},
        {name : 'dt-folder-check'},
        {name : 'dt-folder-times'},
        {name : 'dt-folder-document'},
        {name : 'dt-folder-img'},
        {name : 'dt-folder-music'},
        {name : 'dt-folder-minus'},
        {name : 'dt-folder-video'},
        {name : 'dt-badge'},
        {name : 'dt-box'},
        {name : 'dt-cheque'},
        {name : 'dt-credit-card'},
        {name : 'dt-percent'},
        {name : 'dt-invoice'},
        {name : 'dt-bag'},
        {name : 'dt-store'},
        {name : 'dt-face-confused'},
        {name : 'dt-face-disappointed'},
        {name : 'dt-face-expressionless'},
        {name : 'dt-face-puzzled'},
        {name : 'dt-face-dumb'},
        {name : 'dt-face-frowning'},
        {name : 'dt-face-kissing'},
        {name : 'dt-face-kissing-smile'},
        {name : 'dt-face-natural'},
        {name : 'dt-face-pensive'},
        {name : 'dt-face-relieved'},
        {name : 'dt-face-smile'},
        {name : 'dt-face-smile-eye'},
        {name : 'dt-face-squinting'},
        {name : 'dt-face-upside-smile'},
        {name : 'dt-face-blinking'},
        {name : 'dt-calculator'},
        {name : 'dt-nmbr-zero-c'},
        {name : 'dt-nmbr-zero-s'},
        {name : 'dt-nmbr-one-c'},
        {name : 'dt-nmbr-one-s'},
        {name : 'dt-nmbr-two-c'},
        {name : 'dt-nmbr-two-s'},
        {name : 'dt-nmbr-three-c'},
        {name : 'dt-nmbr-three-s'},
        {name : 'dt-nmbr-four-c'},
        {name : 'dt-nmbr-four-s'},
        {name : 'dt-nmbr-five-c'},
        {name : 'dt-nmbr-five-s'},
        {name : 'dt-nmbr-six-c'},
        {name : 'dt-nmbr-six-s'},
        {name : 'dt-nmbr-seven-c'},
        {name : 'dt-nmbr-seven-s'},
        {name : 'dt-nmbr-eight-c'},
        {name : 'dt-nmbr-eight-s'},
        {name : 'dt-nmbr-nine-c'},
        {name : 'dt-nmbr-nine-s'},
        {name : 'dt-math-division-c'},
        {name : 'dt-math-division-s'},
        {name : 'dt-minus-c'},
        {name : 'dt-minus-s'},
        {name : 'dt-plus-c'},
        {name : 'dt-plus-s'},
        {name : 'dt-arrow-bottom-left-s'},
        {name : 'dt-arrow-bottom-left-2-s'},
        {name : 'dt-arrow-bottom-left-c'},
        {name : 'dt-arrow-bottom-left-2-c'},
        {name : 'dt-arrow-bottom-right-s'},
        {name : 'dt-arrow-bottom-right-2-s'},
        {name : 'dt-arrow-bottom-right-c'},
        {name : 'dt-arrow-bottom-right-2-c'},
        {name : 'dt-arrow-top-right-2-s'},
        {name : 'dt-arrow-down-s'},
        {name : 'dt-arrow-down-2-s'},
        {name : 'dt-arrow-down-c'},
        {name : 'dt-arrow-down-2-c'},
        {name : 'dt-arrow-left-s'},
        {name : 'dt-arrow-left-2-s'},
        {name : 'dt-arrow-left-c'},
        {name : 'dt-arrow-left-2-c'},
        {name : 'dt-arrow-right-s'},
        {name : 'dt-arrow-right-2-s'},
        {name : 'dt-arrow-right-c'},
        {name : 'dt-arrow-right-2-c'},
        {name : 'dt-arrow-top-left-s'},
        {name : 'dt-arrow-top-left-2-s'},
        {name : 'dt-arrow-top-left-c'},
        {name : 'dt-arrow-top-left-2-c'},
        {name : 'dt-arrow-top-right-s'},
        {name : 'dt-arrow-top-right-c'},
        {name : 'dt-arrow-top-right-2-c'},
        {name : 'dt-arrow-up-s'},
        {name : 'dt-arrow-up-2-s'},
        {name : 'dt-arrow-up-c'},
        {name : 'dt-arrow-up-2-c'}
       ],
       fill : [
        {name : 'fl-arrow-bottom-right-c'},
        {name : 'fl-arrow-bottom-right-2-s'},
        {name : 'fl-arrow-bottom-right-s'},
        {name : 'fl-arrow-bottom-right'},
        {name : 'fl-arrow-bottom-left-2-c'},
        {name : 'fl-arrow-bottom-left-c'},
        {name : 'fl-arrow-bottom-left-2-s'},
        {name : 'fl-arrow-bottom-left-s'},
        {name : 'fl-arrow-bottom-left-2'},
        {name : 'fl-arrow-bottom-left'},
        {name : 'fl-nmbr-three-c'},
        {name : 'fl-calculator'},
        {name : 'fl-headphone'},
        {name : 'fl-playlist'},
        {name : 'fl-volume-up'},
        {name : 'fl-volume-off'},
        {name : 'fl-music-artist'},
        {name : 'fl-music-album'},
        {name : 'fl-nmbr-zero'},
        {name : 'fl-nmbr-zero-c'},
        {name : 'fl-nmbr-zero-s'},
        {name : 'fl-nmbr-one'},
        {name : 'fl-nmbr-one-c'},
        {name : 'fl-nmbr-one-s'},
        {name : 'fl-nmbr-two'},
        {name : 'fl-nmbr-two-c'},
        {name : 'fl-nmbr-two-s'},
        {name : 'fl-nmbr-three'},
        {name : 'fl-nmbr-three-s'},
        {name : 'fl-nmbr-four'},
        {name : 'fl-nmbr-four-c'},
        {name : 'fl-nmbr-four-s'},
        {name : 'fl-nmbr-five'},
        {name : 'fl-nmbr-five-c'},
        {name : 'fl-nmbr-five-s'},
        {name : 'fl-nmbr-six'},
        {name : 'fl-nmbr-six-c'},
        {name : 'fl-nmbr-six-s'},
        {name : 'fl-nmbr-seven'},
        {name : 'fl-nmbr-seven-c'},
        {name : 'fl-nmbr-seven-s'},
        {name : 'fl-nmbr-eight'},
        {name : 'fl-nmbr-eight-c'},
        {name : 'fl-nmbr-eight-s'},
        {name : 'fl-nmbr-nine'},
        {name : 'fl-nmbr-nine-c'},
        {name : 'fl-nmbr-nine-s'},
        {name : 'fl-math-division'},
        {name : 'fl-math-division-c'},
        {name : 'fl-slash'},
        {name : 'fl-math-division-s'},
        {name : 'fl-math-equal'},
        {name : 'fl-math-f'},
        {name : 'fl-exclamation'},
        {name : 'fl-infinity'},
        {name : 'fl-minus'},
        {name : 'fl-minus-c'},
        {name : 'fl-minus-s'},
        {name : 'fl-math-percent'},
        {name : 'fl-math-pi'},
        {name : 'fl-plus'},
        {name : 'fl-plus-c'},
        {name : 'fl-plus-minus'},
        {name : 'fl-plus-s'},
        {name : 'fl-math-radical'},
        {name : 'fl-times'},
        {name : 'fl-times-c'},
        {name : 'fl-times-s'},
        {name : 'fl-math-x'},
        {name : 'fl-math-y'},
        {name : 'fl-trend-down'},
        {name : 'fl-trend-up'},
        {name : 'fl-camera-img'},
        {name : 'fl-camera-video'},
        {name : 'fl-microphone'},
        {name : 'fl-microphone-off'},
        {name : 'fl-music'},
        {name : 'fl-music-l'},
        {name : 'fl-play-c'},
        {name : 'fl-play-end'},
        {name : 'fl-play-next'},
        {name : 'fl-pause'},
        {name : 'fl-play'},
        {name : 'fl-play-previous'},
        {name : 'fl-play-start'},
        {name : 'fl-play-stop'},
        {name : 'fl-repeat-list'},
        {name : 'fl-repeat-song'},
        {name : 'fl-play-shuffle'},
        {name : 'fl-volume-down'},
        {name : 'fl-exclamation-c'},
        {name : 'fl-exclamation-s'},
        {name : 'fl-backspace'},
        {name : 'fl-bluetooth'},
        {name : 'fl-check'},
        {name : 'fl-check-c'},
        {name : 'fl-check-c2'},
        {name : 'fl-check-s'},
        {name : 'fl-close-c'},
        {name : 'fl-times-c2'},
        {name : 'fl-close-s'},
        {name : 'fl-compare'},
        {name : 'fl-component'},
        {name : 'fl-cursor'},
        {name : 'fl-do-redo'},
        {name : 'fl-do-undo'},
        {name : 'fl-login'},
        {name : 'fl-exit'},
        {name : 'fl-frame'},
        {name : 'fl-filter'},
        {name : 'fl-history'},
        {name : 'fl-info-c'},
        {name : 'fl-info-s'},
        {name : 'fl-link'},
        {name : 'fl-external-link'},
        {name : 'fl-brgr-menu'},
        {name : 'fl-brgr-menu-v'},
        {name : 'fl-menu-dot-h'},
        {name : 'fl-menu-dot-hc'},
        {name : 'fl-menu-dot-hs'},
        {name : 'fl-menu-dot-v'},
        {name : 'fl-menu-dot-vc'},
        {name : 'fl-menu-dot-vs'},
        {name : 'fl-move'},
        {name : 'fl-pen'},
        {name : 'fl-question-c'},
        {name : 'fl-question-s'},
        {name : 'fl-restart'},
        {name : 'fl-full-screen'},
        {name : 'fl-screen-normal'},
        {name : 'fl-center-s'},
        {name : 'fl-left-s'},
        {name : 'fl-right-s'},
        {name : 'fl-swap'},
        {name : 'fl-sync'},
        {name : 'fl-type'},
        {name : 'fl-unavailable'},
        {name : 'fl-attachment'},
        {name : 'fl-cloud'},
        {name : 'fl-cloud-plus'},
        {name : 'fl-cloud-clock'},
        {name : 'fl-cloud-download'},
        {name : 'fl-cloud-exclamation'},
        {name : 'fl-cloud-times'},
        {name : 'fl-cloud-off'},
        {name : 'fl-cloud-minus'},
        {name : 'fl-cloud-upload'},
        {name : 'fl-cloud-check'},
        {name : 'fl-copy-svg'},
        {name : 'fl-upload'},
        {name : 'fl-file'},
        {name : 'fl-file-plus'},
        {name : 'fl-file-audio'},
        {name : 'fl-file-check'},
        {name : 'fl-file-times'},
        {name : 'fl-file-document'},
        {name : 'fl-file-img'},
        {name : 'fl-file-minus'},
        {name : 'fl-file-video'},
        {name : 'fl-folder'},
        {name : 'fl-folder-plus'},
        {name : 'fl-folder-check'},
        {name : 'fl-folder-times'},
        {name : 'fl-folder-document'},
        {name : 'fl-folder-img'},
        {name : 'fl-folder-music'},
        {name : 'fl-folder-minus'},
        {name : 'fl-folder-video'},
        {name : 'fl-download'},
        {name : 'fl-3d'},
        {name : 'fl-bookmark'},
        {name : 'fl-bookmark-off'},
        {name : 'fl-briefcase'},
        {name : 'fl-calendar'},
        {name : 'fl-calendar-2'},
        {name : 'fl-calendar-plus'},
        {name : 'fl-calendar-minus'},
        {name : 'fl-category'},
        {name : 'fl-clock'},
        {name : 'fl-compass'},
        {name : 'fl-eye'},
        {name : 'fl-eye-off'},
        {name : 'fl-flag'},
        {name : 'fl-gift'},
        {name : 'fl-heart'},
        {name : 'fl-heart-off'},
        {name : 'fl-home'},
        {name : 'fl-lightning'},
        {name : 'fl-lightning-2'},
        {name : 'fl-location'},
        {name : 'fl-location-pin'},
        {name : 'fl-location-pin-off'},
        {name : 'fl-lock'},
        {name : 'fl-lock-on'},
        {name : 'fl-moon'},
        {name : 'fl-sun'},
        {name : 'fl-mouse'},
        {name : 'fl-newspaper'},
        {name : 'fl-notification'},
        {name : 'fl-notification-off'},
        {name : 'fl-options'},
        {name : 'fl-printer'},
        {name : 'fl-scanner'},
        {name : 'fl-search'},
        {name : 'fl-gear'},
        {name : 'fl-secure'},
        {name : 'fl-secure-times'},
        {name : 'fl-secure-off'},
        {name : 'fl-secure-check'},
        {name : 'fl-star'},
        {name : 'fl-star-off'},
        {name : 'fl-trash'},
        {name : 'fl-trash-simple'},
        {name : 'fl-zoom-in'},
        {name : 'fl-zoom-out'},
        {name : 'fl-face-confused'},
        {name : 'fl-face-disappointed'},
        {name : 'fl-face-expressionless'},
        {name : 'fl-face-puzzled'},
        {name : 'fl-face-dumb'},
        {name : 'fl-face-frowning'},
        {name : 'fl-face-kissing'},
        {name : 'fl-face-kissing-smile'},
        {name : 'fl-face-natural'},
        {name : 'fl-face-pensive'},
        {name : 'fl-face-relieved'},
        {name : 'fl-face-smile'},
        {name : 'fl-face-smile-eye'},
        {name : 'fl-face-squinting'},
        {name : 'fl-face-upside-smile'},
        {name : 'fl-face-blinking'},
        {name : 'fl-badge'},
        {name : 'fl-box'},
        {name : 'fl-award'},
        {name : 'fl-cheque'},
        {name : 'fl-credit-card'},
        {name : 'fl-truck'},
        {name : 'fl-truck-fast'},
        {name : 'fl-truck-gift'},
        {name : 'fl-percent'},
        {name : 'fl-invoice'},
        {name : 'fl-bag'},
        {name : 'fl-shopping-cart'},
        {name : 'fl-shopping-cart-plus'},
        {name : 'fl-shopping-cart-minus'},
        {name : 'fl-store'},
        {name : 'fl-ticket'},
        {name : 'fl-comment'},
        {name : 'fl-comment-plus'},
        {name : 'fl-comment-check'},
        {name : 'fl-comment-times'},
        {name : 'fl-comment-dots'},
        {name : 'fl-comment-minus'},
        {name : 'fl-dislike'},
        {name : 'fl-envelope'},
        {name : 'fl-like'},
        {name : 'fl-phone'},
        {name : 'fl-phone-off'},
        {name : 'fl-user'},
        {name : 'fl-user-c'},
        {name : 'fl-send'},
        {name : 'fl-nodes-share'},
        {name : 'fl-share'},
        {name : 'fl-arrow-bottom-right-2-c'},
        {name : 'fl-arrow-top-right-2-s'},
        {name : 'fl-arrow-down'},
        {name : 'fl-arrow-down-2'},
        {name : 'fl-arrow-down-s'},
        {name : 'fl-arrow-down-2-s'},
        {name : 'fl-arrow-down-c'},
        {name : 'fl-arrow-down-2-c'},
        {name : 'fl-arrow-left'},
        {name : 'fl-arrow-left-2'},
        {name : 'fl-arrow-left-s'},
        {name : 'fl-arrow-left-2-s'},
        {name : 'fl-arrow-left-c'},
        {name : 'fl-arrow-left-2-c'},
        {name : 'fl-arrow-bottom-right-2'},
        {name : 'fl-arrow-right'},
        {name : 'fl-arrow-right-2'},
        {name : 'fl-arrow-right-s'},
        {name : 'fl-arrow-right-2-s'},
        {name : 'fl-arrow-right-s'},
        {name : 'fl-arrow-right-2-c'},
        {name : 'fl-arrow-top-left'},
        {name : 'fl-arrow-top-left-2'},
        {name : 'fl-arrow-top-left-s'},
        {name : 'fl-arrow-top-left-2-s'},
        {name : 'fl-arrow-top-left-c'},
        {name : 'fl-arrow-top-left-2-c'},
        {name : 'fl-arrow-top-right'},
        {name : 'fl-arrow-top-right-2'},
        {name : 'fl-arrow-top-right-s'},
        {name : 'fl-arrow-top-right-c'},
        {name : 'fl-arrow-top-right-2-c'},
        {name : 'fl-arrow-up'},
        {name : 'fl-arrow-up-2'},
        {name : 'fl-arrow-up-s'},
        {name : 'fl-arrow-up-2-s'},
        {name : 'fl-arrow-up-c'},
        {name : 'fl-arrow-up-2-c'}
       ]
    },
    getters: {
       doneLineIcon(state){
           return state.line
       },
       doneDashIcon(state){
        return state.dash
       },
       doneDuoIcon(state){
        return state.duo
       },
       doneFillIcon(state){
        return state.fill
       }
    }
})