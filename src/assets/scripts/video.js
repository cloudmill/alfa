
const video_model = document.getElementById('video');
const getSrc = NODE_ENV_PATH === 'development'
  ? 'assets/images/video/video.mp4'
  : '/local/templates/main/assets/images/video/video.mp4'

if(video_model) {
  onloadVideo(video_model, getSrc);
  video_model.play();
}

function onloadVideo(videoTag, src) {
  const xhrReq = new XMLHttpRequest();
  xhrReq.open('GET', src, true);
  xhrReq.responseType = 'blob';

  xhrReq.onload = function() {
    if (this.status === 200) {
      const vid = URL.createObjectURL(this.response);
      videoTag.src = vid;
    }
  };
  xhrReq.onerror = function() {
    console.log('err', arguments);
  };
  xhrReq.onprogress = function(e) {
    if (e.lengthComputable) {
      const percentComplete = ((e.loaded / e.total) * 100 | 0) + '%';
      console.log('progress: ', percentComplete);
    }
  }
  xhrReq.send();
}
