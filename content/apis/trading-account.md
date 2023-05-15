---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/trading-accounts">

# List

Using our List Method, users are now able to easily retrieve their trading-account information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/trading-accounts
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/list" >

<template #result>

- `uuid` <span>String</span>, The id of trading account.
- `name` <span>String</span>, The name of trading account.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of trading account.
- `trade_mode` <span>integer</span> Check out [Trade Mode Table](#trade-mode-table).
- `margin_type` <span>integer</span> Check out [Margin Type Table](#margin-type-table).
- `order_limit` <span>integer</span> The order limit of trading account.
- `trade_allowed` <span>Boolean</span> Determines if the trading account is allowed to trade.
- `hedge` <span>boolean</span> The hedge of trading account.
- `capital_road` <span>Boolean</span> The capital road of trading account.
- `server` <span>String</span> The name of server.
- `link` <span>String</span> Link of trading account.
- `currency` <span>String</span> Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `leverage` <span>Integer</span> The leverage of trading account.
- `stopout_level` <span>Integer</span> The stopout level of trading account.
- `market` <span>Integer</span> The market of trading account.
- `report` <span>Integer</span> The report of trading account.
- `status` <span>Integer</span>  Check out [Trading Account Status Table](#trading-account-status-table).
- `broker`<span>Array of JSON Objects</span>, broker.
    - `name` <span>String</span> The name of broker.
    - `logo` <span>String</span> The logo of broker.
- `market` <span>Array of JSON Objects</span>, market.
    - `name` <span>String</span> The name of market.
    - `slug` <span>String</span> slug.
    - `icon` <span>String</span> the icon of market.
- `platforms` <span>Array of JSON Objects</span>, market.
    - `title` <span>String</span> The title of platform.
    - `slug` <span>String</span> slug.
    - `icon` <span>String</span> the icon of platform.

</template>

</Response>

<CodeBox lang="Restful" method="POST" endpoint="/v1/trading-accounts">

# Create

Using our Create Method, users are now able to easily store their trading-account information.

<template #params>

- `name` <span>String</span>, The name of trading account.
- `broker_id` <span>integer</span>, The id of broker.
- `platform_id` <span>integer</span>, The id of platform.
- `identity` <span>String</span>, The identity of trading account.
- `secret` <span>String</span>, The secret of trading account.
- `server` <span>String</span> The name of server.
- `link` (optional) <span>String</span> Link of trading account.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/trading-accounts \
  -d '{
    "name": "test name",
    "broker_id": "98gdc2a2-4251-4619-9bb6-3905d22ber88",
    "platform_id": "98c3828c-2bb8-4fe2-b280-f8a5b4b3446f",
    "identity": "8946511845611",
    "secret": "hrejrl32khihed87984rjfuhkrh4r63rhewidhyyyu3hi4ru6r34irkhb",
    "server": "test server",
    "link": "https://www.icmarkets.com/mt4/download/icmarketsdemo.exe"
  }
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/create" >

<template #result>

- `uuid` <span>String</span>, The id of trading account.
- `name` <span>String</span>, The name of trading account.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of trading account.
- `trade_mode` <span>integer</span> Check out [Trade Mode Table](#trade-mode-table).
- `margin_type` <span>integer</span> Check out [Margin Type Table](#margin-type-table).
- `order_limit` <span>integer</span> The order limit of trading account.
- `trade_allowed` <span>Boolean</span> Determines if the trading account is allowed to trade.
- `hedge` <span>boolean</span> The hedge of trading account.
- `capital_road` <span>Boolean</span> The capital road of trading account.
- `server` <span>String</span> The name of server.
- `link` <span>String</span> Link of trading account.
- `currency` <span>String</span> Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `leverage` <span>Integer</span> The leverage of trading account.
- `stopout_level` <span>Integer</span> The stopout level of trading account.
- `report` <span>Integer</span> The report of trading account.
- `status` <span>Integer</span>  Check out [Trading Account Status Table](#trading-account-status-table).
- `balance` <span>Integer</span> Balance of trading account.
- `credit` <span>Integer</span> Credit of trading account.
- `equity` <span>String</span> Equity of trading account.
- `margin` <span>String</span> Margin of trading account.
- `free_margin` <span>String</span> Free margin of trading account.
- `margin_level` <span>String</span> Margin level of trading account.
- `broker`<span>Array of JSON Objects</span>, broker.
  - `name` <span>String</span> The name of broker.
  - `logo` <span>String</span> The logo of broker.
- `market` <span>Array of JSON Objects</span>, market.
  - `name` <span>String</span> The name of market.
  - `slug` <span>String</span> slug.
  - `icon` <span>String</span> the icon of market.
- `platforms` <span>Array of JSON Objects</span>, market.
  - `title` <span>String</span> The title of platform.
  - `slug` <span>String</span> slug.
  - `icon` <span>String</span> the icon of platform.
</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/trading-accounts/:id">

# Read

Using our read Method, users are now able to see information of a trading account.

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/trading-accounts/:id
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/single" >

<template #result>


- `uuid` <span>String</span>, The id of trading account.
- `name` <span>String</span>, The name of trading account.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of trading account.
- `trade_mode` <span>integer</span> Check out [Trade Mode Table](#trade-mode-table).
- `margin_type` <span>integer</span> Check out [Margin Type Table](#margin-type-table).
- `order_limit` <span>integer</span> The order limit of trading account.
- `trade_allowed` <span>Boolean</span> Determines if the trading account is allowed to trade.
- `hedge` <span>boolean</span> The hedge of trading account.
- `capital_road` <span>Boolean</span> The capital road of trading account.
- `server` <span>String</span> The name of server.
- `link` <span>String</span> Link of trading account.
- `currency` <span>String</span> Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `leverage` <span>Integer</span> The leverage of trading account.
- `stopout_level` <span>Integer</span> The stopout level of trading account.
- `market` <span>Integer</span> The market of trading account.
- `report` <span>Integer</span> The report of trading account.
- `status` <span>Integer</span>  Check out [Trading Account Status Table](#trading-account-status-table).
- `broker`<span>Array of JSON Objects</span>, broker.
    - `name` <span>String</span> The name of broker.
    - `logo` <span>String</span> The logo of broker.
- `market` <span>Array of JSON Objects</span>, market.
    - `name` <span>String</span> The name of market.
    - `slug` <span>String</span> slug.
    - `icon` <span>String</span> the icon of market.
- `platforms` <span>Array of JSON Objects</span>, market.
    - `title` <span>String</span> The title of platform.
    - `slug` <span>String</span> slug.
    - `icon` <span>String</span> the icon of platform.

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/trading-accounts">

# Update
Using our Update Method, users are now able to easily update their trading accounts information.

<!--@include: /partials/authorization.md-->

<template #params>

- `name` <span>String</span>, The name of trading account.
- `broker_id` <span>integer</span>, The id of broker.
- `market_id` <span>integer</span>, The id of market.
- `platform_id` <span>integer</span>, The id of platform.
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of trading account.
- `secret` <span>String</span>, The secret of trading account.
- `server` <span>String</span> The name of server.
- `link` (optional) <span>String</span> Link of trading account.

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/trading-accounts \
    -d '{
    "name": "test name 2",
    "broker_id": "98gdc2a2-4251-4619-9bb6-3905d22ber39",
    "market_id": "98bdf2a1-80e9-451b-bad4-60d2eb628cfe",
    "platform_id": "98c3828c-2bb8-4fe2-b280-f8a5b4b3446f",
    "company": "test company 2",
    "identity": "8946511845611",
    "secret": "hrejrl32khihed87984rjfuhkrh4r63rhewidhyyyu3hi4ru6r34irkhb",
    "server": "test server 2",
    "link": "https://www.icmarkets.com/mt4/download/icmarketsdemo.exe"
   }
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/update" >

<template #result>

- `uuid` <span>String</span>, The id of trading account.
- `name` <span>String</span>, The name of trading account.
- `broker` <span>integer</span>, The type of broker. Check out [Brokers Table](#brokers-table).
- `company` <span>String</span>, The name of company.
- `identity` <span>String</span>, The identity of trading account.
- `trade_mode` <span>integer</span> Check out [Trade Mode Table](#trade-mode-table).
- `margin_type` <span>integer</span> Check out [Margin Type Table](#margin-type-table).
- `order_limit` <span>integer</span> The order limit of trading account.
- `trade_allowed` <span>Boolean</span> Determines if the trading account is allowed to trade.
- `hedge` <span>boolean</span> The hedge of trading account.
- `capital_road` <span>Boolean</span> The capital road of trading account.
- `server` <span>String</span> The name of server.
- `link` <span>String</span> Link of trading account.
- `currency` <span>String</span> Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `leverage` <span>Integer</span> The leverage of trading account.
- `stopout_level` <span>Integer</span> The stopout level of trading account.
- `report` <span>Integer</span> The report of trading account.
- `status` <span>Integer</span>  Check out [Trading Account Status Table](#trading-account-status-table).
- `balance` <span>Integer</span> Balance of trading account.
- `credit` <span>Integer</span> Credit of trading account.
- `equity` <span>String</span> Equity of trading account.
- `margin` <span>String</span> Margin of trading account.
- `free_margin` <span>String</span> Free margin of trading account.
- `margin_level` <span>String</span> Margin level of trading account.
- `broker`<span>Array of JSON Objects</span>, broker.
  - `name` <span>String</span> The name of broker.
  - `logo` <span>String</span> The logo of broker.
- `market` <span>Array of JSON Objects</span>, market.
  - `name` <span>String</span> The name of market.
  - `slug` <span>String</span> slug.
  - `icon` <span>String</span> the icon of market.
- `platform` <span>Array of JSON Objects</span>, market.
  - `title` <span>String</span> The title of platform.
  - `slug` <span>String</span> slug.
  - `icon` <span>String</span> the icon of platform.
</template>

</Response>


<CodeBox lang="Restful" method="DELETE" endpoint="/v1/trading-accounts/:id">

# Delete
Using our Delete Method, users are now able to easily delete their trading accounts.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request DELETE \
  https://api.trader4.net/v1/trading-accounts/:id
```

</template>

</CodeBox>

<Response jfile="v1/trading-account/delete" >

<template #result>

- `id` <span>Integer</span>, The ID of trading account.

</template>

</Response>

## Trading Account Status Table

| CODE                    | CONSTANT                        | DESCRIPTION                                        |
|-------------------------|---------------------------------|----------------------------------------------------|
| <code>15001</code>      | <pre>registered</pre>           | Registered Trading Account.                        |
| <code>15002</code>      | <pre>pending</pre>              | Pending Trading Account.                           |
| <code>15003</code>      | <pre>active</pre>               | Active Trading Account.                            |
| <code>15004</code>      | <pre>suspended</pre>            | Suspended Trading Account.                         |
| <code>15005</code>      | <pre>closed</pre>               | Closed Trading Account.                            |
| <code>15006</code>      | <pre>canceled</pre>             | Canceled Trading Account.                          |
| <code>15007</code>      | <pre>deleted</pre>              | Deleted Trading Account.                           |
| <code>15008</code>      | <pre>rejected</pre>             | Rejected Trading Account.                          |
| <code>15009</code>      | <pre>pending_deletion</pre>     | Pending Deletion Trading Account.                  |
| <code>15010</code>      | <pre>pending_cancellation</pre> | Pending Cancellation Trading Account.              |
| <code>15011</code>      | <pre>pending_suspension</pre>   | Pending Suspension Trading Account.                |
| <code>15012</code>      | <pre>pending_activation</pre>   | Pending Activation Trading Account.                |


## Trade Mode Table

| CODE               | CONSTANT                | DESCRIPTION |
|--------------------|-------------------------|-------------|
| <code>15200</code> | <pre>DEMO</pre>      | DEMO.       |
| <code>15201</code> | <pre>CONTEST</pre>      | .       |
| <code>15202</code> | <pre>REAL</pre>      | REAL.       |


## Margin Type Table

| CODE               | CONSTANT                | DESCRIPTION                                     |
|--------------------|-------------------------|-------------------------------------------------|
| <code>15300</code> | <pre>RETAIL_NETTING</pre>      |                             |      
| <code>15301</code> | <pre>EXCHANGE</pre>      |                             |      
| <code>15302</code> | <pre>RETAIL_HEDGING</pre>      |                             |      

