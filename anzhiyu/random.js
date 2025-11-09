var posts=["2025/11/09/hello-world/","2025/11/09/你好/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };