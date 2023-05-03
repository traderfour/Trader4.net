<template>
  <section class="bg-white dark:bg-gray-900 rounded">
    <div class="py-8 px-4 mx-auto lg:p-10">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Designed for Serious Financial Netizens like You
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Here at Trader4 we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div
          class="p-4 mb-4 w-fit text-sm text-green-800 rounded bg-green-100 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          Annually you have up to 16% off, which is 2 months <b>free</b>
        </div>
        <div class="flex items-center">
          <span
            class="text-base font-medium text-gray-900 dark:text-white me-3"
          >
            Monthly
          </span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              v-model="activeBtn"
              type="checkbox"
              class="sr-only peer outline-none"
            />
            <div
              class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </label>

          <span class="text-base font-medium text-gray-900 dark:text-white m-4">
            Annually
          </span>
        </div>
      </div>
      <div
        class="mb-4 lg:mb-8 space-y-8 lg:grid lg:grid-cols-3 md:gap-12 xl:gap-16 lg:space-y-0"
      >
        <div
          v-for="(pricingCardItem, pricingCardIndex) in pricingItems"
          :key="pricingCardIndex"
          class="flex flex-col max-w-lg text-gray-900 dark:text-gray-400"
        >
          <h3 class="font-semibold text-gray-500 uppercase dark:text-gray-400">
            {{ pricingCardItem.type }}
          </h3>
          <div class="flex items-baseline my-4">
            <span
              class="mr-2 text-5xl font-extrabold text-gray-900 dark:text-white"
            >
              {{
                pricingCardItem.currency +
                (activeBtn === true
                  ? pricingCardItem.price * 10
                  : pricingCardItem.price)
              }}
            </span>
            <span class="text-gray-500 dark:text-gray-400"
              >/{{ activeBtn === true ? "Annually" : "Monthly" }}</span
            >
          </div>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-300">
            {{ pricingCardItem.subtitle }}
          </p>
          <ul role="list" class="my-8 space-y-4 text-left">
            <li
              v-for="(featureItem, featureIndex) in pricingCardItem.features"
              :key="featureIndex"
              class="flex items-center space-x-3"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>{{ featureItem }}</span>
            </li>
          </ul>
          <NuxtLink
            :to="pricingCardItem.link"
            class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
          >
            Get started
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="flex items-start p-4 bg-white border justify-center border-gray-100 top-6 dark:bg-gray-700 dark:border-gray-600"
    >
      <div
        class="flex flex-col items-center mb-3 mr-4 md:items-center md:flex-row md:mb-0"
      >
        <a
          href="https://trader4.net/"
          class="flex items-center mb-2 border-gray-200 md:pe-7 md:me-4 md:border-e md:mb-0 dark:border-gray-600"
        >
          <span
            class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
          >
            T4 Enterprise
          </span>
        </a>
        <p
          class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
        >
          Are you looking for an enterprise services? We are here, We will be
          happy to hear your needs.
        </p>
      </div>
      <div class="flex items-end flex-shrink-0">
        <a
          href="#"
          class="px-5 py-2 mr-2 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Contact Us
        </a>
      </div>
    </div>

    <!-- Table Comes Here -->
    <PricingTable :headers="pricingTableHeaders" :items="pricingTableItems" />
  </section>
</template>

<script setup lang="ts">
const activeBtn = ref(false);

const pricingItems = ref<PricingCard[]>([
  {
    type: "Pro",
    price: 99,
    currency: "$",
    period: "month",
    link: "/",
    subtitle:
      "Best option for personal use and for your next generation of trading.",
    features: [
      "Supply Demand, Algo Portfolio, and Bridge",
      "Risk Management of Financial Engineering",
      "No setup, monthly, or hidden fees",
    ],
  },
  {
    type: "ADVANCE",
    price: 999,
    currency: "$",
    period: "month",
    link: "/",
    subtitle:
      "Best option for advance users, AI lovers, to start as Algo Trader.",
    features: [
      "Support from Trading Framework",
      "Data & Support Priority",
      "Rich Feature Access to Algo Trading",
      "Cloud StrategyQuant X Servers",
      "Money Management & Trading Plan",
      "AI Assitant & AI Coaching",
    ],
  },
  {
    type: "CORPORATE",
    price: 3999,
    currency: "$",
    period: "month",
    link: "/",
    subtitle:
      "Best option for companies to get trading as a service and/or infrastructure.",
    features: [
      "Trend Friend, Tchimoku, and Dashboard X",
      "Cash Flows and Portfolio Management",
      "ML Processing & FaaS",
      ">0.9 Fitness Guarantee in Algo Trading",
      "Full Report + AI Recommendations",
      "Up to 100 Algorithms/Basket",
      "Under One Hour Support",
      "Custom Cluster for Services",
      "1,000,000 Daily APIs Credit",
      "Auto Live Stream and Social Integrations",
      "Custom Cloud Images",
    ],
  },
]);

const pricingTableHeaders: ITableHeader[] = [
  {
    text: "General",
    value: "general",
  },
  {
    text: "Professional Edition",
    value: "pro",
  },
  {
    text: "Advance Edition",
    value: "advance",
  },
  {
    text: "Corporate Edition",
    value: "corporate",
  },
];

const pricingTableItems = [
  {
    general: "Live Connection",
    pro: { icon: "mdi-check", color: "green-500" },
    advance: { icon: "mdi-check", color: "green-500" },
    corporate: { icon: "mdi-close", color: "red-500" },
  },
  {
    general: "Data Priority",
    pro: { icon: "mdi-check", color: "green-500" },
    advance: { icon: "mdi-check", color: "green-500" },
    corporate: { icon: "mdi-close", color: "red-500" },
  },
  {
    general: {
      tooltipText: "a simple tooltip from support with a drawer (help center)",
      text: "Support",
      hasDrawer: true,
    },
    pro: ["Ticket", "Email (24 Hours)"],
    advance: ["Ticket", "Email", "Phone (8 Hours)"],
    corporate: ["Ticket", "Email", "Phone (>One Hour)"],
  },
  {
    general: {
      tooltipText:
        "a simple tooltip from markets without a drawer (help center)",
      text: "Markets",
    },
    pro: ["Forex ", "Stocks", "Crypto"],
    advance: ["Forex ", "Stocks", "Crypto", "Commodities", "Indices"],
    corporate: [
      "Forex ",
      "Stocks",
      "Crypto",
      "Commodities",
      "Indices",
      "Futures",
      "Bond",
      "Options",
    ],
  },
];
</script>
