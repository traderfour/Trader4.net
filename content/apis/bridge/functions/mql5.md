---
aside: false
---

<!--@include: ../../partials/libraries.md-->

<CodeBox lang="Restful" method="webSocket" endpoint="/bridge-client">

# Bridge

<template #params>

- `trading_account` <span>String</span>, The id of trading account.
- `command` <span>String</span>, name of function.
- `arguments` <span>Array of JSON Objects</span>, arguments.
  - `symbol` <span>String</span>,symbol.
  - `period` <span>String</span>,period.
  - `step` <span>String</span>,step.
  - `maximum` <span>String</span>,maximum.

</template>
<!--@include: /partials/authorization.md-->

<template #code>

```bash

  ws://api.trader4.net/bridge-client
    -d '{
    "trading_account":"98b9d304-5132-4bf8-b491-cce462a1803b" ,
        "command"   : "OrderOpenTime",
        "arguments" : {
          "symbol"  : "XAUUSD",
          "period"  : "PERIOD_M5",
           "step"   : "0.54",
          "maximum" : "0.91"
    }
  }'
```

</template>

</CodeBox>


<CodeBox lang="Restful" method="webSocket" endpoint="/bridge-mql">

# Bridge-Mql

<template #params>

- `result` <span>String</span>,result .

</template>
<!--@include: /partials/authorization.md-->

<template #code>

```bash

  ws://api.trader4.net/bridge-mql
    -d '{
    "payload" : {
        "result" : "67.9"
    }
  }'
```

</template>

</CodeBox>



<CodeBox lang="Restful" method="POST" endpoint="/v1/bridge/webhook">

# Webhook


<template #params>

- `app_key` <span>String</span>,Authorization Key .
- `order` <span>String</span>, Type Of Order.
- `instrument` <span>String,Min:3,Max:255 </span>, Symbol.
- `stop_loss` <span>String,Max:255</span>,stop_loss.
- `target_price` <span>String,Max:255</span>,target_price.
- `risk` <span>String,Max:255</span>,risk.
- `risk_mode  (optional)` <span>String</span>,risk_mode.
- `trading_account (optional)` <span>String</span>,identity on trading_account table.

</template>

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/bridge/webhook
   -d '{
    "app_key"         : "98b9d304-5132-4bf8-b491-cce462a1803b" ,
    "order"           : "OP_SELL",
    "instrument"      : "XAUUSD" ,
    "stop_loss"       : "1.234",
    "target_price"    : "1.378" ,
    "risk"            : "3",
    "risk_mode"       : "balance",
    "trading_account" : ""
}'

```

</template>

</CodeBox>

<Response jfile="v1/bridge/webhook" >

<template #result>

- `app_key` <span>String</span>,Authorization Key .
- `order` <span>String</span>, Type Of Order.
- `instrument` <span>String,Min:3,Max:255 </span>, Symbol.
- `stop_loss` <span>String,Max:255</span>,stop_loss.
- `target_price` <span>String,Max:255</span>,target_price.
- `risk` <span>String,Max:255</span>,risk.
- `risk_mode  (optional)` <span>String</span>,risk_mode.
- `trading_account (optional)` <span>String</span>,identity on trading_account table.

</template>

</Response>
