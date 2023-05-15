---
aside: false
---

<!--@include: ../partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/instruments/:id">

# Details

Using our instrument details method, users are now able to easily retrieve information of an instrument.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/instruments/:id
```

</template>

</CodeBox>

<Response jfile="v1/instrument/read" >
<template #result>

- `id` <span>String</span> ID of instrument.
- `name` <span>String</span> Name of instrument.
- `slug` <span>String</span> Slug of instrument.
- `logo` <span>String</span> Logo of instrument.
- `description` <span>Text</span> Description of instrument.
- `status` <span>Integer</span>, status code. Check out [Status Codes](#status-codes).
- `sector` <span>Integer</span>, Sector code. Check out [Sector Codes](#sector-codes).
- `industry` <span>Integer</span>, Industry code. Check out [Industry Codes](#industry-codes).
- `digits` <span>Integer</span>, digits.
- `contract_size` <span>Integer</span>, contract_size.
- `spread` <span>Integer</span>, Spread code. Check out [Spread Codes](#spread-codes).
- `stops_level` <span>Integer</span>, stops_level.
- `margin_currency` <span>String</span>,margin_currency.
- `profit_currency` <span>String</span>,profit_currency .
- `calculation_mode` <span>Integer</span>, Calculation code. Check out [Calculation Mode Codes](#calculation-mode-codes).
- `tick_size` <span>String</span>,tick_size.
- `tick_value` <span>String</span>, tick_value.
- `chart_mode` <span>Integer</span>, Chart code. Check out [Chart Mode Codes](#chart-mode-codes).
- `margin_rate` <span>Array of JSON Objects</span>, margin_rate.
  - `market_buy` <span>Array of JSON Objects</span>, market_buy.
    - `initial` <span>Integer</span>, initial.
    - `maintenance` <span>Integer</span>, maintenance.
  - `market_sell` <span>Array of JSON Objects</span>, market_sell.
    - `initial` <span>Integer</span>, initial.
    - `maintenance` <span>Integer</span>, maintenance.
  - `buy_limit` <span>Array of JSON Objects</span>, buy_limit.
    - `initial` <span>Integer</span>, initial.
    - `maintenance` <span>Integer</span>, maintenance.
  - `sell_limit` <span>Array of JSON Objects</span>, sell_limit.
    - `initial` <span>Integer</span>, initial.
    - `maintenance` <span>Integer</span>, maintenance.
  - `buy_stop` <span>Array of JSON Objects</span>, buy_stop.
    - `initial` <span>Integer</span>, initial.
    - `maintenance` <span>Integer</span>, maintenance.
  - `sell_stop` <span>Array of JSON Objects</span>, sell_stop.
    - `initial` <span>Integer</span>, initial.
    - `maintenance` <span>Integer</span>, maintenance.
  - `buy_stop_limit` <span>Array of JSON Objects</span>, buy_stop_limit.
    - `initial` <span>Integer</span>, initial.
    - `maintenance` <span>Integer</span>, maintenance.
  - `sell_stop_limit` <span>Array of JSON Objects</span>, sell_stop_limit.
    - `initial` <span>Integer</span>, initial.
    - `maintenance` <span>Integer</span>, maintenance.
  - `trade_mode` <span>Integer</span>, Trade code. Check out [Trade Mode Codes](#trade-mode-codes).
  - `execution_mode` <span>Integer</span>, Execution code. Check out [Execution Mode Codes](#execution-mode-codes).
  - `gtc_mode` <span>Integer</span>, GTC code. Check out [ GTC Mode Codes](#gtc-mode-codes).
  - `filling_mode` <span>Integer</span>, Filling code. Check out [Filling Mode Codes](#filling-mode-codes).
  - `expiration_mode` <span>Integer</span>, Expiration code. Check out [Expiration Mode Codes](#expiration-mode-codes).
  - `order_mode` <span>Integer</span>, Order code. Check out [Order Mode Codes](#order-mode-codes).
  - `swap_mode` <span>Integer</span>, Swap code. Check out [Swap Mode Codes](#swap-mode-codes).
  - `minimal_volume` <span>Float</span>, minimal_volume.
  - `maximal_volume` <span>Float</span>,maximal_volume.
  - `volume_step` <span>Float</span>,volume_step.
  - `swap_long` <span>Float</span>,swap_long.
  - `swap_short` <span>Float</span>,swap_short.
- `swap_rate` <span>Array of JSON Objects</span>, swap_rate.
  - `day` <span>String</span>,day.
  - `rate` <span>Integer</span>,rate.
- `sessions` <span>Array of JSON Objects</span>, swap_rate.
  - `day` <span>String</span>,day.
  - `quote_start` <span>String</span>,quote_start.
  - `quote_end` <span>String</span>,quote_end.
  - `trade_start` <span>String</span>,trade_start.
  - `trade_end` <span>String</span>,trade_end.
- `max_leverage` <span>Integer</span> max_leverage.
- `min_lot_size` <span>String</span> min_lot_size.
- `max_lot_size` <span>String</span> max_lot_size.
- `commission` <span>String</span> commission.
- `commission_calculation_mode` <span>String</span> commission_calculation_mode.

</template>
</Response>

### Sector Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>12200</code> | <pre>UNDEFINED</pre>   | Undefined |
| <code>12201</code> | <pre>BASIC_MATERIALS</pre>   | Basic materials |
| <code>12202</code> | <pre>COMMUNICATION_SERVICES</pre>   | Communication services |
| <code>12203</code> | <pre>CONSUMER_CYCLICAL</pre>   | Consumer cyclical |
| <code>12204</code> | <pre>CONSUMER_DEFENSIVE</pre>   | Consumer defensive |
| <code>12205</code> | <pre>CURRENCY</pre>   | Currency |
| <code>12206</code> | <pre>CURRENCY_CRYPTO</pre>   | Currency crypto |
| <code>12207</code> | <pre>ENERGY</pre>   | Energy |
| <code>12208</code> | <pre>FINANCIAL</pre>   | Financial |
| <code>12209</code> | <pre>HEALTHCARE</pre>   | Healthcare |
| <code>12210</code> | <pre>INDUSTRIALS</pre>   | Industrials |
| <code>12211</code> | <pre>REAL_ESTATE</pre>   | Real estate |
| <code>12212</code> | <pre>TECHNOLOGY</pre>   | Technology |
| <code>12213</code> | <pre>UTILITIES</pre>   | Utilities |

### Industry Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>12300</code> | <pre>UNDEFINED</pre>   | Undefined |
| <code>12301</code> | <pre>AGRICULTURAL_INPUTS</pre>   | Agricultural inputs |
| <code>12302</code> | <pre>ALUMINIUM</pre>   | Aluminium |
| <code>12303</code> | <pre>BUILDING_MATERIALS</pre>   | Building materials |
| <code>12304</code> | <pre>CHEMICALS</pre>   | Chemicals |
| <code>12305</code> | <pre>COKING_COAL</pre>   | Coking coal |
| <code>12306</code> | <pre>COPPER</pre>   | Copper |
| <code>12307</code> | <pre>GOLD</pre>   | Gold |
| <code>12308</code> | <pre>LUMBER_WOOD</pre>   | Lumber wood |
| <code>12309</code> | <pre>INDUSTRIAL_METALS</pre>   | Industrial metals |
| <code>12310</code> | <pre>PRECIOUS_METALS</pre>   | Precious metals |
| <code>12311</code> | <pre>PAPER</pre>   | Paper |
| <code>12312</code> | <pre>SILVER</pre>   | Silver |
| <code>12313</code> | <pre>SPECIALTY_CHEMICALS</pre>   | Specialty chemicals |
| <code>12314</code> | <pre>STEEL</pre>   | Steel |
| <code>12315</code> | <pre>ADVERTISING</pre>   | Advertising |
| <code>12316</code> | <pre>BROADCASTING</pre>   | Broadcasting |
| <code>12317</code> | <pre>GAMING_MULTIMEDIA</pre>   | Gaming multimedia |
| <code>12318</code> | <pre>ENTERTAINMENT</pre>   | Entertainment |
| <code>12319</code> | <pre>INTERNET_CONTENT</pre>   | Internet content |
| <code>12320</code> | <pre>PUBLISHING</pre>   | Publishing |
| <code>12321</code> | <pre>TELECOM</pre>   | Telecom |
| <code>12322</code> | <pre>APPAREL_MANUFACTURING</pre>   | Apparel manufacturing |
| <code>12323</code> | <pre>APPAREL_RETAIL</pre>   | Apparel retail |
| <code>12324</code> | <pre>AUTO_MANUFACTURERS</pre>   | Auto manufacturers |
| <code>12325</code> | <pre>AUTO_PARTS</pre>   | Auto parts |
| <code>12326</code> | <pre>AUTO_DEALERSHIP</pre>   | Auto dealership |
| <code>12327</code> | <pre>DEPARTMENT_STORES</pre>   | Department stores |
| <code>12328</code> | <pre>FOOTWEAR_ACCESSORIES</pre>   | Footwear accessories |
| <code>12329</code> | <pre>FURNISHINGS</pre>   | Furnishings |
| <code>12330</code> | <pre>GAMBLING</pre>   | Gambling |
| <code>12331</code> | <pre>HOME_IMPROV_RETAIL</pre>   | Home improv retail |
| <code>12332</code> | <pre>INTERNET_RETAIL</pre>   | Internet retail |
| <code>12333</code> | <pre>LEISURE</pre>   | Leisure |
| <code>12334</code> | <pre>LODGING</pre>   | Lodging |
| <code>12335</code> | <pre>LUXURY_GOODS</pre>   | Luxury goods |
| <code>12336</code> | <pre>PACKAGING_CONTAINERS</pre>   | Packaging containers |
| <code>12337</code> | <pre>PERSONAL_SERVICES</pre>   | Personal services |
| <code>12338</code> | <pre>RECREATIONAL_VEHICLES</pre>   | Recreational vehicles |
| <code>12339</code> | <pre>RESIDENT_CONSTRUCTION</pre>   | Resident construction |
| <code>12340</code> | <pre>RESORTS_CASINOS</pre>   | Resorts casinos |
| <code>12341</code> | <pre>RESTAURANTS</pre>   | Restaurants |
| <code>12342</code> | <pre>SPECIALTY_RETAIL</pre>   | Specialty retail |
| <code>12343</code> | <pre>TEXTILE_MANUFACTURING</pre>   | Textile manufacturing |
| <code>12344</code> | <pre>TRAVEL_SERVICES</pre>   | Travel services |
| <code>12345</code> | <pre>BEVERAGES_BREWERS</pre>   | Beverages brewers |
| <code>12346</code> | <pre>BEVERAGES_NON_ALCO</pre>   | Beverages non alco |
| <code>12347</code> | <pre>BEVERAGES_WINERIES</pre>   | Beverages wineries |
| <code>12348</code> | <pre>CONFECTIONERS</pre>   | Confectioners |
| <code>12349</code> | <pre>DISCOUNT_STORES</pre>   | Discount stores |
| <code>12350</code> | <pre>EDUCATION_TRAINIG</pre>   | Education trainig |
| <code>12351</code> | <pre>FARM_PRODUCTS</pre>   | Farm products |
| <code>12352</code> | <pre>FOOD_DISTRIBUTION</pre>   | Food distribution |
| <code>12353</code> | <pre>GROCERY_STORES</pre>   | Grocery stores |
| <code>12354</code> | <pre>HOUSEHOLD_PRODUCTS</pre>   | Household products |
| <code>12355</code> | <pre>PACKAGED_FOODS</pre>   | Packaged foods |
| <code>12356</code> | <pre>TOBACCO</pre>   | Tobacco |
| <code>12357</code> | <pre>OIL_GAS_DRILLING</pre>   | Oil gas drilling |
| <code>12358</code> | <pre>OIL_GAS_EP</pre>   | Oil gas ep |
| <code>12359</code> | <pre>OIL_GAS_EQUIPMENT</pre>   | Oil gas equipment |
| <code>12360</code> | <pre>OIL_GAS_INTEGRATED</pre>   | Oil gas integrated |
| <code>12361</code> | <pre>OIL_GAS_MIDSTREAM</pre>   | Oil gas midstream |
| <code>12362</code> | <pre>OIL_GAS_REFINING</pre>   | Oil gas refining |
| <code>12363</code> | <pre>THERMAL_COAL</pre>   | Thermal coal |
| <code>12364</code> | <pre>URANIUM</pre>   | Uranium |
| <code>12365</code> | <pre>EXCHANGE_TRADED_FUND</pre>   | Exchange traded fund |
| <code>12366</code> | <pre>ASSETS_MANAGEMENT</pre>   | Assets management |
| <code>12367</code> | <pre>BANKS_DIVERSIFIED</pre>   | Banks diversified |
| <code>12368</code> | <pre>BANKS_REGIONAL</pre>   | Banks regional |
| <code>12369</code> | <pre>CAPITAL_MARKETS</pre>   | Capital markets |
| <code>12370</code> | <pre>CLOSE_END_FUND_DEBT</pre>   | Close end fund debt |
| <code>12371</code> | <pre>CLOSE_END_FUND_EQUITY</pre>   | Close end fund equity |
| <code>12372</code> | <pre>CLOSE_END_FUND_FOREIGN</pre>   | Close end fund foreign |
| <code>12373</code> | <pre>CREDIT_SERVICES</pre>   | Credit services |
| <code>12374</code> | <pre>FINANCIAL_CONGLOMERATE</pre>   | Financial conglomerate |
| <code>12375</code> | <pre>FINANCIAL_DATA_EXCHANGE</pre>   | Financial data exchange |
| <code>12376</code> | <pre>INSURANCE_BROKERS</pre>   | Insurance brokers |
| <code>12377</code> | <pre>INSURANCE_DIVERSIFIED</pre>   | Insurance diversified |
| <code>12378</code> | <pre>INSURANCE_LIFE</pre>   | Insurance life |
| <code>12379</code> | <pre>INSURANCE_PROPERTY</pre>   | Insurance property |
| <code>12380</code> | <pre>INSURANCE_REINSURANCE</pre>   | Insurance reinsurance |
| <code>12381</code> | <pre>INSURANCE_SPECIALTY</pre>   | Insurance specialty |
| <code>12382</code> | <pre>MORTGAGE_FINANCE</pre>   | Mortgage finance |
| <code>12383</code> | <pre>SHELL_COMPANIES</pre>   | Shell companies |
| <code>12384</code> | <pre>BIOTECHNOLOGY</pre>   | Biotechnology |
| <code>12385</code> | <pre>DIAGNOSTICS_RESEARCH</pre>   | Diagnostics research |
| <code>12386</code> | <pre>DRUGS_MANUFACTURERS</pre>   | Drugs manufacturers |
| <code>12387</code> | <pre>DRUGS_MANUFACTURERS_SPEC</pre>   | Drugs manufacturers spec |
| <code>12388</code> | <pre>HEALTHCARE_PLANS</pre>   | Healthcare plans |
| <code>12389</code> | <pre>HEALTH_INFORMATION</pre>   | Health information |
| <code>12390</code> | <pre>MEDICAL_FACILITIES</pre>   | Medical facilities |
| <code>12391</code> | <pre>MEDICAL_DEVICES</pre>   | Medical devices |
| <code>12392</code> | <pre>MEDICAL_DISTRIBUTION</pre>   | Medical distribution |
| <code>12393</code> | <pre>MEDICAL_INSTRUMENTS</pre>   | Medical instruments |
| <code>12394</code> | <pre>PHARM_RETAILERS</pre>   | Pharm retailers |
| <code>12395</code> | <pre>AEROSPACE_DEFENSE</pre>   | Aerospace defense |
| <code>12396</code> | <pre>AIRLINES</pre>   | Airlines |
| <code>12397</code> | <pre>AIRPORTS_SERVICES</pre>   | Airports services |
| <code>12398</code> | <pre>BUILDING_PRODUCTS</pre>   | Building products |
| <code>12399</code> | <pre>BUSINESS_EQUIPMENT</pre>   | Business equipment |
| <code>12400</code> | <pre>CONGLOMERATES</pre>   | Conglomerates |
| <code>12401</code> | <pre>CONSULTING_SERVICES</pre>   | Consulting services |
| <code>12402</code> | <pre>ELECTRICAL_EQUIPMENT</pre>   | Electrical equipment |
| <code>12403</code> | <pre>ENGINEERING_CONSTRUCTION</pre>   | Engineering construction |
| <code>12404</code> | <pre>FARM_HEAVY_MACHINERY</pre>   | Farm heavy machinery |
| <code>12405</code> | <pre>INDUSTRIAL_DISTRIBUTION</pre>   | Industrial distribution |
| <code>12406</code> | <pre>INFRASTRUCTURE_OPERATIONS</pre>   | Infrastructure operations |
| <code>12407</code> | <pre>FREIGHT_LOGISTICS</pre>   | Freight logistics |
| <code>12408</code> | <pre>MARINE_SHIPPING</pre>   | Marine shipping |
| <code>12409</code> | <pre>METAL_FABRICATION</pre>   | Metal fabrication |
| <code>12410</code> | <pre>POLLUTION_CONTROL</pre>   | Pollution control |
| <code>12411</code> | <pre>RAILROADS</pre>   | Railroads |
| <code>12412</code> | <pre>RENTAL_LEASING</pre>   | Rental leasing |
| <code>12413</code> | <pre>SECURITY_PROTECTION</pre>   | Security protection |
| <code>12414</code> | <pre>SPEALITY_BUSINESS_SERVICES</pre>   | Speality business services |
| <code>12415</code> | <pre>SPEALITY_MACHINERY</pre>   | Speality machinery |
| <code>12416</code> | <pre>STUFFING_EMPLOYMENT</pre>   | Stuffing employment |
| <code>12417</code> | <pre>TOOLS_ACCESSORIES</pre>   | Tools accessories |
| <code>12418</code> | <pre>TRUCKING</pre>   | Trucking |
| <code>12419</code> | <pre>WASTE_MANAGEMENT</pre>   | Waste management |
| <code>12420</code> | <pre>REAL_ESTATE_DEVELOPMENT</pre>   | Real estate development |
| <code>12421</code> | <pre>REAL_ESTATE_DIVERSIFIED</pre>   | Real estate diversified |
| <code>12422</code> | <pre>REAL_ESTATE_SERVICES</pre>   | Real estate services |
| <code>12423</code> | <pre>REIT_DIVERSIFIED</pre>   | Reit diversified |
| <code>12424</code> | <pre>REIT_HEALTCARE</pre>   | Reit healtcare |
| <code>12425</code> | <pre>REIT_HOTEL_MOTEL</pre>   | Reit hotel motel |
| <code>12426</code> | <pre>REIT_INDUSTRIAL</pre>   | Reit industrial |
| <code>12427</code> | <pre>REIT_MORTAGE</pre>   | Reit mortage |
| <code>12428</code> | <pre>REIT_OFFICE</pre>   | Reit office |
| <code>12429</code> | <pre>REIT_RESIDENTAL</pre>   | Reit residental |
| <code>12430</code> | <pre>REIT_RETAIL</pre>   | Reit retail |
| <code>12431</code> | <pre>REIT_SPECIALITY</pre>   | Reit speciality |
| <code>12432</code> | <pre>COMMUNICATION_EQUIPMENT</pre>   | Communication equipment |
| <code>12433</code> | <pre>COMPUTER_HARDWARE</pre>   | Computer hardware |
| <code>12434</code> | <pre>CONSUMER_ELECTRONICS</pre>   | Consumer electronics |
| <code>12435</code> | <pre>ELECTRONIC_COMPONENTS</pre>   | Electronic components |
| <code>12436</code> | <pre>ELECTRONIC_DISTRIBUTION</pre>   | Electronic distribution |
| <code>12437</code> | <pre>IT_SERVICES</pre>   | It services |
| <code>12438</code> | <pre>SCIENTIFIC_INSTRUMENTS</pre>   | Scientific instruments |
| <code>12439</code> | <pre>SEMICONDUCTOR_EQUIPMENT</pre>   | Semiconductor equipment |
| <code>12440</code> | <pre>SEMICONDUCTORS</pre>   | Semiconductors |
| <code>12441</code> | <pre>SOFTWARE_APPLICATION</pre>   | Software application |
| <code>12442</code> | <pre>SOFTWARE_INFRASTRUCTURE</pre>   | Software infrastructure |
| <code>12443</code> | <pre>SOLAR</pre>   | Solar |
| <code>12444</code> | <pre>UTILITIES_DIVERSIFIED</pre>   | Utilities diversified |
| <code>12445</code> | <pre>UTILITIES_POWERPRODUCERS</pre>   | Utilities powerproducers |
| <code>12446</code> | <pre>UTILITIES_RENEWABLE</pre>   | Utilities renewable |
| <code>12447</code> | <pre>UTILITIES_REGULATED_ELECTRIC</pre>   | Utilities regulated electric |
| <code>12448</code> | <pre>UTILITIES_REGULATED_GAS</pre>   | Utilities regulated gas |
| <code>12449</code> | <pre>UTILITIES_REGULATED_WATER</pre>   | Utilities regulated water |
| <code>12450</code> | <pre>UTILITIES_FIRST</pre>   | Utilities first |
| <code>12451</code> | <pre>UTILITIES_LAST</pre>   | Utilities last |

### Calculation Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>12500</code> | <pre>FOREX</pre>   | Forex |
| <code>12501</code> | <pre>FOREX_NO_LEVERAGE</pre>   | Forex no leverage |
| <code>12502</code> | <pre>FUTURES</pre>   | Futures |
| <code>12503</code> | <pre>CFD</pre>   | Cfd |
| <code>12504</code> | <pre>CFD_INDEX</pre>   | Cfd index |
| <code>12505</code> | <pre>CFD_LEVERAGE</pre>   | Cfd leverage |
| <code>12506</code> | <pre>EXCH_STOCKS</pre>   | Exch stocks |
| <code>12507</code> | <pre>EXCH_FUTURES</pre>   | Exch futures |
| <code>12508</code> | <pre>EXCH_FUTURES_FORTS</pre>   | Exch futures forts |
| <code>12509</code> | <pre>EXCH_BONDS</pre>   | Exch bonds |
| <code>12510</code> | <pre>EXCH_STOCKS_MOEX</pre>   | Exch stocks moex |
| <code>12511</code> | <pre>EXCH_BONDS_MOEX</pre>   | Exch bonds moex |
| <code>12512</code> | <pre>SERV_COLLATERAL</pre>   | Serv collateral |

### Chart Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>12600</code> | <pre>BID_PRICE</pre>   | Bid price |
| <code>12601</code> | <pre>LAST_PRICE</pre>   | Last price |

### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12700</code> | <pre>ACTIVE</pre>   | The instrument is active and have full functionality. |
| <code>12701</code> | <pre>INACTIVE</pre> | The instrument is inactive and just can read data.    |

### Spread Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12800</code> | <pre>WIDE</pre>     | Wide Spread.                                      |
| <code>12801</code> | <pre>FIXED</pre>    | Fixed Spread.                                     |
| <code>12802</code> | <pre>HYBRID</pre>   | Hybrid Spread.                                    |

### Trade Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12900</code> | <pre>DISABLED</pre>     | DISABLED.                                      |
| <code>12901</code> | <pre>LONG_ONLY</pre>    | LONG ONLY.                                     |
| <code>12902</code> | <pre>SHORT_ONLY</pre>    | SHORT ONLY.                                     |
| <code>12903</code> | <pre>CLOSE_ONLY</pre>    | CLOSE ONLY.                                     |
| <code>12904</code> | <pre>FULL</pre>   | FULL.                                    |

### Execution Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12910</code> | <pre>REQUEST</pre>  | REQUEST.                                      |
| <code>12911</code> | <pre>INSTANT</pre>  | INSTANT.                                     |
| <code>12912</code> | <pre>MARKET</pre>   | MARKET.                                     |
| <code>12913</code> | <pre>EXCHANGE</pre> | EXCHANGE.                                     |

### GTC Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12920</code> | <pre>GTC</pre>  | GTC.                                      |
| <code>12921</code> | <pre>DAILY</pre>  | DAILY.                                     |
| <code>12922</code> | <pre>DAILY_EXCLUDING_STOPS</pre>   | DAILY EXCLUDING STOPS.       |

### Filling Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12930</code> | <pre>FOK</pre>      | FOK.                                              |
| <code>12931</code> | <pre>IOC</pre>      | IOC.                                              |
| <code>12932</code> | <pre>RETURN</pre>   | RETURN.                                           |

### Expiration Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12940</code> | <pre>GTC</pre>      | GTC.                                              |
| <code>12941</code> | <pre>DAY</pre>      | DAY.                                              |
| <code>12942</code> | <pre>SPECIFIED</pre>   | SPECIFIED.                                     |
| <code>12943</code> | <pre>SPECIFIED_DAY</pre>   | SPECIFIED DAY.                             |

### Order Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12950</code> | <pre>MARKET</pre>      | MARKET.                                              |
| <code>12951</code> | <pre>LIMIT</pre>      | LIMIT.                                              |
| <code>12952</code> | <pre>STOP</pre>   | STOP.                                     |
| <code>12953</code> | <pre>STOP_LIMIT</pre>   | STOP LIMIT.                             |
| <code>12954</code> | <pre>SL</pre>   | SL.                             |
| <code>12955</code> | <pre>TP</pre>   | TP.                             |
| <code>12956</code> | <pre>CLOSE_BY</pre>   | CLOSE BY.                             |

### Swap Mode Codes
| CODE               | CONSTANT            | DESCRIPTION                                       |
|--------------------|---------------------|---------------------------------------------------|
| <code>12960</code> | <pre>DISABLED</pre>      | DISABLED.                                              |
| <code>12961</code> | <pre>POINTS</pre>      | POINTS.                                              |
| <code>12962</code> | <pre>CURRENCY_SYMBOL</pre>   | CURRENCY SYMBOL.                                     |
| <code>12963</code> | <pre>CURRENCY_MARGIN</pre>   | CURRENCY MARGIN.                             |
| <code>12964</code> | <pre>CURRENCY_DEPOSIT</pre>   | CURRENCY DEPOSIT.                             |
| <code>12965</code> | <pre>INTEREST_CURRENT</pre>   | INTEREST CURRENT.                             |
| <code>12966</code> | <pre>INTEREST_OPEN</pre>   | INTEREST OPEN.                             |
| <code>12967</code> | <pre>REOPEN_CURRENT</pre>   | REOPEN CURRENT.                             |
| <code>12968</code> | <pre>REOPEN_BID</pre>   | REOPEN BID.                             |

