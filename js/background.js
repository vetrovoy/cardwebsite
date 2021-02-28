let videos = [
  {
    videoURL: "q2Cmi8qoFX8",
    containment: "body",
    autoPlay: true,
    mute: false,
    startAt: 24,
    opacity: 1,
    stopMovieOnBlur: false,
    showYTLogo: false,
    showControls: false,
  },
//   {
//     videoURL: "DusNdsizIWw",
//     containment: "body",
//     autoPlay: true,
//     mute: false,
//     startAt: 0,
//     opacity: 1,
//     stopMovieOnBlur: false,
//     showYTLogo: false,
//     showControls: false,
//   },
//   {
//     videoURL: "UWzN3mROnHQ",
//     containment: "body",
//     autoPlay: true,
//     mute: false,
//     startAt: 23,
//     opacity: 1,
//     stopMovieOnBlur: false,
//     showYTLogo: false,
//     showControls: false,
//   },
];

jQuery(function () {
    jQuery("#bgndVideo").YTPlaylist(videos, true);
});