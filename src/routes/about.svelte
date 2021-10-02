<script>
	import PersonCard from "../components/Card/PersonCard.svelte";
	import github_icon from "../../static/github.png"
</script>
<svelte:head>
	<title>2022년 말씀 뽑기</title>
</svelte:head>
<div class="page_wrapper_about">
<section class="project_introduce_section">
	<h1 class="project_introduce_title">2022 말씀 뽑기 프로젝트 - 히스픽</h1>
	<article>
		<div class="project_introduce">
			코로나19로 인한 거리두기 상황의 장기화에 따라 
		</div>
		<div class="project_introduce">
			오프라인 교류 행사들이 장기간 축소되고 있습니다.
		</div>
		<div class="project_introduce">
			<strong>히스픽</strong>은 온택트 시대에
		</div> 
		<div class="project_introduce"> 각자의 자리에서 성경말씀을 지인들과 더욱 쉽게 공유하고 </div>
		<div class="project_introduce">
			나누는 서비스를 제공하기 위해 기획되었습니다.
		</div>
	</article>
</section>
<section class="team_introduce_section">
	<article>
		<div class="team_card_wrapper">
		<PersonCard
			className="component_person_card"
			name="서상원"
			imageUrl="https://hanmoa-bucket.s3.ap-northeast-2.amazonaws.com/hispick/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6+4.png"
			description="개발"
			onClick={() => {window.open("https://www.instagram.com/sangwonseo317")}}
		/>
		<PersonCard
			className="component_person_card"
			name="윤재원"
			imageUrl="https://hanmoa-bucket.s3.ap-northeast-2.amazonaws.com/hispick/75397738_732160220652464_3045385615366422528_n.jpeg"
			description="개발·디자인"
			onClick={() => {window.open("https://www.instagram.com/0.1yoon")}}
		/>		
		</div>
		<div class="team_introduce_box"> 
			<div>TEAM 새내기</div>
			<div 
				class="github_icon"
				style="background: url({github_icon}) center no-repeat;"
				on:click={() => {window.open("https://github.com/sae-nae-gi/hispick")}}
			/>
		</div>
	</article>	
</section>
</div>
<style lang="scss">
	@keyframes fadein {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	.page_wrapper_about{
		position: relative;
	}

	.project_introduce_section {
		position: relative;
		text-align: center;
		padding: 16px 0;
		border-top: 1px solid #d1cab6;
		border-bottom: 1px solid #d1cab6;
		border-radius: 16px;
		margin-top: 40px;
	}

	.project_introduce_title {
		font-size: 28px;
		line-height: 24px;
		margin-top: 12px;
		animation: fadein 2s;
	}
	.project_introduce {
		line-height: 28px;
		font-size: 25px;
		word-break: keep-all;
    white-space: pre-wrap;
		margin-top: 12px;
		animation: fadein 4s;

		& > strong {
			font-size: 22px;
			font-weight: 700;
		}
	}
	.team_introduce_section {
		padding-top: 60px;
		border-top: 1px solid #d1cab6;
		border-bottom: 1px solid #d1cab6;
		border-radius: 16px;
		margin-top: 120px;

		& > article {
			position: relative;
		}
	}

	.team_introduce_section article :global(.component_person_card) {
		margin-bottom: 120px;
	}

	.team_introduce_section article :global(.component_person_card:first-of-type) {
		animation: fadein 3s;
	}

	.team_introduce_section article :global(.component_person_card:nth-of-type(2)) {
		animation: fadein 4s;
	}

	.team_card_wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	@media screen and (min-width: 450px) {
		.team_card_wrapper {
			flex-direction: row;
		}

		.team_introduce_section article :global(.component_person_card) {
			margin-right: 24px;
		}
	}

	.team_introduce_box {
		position: absolute;
		bottom: 20px;
		left: 50%;
    transform: translateX(-50%);
	}
	.github_icon {
		background-size: cover;
		width: 48px;
		height: 48px;
		margin: 0 auto;
		cursor: pointer;
	}
</style>