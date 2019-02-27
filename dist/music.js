const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    audio: [
      {
        name: "主义第一",
        artist: '窦唯',
        url: 'https://www.youtube.com/watch?v=cfzSG5zgsEY',
        cover: '/images/music_pics/tzjg.jepg',
      }
    ]
});