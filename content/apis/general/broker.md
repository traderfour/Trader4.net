---
aside: false
---

<!--@include: ../partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/brokers">

# List

Using our broker list Method, users are now able to easily retrieve brokers list.

<!--@include: /partials/authorization.md-->

<template #params>

- `market_id` (optional) <span>String</span>, Filter by market id.
- `name` (optional) <span>String</span>, Filter by broker name.
- `description` (optional) <span>String</span>, Filter by description.
- `country` (optional) <span>String</span>, Filter by country.
- `account_currencies` (optional) <span>String</span>, Filter by account_currencies.
- `phone` (optional) <span>String</span>, Filter by phone.
- `fax` (optional) <span>String</span>, Filter by fax.
- `email` (optional) <span>String</span>, Filter by email.
- `languages` (optional) <span>String</span>, Filter by languages.
- `is_dealing_desk` (optional) <span>Boolean</span>, Filter by is_dealing_desk.
- `is_stp` (optional) <span>Boolean</span>, Filter by is_stp.
- `is_ecn` (optional) <span>Boolean</span>, Filter by is_ecn.
- `is_market_maker` (optional) <span>Boolean</span>, Filter by is_market_maker.
- `is_ndd` (optional) <span>Boolean</span>, Filter by is_ndd.
- `is_dma` (optional) <span>Boolean</span>, Filter by is_dma.
- `is_prime_of_prime` (optional) <span>Boolean</span>, Filter by is_prime_of_prime.
- `us_clients` (optional) <span>Boolean</span>, Filter by us_clients.
- `has_swap_free` (optional) <span>Boolean</span>, Filter by has_swap_free.
- `has_demo_account` (optional) <span>Boolean</span>, Filter by has_demo_account.
- `has_segregated_account` (optional) <span>Boolean</span>, Filter by has_segregated_account.
- `interest_on_margin` (optional) <span>Boolean</span>, Filter by interest_on_margin.
- `has_managed_account` (optional) <span>Boolean</span>, Filter by has_managed_account.
- `has_mobile_trading` (optional) <span>Boolean</span>, Filter by has_mobile_trading.
- `has_web_trading` (optional) <span>Boolean</span>, Filter by has_web_trading.
- `has_api` (optional) <span>Boolean</span>, Filter by has_api.
- `has_socket` (optional) <span>Boolean</span>, Filter by has_socket.
- `has_oco_orders` (optional) <span>Boolean</span>, Filter by has_oco_orders.
- `allow_hedge` (optional) <span>Boolean</span>, Filter by allow_hedge.
- `has_trailing_stops` (optional) <span>Boolean</span>, Filter by has_trailing_stops.
- `has_one_click_trading` (optional) <span>Boolean</span>, Filter by has_one_click_trading.
- `has_bonus` (optional) <span>Boolean</span>, Filter by has_bonus.
- `has_contests` (optional) <span>Boolean</span>, Filter by has_contests.
- `has_stocks` (optional) <span>Boolean</span>, Filter by has_stocks.
- `has_options` (optional) <span>Boolean</span>, Filter by has_options.
- `has_futures` (optional) <span>Boolean</span>, Filter by has_futures.
- `has_indices` (optional) <span>Boolean</span>, Filter by has_indices.
- `has_commodities` (optional) <span>Boolean</span>, Filter by has_commodities.
- `has_energies` (optional) <span>Boolean</span>, Filter by has_energies.
- `has_shares` (optional) <span>Boolean</span>, Filter by has_shares.
- `has_spread_betting` (optional) <span>Boolean</span>, Filter by has_spread_betting.
- `has_cfd` (optional) <span>Boolean</span>, Filter by has_cfd.
- `has_cryptocurrencies` (optional) <span>Boolean</span>, Filter by has_cryptocurrencies.
- `five_decimals` (optional) <span>Boolean</span>, Filter by five_decimals.
- `allow_scalping` (optional) <span>Boolean</span>, Filter by allow_scalping.
- `allow_super_scalping` (optional) <span>Boolean</span>, Filter by allow_super_scalping.
- `offices` (optional) <span>Array</span>, Filter by offices.
- `regulations` (optional) <span>Array</span>, Filter by regulations. Check out [Regulations List](#regulations-list).
- `funding_methods` (optional) <span>Array</span>, Filter by funding_methods.
- `withdrawal_methods` (optional) <span>Array</span>, Filter by withdrawal_methods.
- `money_managers` (optional) <span>Array</span>, Filter by money_managers.
- `availability` (optional) <span>Array</span>, Filter by availability.
- `status` (optional) <span>Integer</span>, Filter by status code. Check out [Status Codes](#status-codes).
- `spread` (optional) <span>Integer</span>, Filter by spread code. Check out [Spread Codes](#spread-codes).
- `sort` (optional) <span>String</span>, sort brokers.
    - sort[name]=asc
    - sort[spread]=asc
    - sort[status]=asc

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/brokers
```

</template>

</CodeBox>

<Response jfile="v1/broker/list" >
<template #result>

- `id` <span>String</span> ID of broker.
- `market_id` <span>String</span>, market id.
- `name` <span>String</span> Name of broker.
- `logo` <span>String</span> logo.
- `website` <span>String</span> website.
- `description` <span>String</span>, description.
- `is_dealing_desk` <span>Boolean</span>, is dealing desk.
- `is_stp` <span>Boolean</span>, is stp.
- `is_ecn` <span>Boolean</span>, is ecn.
- `is_market_maker` <span>Boolean</span>, is market maker.
- `is_ndd` <span>Boolean</span>, is ndd.
- `is_dma` <span>Boolean</span>, is dma.
- `is_prime_of_prime` <span>Boolean</span>, is prime of prime.
- `has_swap_free` <span>Boolean</span>, has swap free.
- `has_demo_account` <span>Boolean</span>, has demo account.
- `has_mobile_trading` <span>Boolean</span>, has mobile trading.
- `has_web_trading` <span>Boolean</span>, has web trading.
- `status` <span>Integer</span>, status code. Check out [Status Codes](#status-codes).

</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/general/brokers/:id">

# Details

Using our broker details method, users are now able to easily retrieve information of a broker.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/brokers/:id
```

</template>

</CodeBox>

<Response jfile="v1/broker/read" >
<template #result>

- `id` <span>String</span> ID of broker.
- `market_id` <span>String</span>, market id.
- `name` <span>String</span> Name of broker.
- `logo` <span>String</span> logo.
- `website` <span>String</span> website.
- `description` <span>String</span>, description.
- `country` <span>String</span>, countries separated by comma. Check out [ISO 3166-1 Alpha-3](https://www.iso.org/iso-3166-country-codes.html).
- `account_currencies` <span>String</span>, currencies separated by comma. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `phone` <span>String</span>, phone.
- `fax` <span>String</span>, fax.
- `email` <span>String</span>, email.
- `languages` <span>String</span>, languages. Check out [ISO 639-1](https://www.iso.org/iso-639-language-codes.html).
- `is_dealing_desk` <span>Boolean</span>, is dealing desk.
- `is_stp` <span>Boolean</span>, is stp.
- `is_ecn` <span>Boolean</span>, is ecn.
- `is_market_maker` <span>Boolean</span>, is market maker.
- `is_ndd` <span>Boolean</span>, is ndd.
- `is_dma` <span>Boolean</span>, is dma.
- `is_prime_of_prime` <span>Boolean</span>, is prime of prime.
- `us_clients` <span>Boolean</span>, us clients.
- `has_swap_free` <span>Boolean</span>, has swap free.
- `has_demo_account` <span>Boolean</span>, has demo account.
- `has_segregated_account` <span>Boolean</span>, has segregated account.
- `interest_on_margin` <span>Boolean</span>, interest on margin.
- `has_managed_account` <span>Boolean</span>, has managed account.
- `has_mobile_trading` <span>Boolean</span>, has mobile trading.
- `has_web_trading` <span>Boolean</span>, has web trading.
- `has_api` <span>Boolean</span>, has api.
- `has_socket` <span>Boolean</span>, has socket.
- `has_oco_orders` <span>Boolean</span>, has oco orders.
- `allow_hedge` <span>Boolean</span>, allow hedge.
- `has_trailing_stops` <span>Boolean</span>, has trailing stops.
- `has_one_click_trading` <span>Boolean</span>, has one click trading.
- `has_bonus` <span>Boolean</span>, has bonus.
- `has_contests` <span>Boolean</span>, has contests.
- `has_stocks` <span>Boolean</span>, has stocks.
- `has_options` <span>Boolean</span>, has options.
- `has_futures` <span>Boolean</span>, has futures.
- `has_indices` <span>Boolean</span>, has indices.
- `has_commodities` <span>Boolean</span>, has commodities.
- `has_energies` <span>Boolean</span>, has energies.
- `has_shares` <span>Boolean</span>, has shares.
- `has_spread_betting` <span>Boolean</span>, has spread betting.
- `has_cfd` <span>Boolean</span>, has cfd.
- `has_cryptocurrencies` <span>Boolean</span>, has cryptocurrencies.
- `five_decimals` <span>Boolean</span>, five decimals.
- `allow_scalping` <span>Boolean</span>, allow scalping.
- `allow_super_scalping` <span>Boolean</span>, allow super scalping.
- `offices` <span>Array of JSON Objects</span>, offices.
  - `country` <span>String</span>, country of office. Check out [ISO 3166-1 Alpha-3](https://www.iso.org/iso-3166-country-codes.html).
  - `city` <span>String</span>, city of office.
  - `address` <span>String</span>, address of office.
  - `phones` <span>Array of Strings</span>, phone numbers of office.
- `regulations` <span>Array of JSON Objects</span>, regulations.
  - `name` <span>String</span>, name of regulation. Check out [Regulations List](#regulations-list).
  - `registered_company` <span>String</span>, name of registered company.
  - `registered_office` <span>String</span>, address of registered office.
  - `license` <span>String</span>, license number of company.
  - `company_registered_number` <span>String</span>, registration number of company.
  - `description` <span>String</span>, description.
- `funding_methods` <span>Array of JSON Objects</span>, funding methods.
  - `currency` <span>String</span>, currency. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
  - `fee` <span>JSON Object</span>, funding method fee.
    - `deposit` <span>Float</span>, deposit fee amount.
    - `calculation_mode` <span>String</span>, unit of fee.
  - `processing_time` <span>JSON Object</span>, funding method processing time.
    - `deposit` <span>Integer</span>, deposit processing time.
    - `calculation_mode` <span>String</span>, unit of processing time.
  - `limitations` <span>JSON Object</span>, funding method limitations.
    - `deposit` <span>JSON Object</span>, deposit limitations.
      - `min` <span>Integer</span>, minimum deposit limitation.
      - `max` <span>Integer</span>, maximum deposit limitation.
      - `calculation_mode` <span>String</span>, unit of deposit limitation.
- `withdrawal_methods` <span>Array of JSON Objects</span>, withdrawal methods.
  - `currency` <span>String</span>, currency. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
  - `fee` <span>JSON Object</span>, withdrawal method fee.
    - `withdrawal` <span>Float</span>, withdrawal fee amount.
    - `calculation_mode` <span>String</span>, unit of fee.
  - `processing_time` <span>JSON Object</span>, withdrawal method processing time.
    - `withdrawal` <span>Integer</span>, withdrawal processing time.
    - `calculation_mode` <span>String</span>, unit of processing time.
  - `limitations` <span>JSON Object</span>, withdrawal method limitation.
    - `withdrawal` <span>JSON Object</span>, withdrawal limitations.
      - `min` <span>Integer</span>, minimum withdrawal limitation.
      - `max` <span>Integer</span>, maximum withdrawal limitation.
      - `calculation_mode` <span>String</span>, unit of withdrawal limitation.
- `money_managers` <span>Array of JSON Objects</span>, money managers.
  - `name` <span>String</span>, name of money manager.
  - `description` <span>String</span>, description of money manager.
- `availability` <span>Array of JSON Objects</span>, availability.
  - `name` <span>String</span>, name of contact platform.
  - `numbers` <span>Array of Strings</span>, phone numbers of contact method.
- `status` <span>Integer</span>, status code. Check out [Status Codes](#status-codes).
- `spread` <span>Integer</span>, spread code. Check out [Spread Codes](#spread-codes).
- `platforms` <span>Array of JSON Objects</span>, platforms of broker. Check out [Platforms List](https://next-docs.trader4.net/en/api/general/platform?lang=restful&pos=0#list).

</template>
</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/brokers/:id/platforms">

# Platforms List

Using our platforms list method, users are now able to easily retrieve platforms of a broker.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/brokers/:id/platforms
```

</template>

</CodeBox>

<Response jfile="v1/platform/list" >
<template #result>

- `id` <span>String</span> ID of Platform .
- `title` <span>String</span> title of Platform .
- `slug` <span>String</span> slug of Platform .
- `icon` <span>String</span> icon of Platform .
- `cover` <span>String</span> cover of Platform .
- `title` <span>String</span> title of Platform .
- `description` <span>String</span> description of Platform .
- `content` <span>String</span> content of Platform .
- `url` <span>String</span> url of Platform .
- `email` <span>String</span> email  .
- `privacy_policy` <span>String</span> privacy_policy  .
- `terms_of_use` <span>String</span> terms_of_use  .
- `address` <span>String</span> address  .
- `permissions` <span>String</span> permissions  .
- `oss` <span>String</span> oss  .
- `status` <span>Integer</span> status  .


</template>
</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/brokers/:broker_id/platforms/
:platfrom_id/instruments">

# Instruments List

Using our instruments list method, users are now able to easily retrieve instruments of a broker.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/brokers/:broker_id/platforms/:platfrom_id/instruments
```

</template>

</CodeBox>

<Response jfile="v1/instrument/list" >
<template #result>

- `id` <span>String</span> ID of Instruments .
- `name` <span>String</span> name of Instruments .
- `slug` <span>String</span> slug.
- `logo` <span>String</span> logo of Instruments.
- `description` <span>String</span> description of Instruments .
- `sector` <span>Integer</span> sector.
- `industry` <span>Integer</span> industry.
- `digits` <span>Integer</span> digits.
- `contract_size` <span>Integer</span> contract_size.
- `spread` <span>Integer</span> spread.
- `stops_level` <span>Integer</span> stops_level.
- `margin_currency` <span>String</span> margin_currency.
- `profit_currency` <span>String</span> profit_currency.
- `calculation_mode` <span>Integer</span> calculation_mode.
- `tick_size` <span>String</span> tick_size.
- `tick_value` <span>Integer</span> tick_value.
- `chart_mode` <span>Integer</span> chart_mode.
- `margin_rate` <span>Array of JSON Objects</span>, margin_rate.
  - `market_buy` <span>Array of JSON Objects</span>, margin_rate.
    - `initial` <span>Integer</span> initial.
    - `maintenance` <span>Integer</span> maintenance.
  - `market_sell` <span>Array of JSON Objects</span>, margin_rate.
    - `initial` <span>Integer</span> initial.
    - `maintenance` <span>Integer</span> maintenance.
  - `buy_limit` <span>Array of JSON Objects</span>, margin_rate.
    - `initial` <span>Integer</span> initial.
    - `maintenance` <span>Integer</span> maintenance.
  - `sell_limit` <span>Array of JSON Objects</span>, margin_rate.
    - `initial` <span>Integer</span> initial.
    - `maintenance` <span>Integer</span> maintenance.
  - `buy_stop` <span>Array of JSON Objects</span>, margin_rate.
    - `initial` <span>Integer</span> initial.
    - `maintenance` <span>Integer</span> maintenance.
  - `sell_stop` <span>Array of JSON Objects</span>, margin_rate.
    - `initial` <span>Integer</span> initial.
    - `maintenance` <span>Integer</span> maintenance. 
  - `buy_stop_limit` <span>Array of JSON Objects</span>, margin_rate.
    - `initial` <span>Integer</span> initial.
    - `maintenance` <span>Integer</span> maintenance.
  - `sell_stop_limit` <span>Array of JSON Objects</span>, margin_rate.
    - `initial` <span>Integer</span> initial.
    - `maintenance` <span>Integer</span> maintenance.
- `trade_mode` <span>Integer</span> trade_mode.
- `execution_mode` <span>Integer</span> execution_mode.
- `filling_mode` <span>Integer</span> filling_mode.
- `expiration_mode` <span>Integer</span> expiration_mode.
- `order_mode` <span>Integer</span> order_mode.
- `swap_mode` <span>Integer</span> swap_mode.
- `minimal_volume` <span>Float</span> minimal_volume.
- `maximal_volume` <span>Float</span> maximal_volume.
- `volume_step` <span>Float</span> volume_step.
- `swap_long` <span>Float</span> swap_long.
- `swap_short` <span>Float</span> swap_short.
- `swap_rate` <span>Array of JSON Objects</span>, swap_rate.
  - `day` <span>String</span> day.
  - `rate` <span>Integer</span> rate.
- `sessions` <span>Array of JSON Objects</span>, swap_rate.
  - `day` <span>String</span> day.
  - `quote_start` <span>String</span> quote_start.
  - `quote_end` <span>String</span> quote_end.
  - `trade_start` <span>String</span> trade_start.
  - `trade_end` <span>String</span> trade_end.
- `max_leverage` <span>Integer</span> max_leverage.
- `min_lot_size` <span>String</span> min_lot_size.
- `max_lot_size` <span>String</span> max_lot_size.
- `commission` <span>String</span> commission.
- `commission_calculation_mode` <span>String</span> commission_calculation_mode.
- `status` <span>Integer</span> status.


</template>
</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/brokers/regulations">

# Regulations List

Using our Regulations list Method, users are now able to easily retrieve Regulations list.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/brokers/regulations
```

</template>

</CodeBox>

<Response jfile="v1/broker/regulations" >
<template #result>

</template>
</Response>


### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>11400</code> | <pre>ACTIVE</pre>   | The broker is active and have full functionality. |
| <code>11401</code> | <pre>INACTIVE</pre> | The broker is inactive and just can read data.    |

### Spread Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>11500</code> | <pre>WIDE</pre>     | Wide Spread.                                      |
| <code>11501</code> | <pre>FIXED</pre>    | Fixed Spread.                                     |
| <code>11502</code> | <pre>HYBRID</pre>   | Hybrid Spread.                                    |
