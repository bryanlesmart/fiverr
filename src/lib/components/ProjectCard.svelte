<script lang="ts">
	type TProject = {
		id: number;
		img: string;
		pp: string;
		cat: string;
		username: string;
	};

	export let projects: TProject[];
</script>

<div class="projectCard">
	{#each projects as project}
		<img src={project.img} alt={project.username} />
		<div class="info">
			<img src={project.pp} alt={project.username} />
			<div class="texts">
				<h2>{project.cat}</h2>
				<span>{project.username}</span>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.projectCard {
		width: 300px;
		height: 300px;
		border-radius: 5px;
		overflow: hidden;
		cursor: pointer;
		border: 1px solid rgb(225, 225, 225);

		img {
			width: 100%;
			height: 70%;
			object-fit: cover;
		}

		.info {
			display: flex;
			align-items: center;
			gap: 20px;
			padding: 15px;

			img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				object-fit: cover;
			}

			.texts {
				h2 {
					font-size: 14px;
					font-weight: 500;
				}

				span {
					font-size: 14px;
					font-weight: 300;
				}
			}
		}
	}
</style>
