export function onloadVideoPromise(src) {
  return new Promise((resolve, reject) => {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open('GET', src.url, true);
    xhrReq.responseType = 'blob';

    xhrReq.onload = function() {
      if (this.status === 200) {
        const vid = URL.createObjectURL(this.response);
        resolve({
          vid, id: src.id
        });
      }
    };
    xhrReq.onerror = function() {
      reject(arguments);
    };
    // xhrReq.onprogress = function(e) {
    //   if (e.lengthComputable) {
    //     const percentComplete = ((e.loaded / e.total) * 100 | 0) + '%';
    //     console.log('progress: ', percentComplete);
    //   }
    // }
    xhrReq.send();
  });
}
