<script>
  import { onMount } from "svelte";
  export let description;
  export let title;
  export let imageUrl;
  export let link;
  export let className;

  onMount(() => {
    if(Kakao) {
      Kakao.init("473bade5b3c7ef30dc351e6df9b30045");

      Kakao.Link.createDefaultButton({
      container: "#kakao_link_button",
      objectType: "feed",
      content: {
        title, // "2022년 성경 말씀 나누기",
        description, //"#성경 #하나님 #2022년 #감사 #기도 #코로나 #온택트",
        imageUrl,
        link: {
          mobileWebUrl: link,
          webUrl: link,
        },
      },
      social: {
        likeCount: 1386,
        commentCount: 456,
        sharedCount: 14250,
      },
      installTalk: true,
      buttons: [
        {
          title: "내게 도착한 말씀 확인하기",
          link: {
            mobileWebUrl: link,
            webUrl: link,
          }
        }
      ]
    })
    }
  })
</script>
<div id="kakao_button_container" class="{className}">
  <a id="kakao_link_button">
    <img
      src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
    />
  </a>
</div>

<style>
  #kakao_button_container {
    display: flex;
    justify-content: center;
  }
  #kakao_link_button {
    display: inline-block;
    cursor: pointer;
  }
</style>