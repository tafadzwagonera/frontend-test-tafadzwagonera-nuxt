<script lang="ts" setup>
import { Card } from '#components'

enum Account {
  CreditCards = 'credit_cards',
  CurrentAccounts = 'current_accounts',
}

const { data } = await useFetch<Record<string, any | null>>(
  'https://api.jsonbin.io/v3/b/6107fbe9f14b8b153e05e714?meta=false',
)

const hasCourtAndInsolvencies = () =>
  data.value?.personal.publicInfo.courtAndInsolvencies.length > 0

const hasHighCreditUtilization = () =>
  data.value?.accounts.some(
    (account: Record<string, any>) =>
      account.accountCategory === Account.CreditCards &&
      account.overview.utilisation >= 0.5,
  )

const isOnElectoralRoll = () =>
  data.value?.personal.electoralRoll.some(
    (electoralRoll: Record<string, any>) => electoralRoll.current === true,
  )
</script>

<template>
  <main class="p-6">
    <h1 class="font-bold leading-wide mb-6 text-[rgb(38_54_72)] text-xl">Insights</h1>
    <div class="gap-6 grid grid-cols-[repeat(3,_minmax(160px,_1fr))] md:grid-cols-[repeat(3,_minmax(320px,_1fr))] lg:grid-cols-2 xl:grid-cols-3 overflow-x-scroll lg:overflow-auto pb-6">
      <Card
        :body="'Bankruptcies and individual voluntary arrangements can damage your score'"
        :header="'Public information'"
        :is-on-track="!hasCourtAndInsolvencies()"
      />
      <Card
        :body="'Using more than 50% of your available credit can damage your score'"
        :header="'Credit utilisation'"
        :is-on-track="!hasHighCreditUtilization()"
      />
      <Card
        :body="'Being on the electoral roll can improve your score'"
        :header="'Electoral roll'"
        :is-on-track="isOnElectoralRoll()"
      />
    </div>
  </main>
</template>
