<template>
  <div class="team-card py-20">
    <div class="flex items-center flex-col gap-3 pt-20">
      <h1 class="inline-block text-5xl font-bold text-white">Team</h1>
      <div class="md:w-[600px] text-center pb-2" style="color: var(--my-text-main-color)">
        We have led and delivered large-scale software and design projects in multiple startups and
        high-growth environments.
      </div>
      <svg
        width="100"
        height="4"
        class="vectors-wrapper"
        viewBox="0 0 100 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_404_3106)">
          <rect width="100" height="4" rx="2" fill="url(#paint0_linear_404_3106)" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_404_3106"
            x1="-3.5269e-08"
            y1="1.84615"
            x2="98.6286"
            y2="13.5533"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F926E1" />
            <stop offset="1" stop-color="#2AB5FB" />
          </linearGradient>
          <clipPath id="clip0_404_3106">
            <rect width="100" height="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <div class="card-group mt-24 flex flex-col md:flex-row gap-12">
      <div class="card-item">
        <div class="header">
          <img src="@/assets/images/user.png" alt="" />
          <div class="ml-8">
            <div class="name text-w-80">Xuhui Bai</div>
            <div class="text-w-60">CEO</div>
          </div>
        </div>
        <div class="text-w-60 user-mate pt-8">
          <ul>
            <li>University of Oxford, Software Engineering, MSc.</li>
            <li>
              Distinction Masters Thesis focused on highly-performant key-value data stores for use
              within graph databases and SurrealDB.
            </li>
            <li>
              15 years’ experience as a full-stack engineer architecting, and developing, advanced
              cloud applications with a focus on distributed databases and highly-available
              architectures.
            </li>
          </ul>
        </div>
      </div>

      <div class="card-item">
        <div class="header">
          <img src="@/assets/images/user.png" alt="" />
          <div class="ml-8">
            <div class="name text-w-80">Xuhui Bai</div>
            <div class="text-w-60">CEO</div>
          </div>
        </div>
        <div class="text-w-60 user-mate pt-8">
          <ul>
            <li>University of Oxford, Software Engineering, MSc.</li>
            <li>
              Distinction Masters Thesis focused on highly-performant key-value data stores for use
              within graph databases and SurrealDB.
            </li>
            <li>
              15 years’ experience as a full-stack engineer architecting, and developing, advanced
              cloud applications with a focus on distributed databases and highly-available
              architectures.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>

<style lang="scss">
.team-card {
  .card-group {
    .card-item {
      z-index: 66;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2.25rem;
      margin-bottom: 2rem;
      background: rgb(160 178 242 / 0.05);
      border-radius: 0.5rem;
    }
    .header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
      }
    }
    .name {
      font-size: 2.25rem;
      font-weight: 800;
      line-height: 3.5rem;
    }
    .user-mate {
      ul > li {
        font-size: 16px;
        line-height: 2rem;
      }
    }
  }
}
</style>
