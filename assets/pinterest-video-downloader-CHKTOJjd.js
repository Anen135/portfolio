const e={id:"pinterest-video-downloader",title:"Pinterest Video Downloader",subtitle:"Chrome Extension for Downloading Pinterest Videos",description:"Расширение для браузера Chrome, позволяющее скачивать видео и изображения с Pinterest в разных разрешениях.",version:"0.1",license:"MIT",appearance:{theme:"gradient",primaryColor:"#ff6363",accentColor:"#6363ff",logo:"/icons/icon-128.png",banner:"/assets/banner.png"},techStack:[{name:"JavaScript",version:"ES2022",icon:"logos:javascript"},{name:"Chrome Extensions API",version:"Manifest V3",icon:"logos:chrome"},{name:"HTML5",version:"5",icon:"logos:html-5"},{name:"CSS3",version:"3",icon:"logos:css-3"}],links:{github:"https://github.com/Anen135",documentation:"",discord:"",npm:"",demo:""},features:[{title:"Скачивание видео",description:"Автоматическое определение и скачивание видео с Pinterest.",icon:"mdi:download"},{title:"Выбор разрешения",description:"Поддержка нескольких разрешений видео, включая HD-варианты.",icon:"mdi:video-high-definition"},{title:"Простой интерфейс",description:"Минималистичный popup-интерфейс с быстрым доступом к скачиванию.",icon:"mdi:application-outline"}],sections:[{type:"code_snippet",title:"Пример получения данных Pinterest",language:"javascript",code:`
function getPinterestData(url) {
  let data = JSON.parse(
    document.getElementById("__PWS_INITIAL_PROPS__").textContent
  );

  let pin =
    data.initialReduxState.pins[
      Object.keys(data.initialReduxState.pins)[0]
    ];

  if (pin.videos) {
    console.log(pin.videos.video_list);
  }
}
      `},{type:"text_block",title:"О проекте",content:"Pinterest Video Downloader — экспериментальное Chrome-расширение для загрузки видео и изображений с Pinterest. Расширение использует встроенные данные страницы Pinterest для извлечения ссылок на медиафайлы."},{type:"gallery",title:"Скриншоты",images:[{url:"https://github.com/user-attachments/assets/feb9e5e8-e3b8-4df0-a7ea-6f0970ee8736",caption:"Главное окно расширения"},{url:"https://github.com/user-attachments/assets/9ecb5473-77f1-4681-8029-625d8f77648e",caption:"Выбор разрешения видео"}]}],roadmap:[{task:"Добавить полноценное скачивание через chrome.downloads API",status:"in_progress"},{task:"Поддержка Firefox",status:"planned"},{task:"Автоматическое определение названия видео",status:"planned"}],metadata:{keywords:["pinterest","video downloader","chrome extension","manifest v3","media downloader","javascript"],ogImage:"/assets/og-image.png",author:"Anen"}};export{e as page};
