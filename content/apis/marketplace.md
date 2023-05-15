---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/products">

# MarketPlace

Using our MarketPlace Method, users are now able to easily retrieve their product information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/products
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/get" >

<template #result>

- `title` <span>String</span>, The title of product.
- `slogan` <span>String</span>.
- `introduction` <span>String</span>, The introduction of product.
- `description` <span>String</span>, The description  of product.
- `logo` <span>String</span>, The logo of product.
- `downloads` <span>Integer</span>,  downloads.
- `view` <span>Integer</span>, Views.
- `purchases` <span>Integer</span>, purchases.
- `likes` <span>Integer</span>, likes.
- `type` <span>Integer</span> type.
- `status` <span>Integer</span> status.

</template>

</Response>

<CodeBox lang="Restful" method="POST" endpoint="/v1/products">

# Store Product

Using our store Method, users are now able to easily store their product information.

<template #params>

- `title` <span>String</span>, the title of product.
- `slogan` <span>String</span>, slogan.
- `introduction` <span>String</span>, introduction of the product.
- `description` <span>String</span>, description of the product.
- `tags` <span>String</span>, tag ids separated by ','.
- `platforms` <span>String</span>, platform ids separated by ','.
- `categories` <span>String</span>, categoriry ids separated by ','.
- `type` <span>Integer</span>, type of product.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/products \
  -d '{
       "title": "first product1",
        "slogan": "this is test",
        "introduction": "detail of product",
        "description": "this is description of product",
        "tags": "989d91a8-a150-482d-b0e6-37c73087bf66,f7c1bd87-4da5-4709-9471-3d60c8a70639",
        "platform": "989d9374-bfd9-4d72-b0da-90c8e24e4655",
        "categories": "989d91a8-a031-414b-9516-162f04701293",
        "type": 1
  }'
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/get" >

<template #result>

- `title` <span>String</span>, The title of product.
- `slogan` <span>String</span>.
- `introduction` <span>String</span>, The introduction of product.
- `description` <span>String</span>, The description  of product.
- `logo` <span>String</span>, The logo of product.
- `downloads` <span>Integer</span>,  downloads.
- `view` <span>Integer</span>, Views.
- `purchases` <span>Integer</span>, purchases.
- `likes` <span>Integer</span>, likes.
- `type` <span>Integer</span> type.
- `status` <span>Integer</span> status.


</template>

</Response>




<CodeBox lang="Restful" method="PUT" endpoint="/v1/products">

# Update

Using our update Method, users are now able to easily update their product information.

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/products
  -d '{
       "title": "first product2",
       "slogan": "test2",
       "introduction": "test2",
       "description": "test2"
       }'
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/update" >

<template #result>

- `title` <span>String</span>, The title of product.
- `slogan` <span>String</span>.
- `introduction` <span>String</span>, The introduction of product.
- `description` <span>String</span>, The description  of product.
- `logo` <span>String</span>, The logo of product.
- `downloads` <span>Integer</span>,  downloads.
- `view` <span>Integer</span>, Views.
- `purchases` <span>Integer</span>, purchases.
- `likes` <span>Integer</span>, likes.
- `type` <span>Integer</span> type.
- `status` <span>Integer</span> status.

</template>

</Response>

<CodeBox lang="Restful" method="DELETE" endpoint="/v1/products">

# Delete

Using our delete Method, users are now able to easily delete their product information.

<!--@include: /partials/authorization.md-->

<template #params>
</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/products/:id \

```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/delete" >

<template #result>


</template>

</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/products/seller/{userId}">

# product Seller 

<template #params>

</template>

<template #code>

```bash
$ curl --request PUT \
 https://api.trader4.net/v1/products/seller/{userId}

```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/get" >

<template #result>

- `anti_phishing` <span>Boolean</span>, The anti phishing token of user.
- `google2fa_secret` <span>Boolean</span>, The google 2FA token of user.
- `email_2step` <span>Boolean</span>, The email to use for 2FA of user.
- `app_2step` <span>Boolean</span>, The app to use for 2FA of user.
- `mobile_2step` <span>Boolean</span>, The mobile number to use for 2FA of user.
- `same_wallet` <span>Boolean</span>, The same wallet of user.
- `fund_password` <span>Boolean</span>, The fund password of user.
- `registered_wallets` <span>Boolean</span>, The registered wallets of user.
- `delay` <span>Integer</span>, Minutes that operation process should delay before start running in background. By default it's set to 15 minutes.

</template>

</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/products/tag/{tagName}">

# Tags

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
 https://api.trader4.net/v1/products/tag/{tagName}
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/get" >

<template #result>

- `title` <span>String</span>, The title of product.
- `slogan` <span>String</span>.
- `introduction` <span>String</span>, The introduction of product.
- `description` <span>String</span>, The description  of product.
- `logo` <span>String</span>, The logo of product.
- `downloads` <span>Integer</span>,  downloads.
- `view` <span>Integer</span>, Views.
- `purchases` <span>Integer</span>, purchases.
- `likes` <span>Integer</span>, likes.
- `status` <span>Integer</span>status.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/products/category/{categoryName}">

# Categories

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
 https://api.trader4.net/v1/products/category/{categoryName}
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/categories/get" >
<template #result>

- `id` <span>String</span>, The id of tag.
- `title` <span>String</span>, The title of tag.
- `slug` <span>String</span>, The slug of tag.
- `type` <span>String</span>, The type of tag.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/products/tag/{tagName}">

# Products with specific tag

Get list products with specific tag

<template #code>

```bash
$ curl --request GET \
 https://api.trader4.net/v1/tags/{tagID}/products
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/tags/products" >

<template #result>

- `title` <span>String</span>, The title of product.
- `slogan` <span>String</span>.
- `introduction` <span>String</span>, The introduction of product.
- `description` <span>String</span>, The description  of product.
- `logo` <span>String</span>, The logo of product.
- `downloads` <span>Integer</span>,  downloads.
- `view` <span>Integer</span>, Views.
- `purchases` <span>Integer</span>, purchases.
- `likes` <span>Integer</span>, likes.
- `type` <span>Integer</span> type.
- `status` <span>Integer</span> status.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/platforms/{platformID}/products">

# Platforms

Get list platforms

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
 https://api.trader4.net/v1/platforms
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/platforms/get" >

<template #result>

- `id` <span>String</span>, The id of platform.
- `title` <span>String</span>, The title of platform.
- `slug` <span>String</span>, The slug of platform.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/platforms/{platformID}/products">

# Products with specific platform

Get list products with specific platform

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
 https://api.trader4.net/v1/platforms/{platformID}/products
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/platforms/products" >

<template #result>

- `title` <span>String</span>, The title of product.
- `slogan` <span>String</span>.
- `introduction` <span>String</span>, The introduction of product.
- `description` <span>String</span>, The description  of product.
- `logo` <span>String</span>, The logo of product.
- `downloads` <span>Integer</span>,  downloads.
- `view` <span>Integer</span>, Views.
- `purchases` <span>Integer</span>, purchases.
- `likes` <span>Integer</span>, likes.
- `status` <span>Integer</span>status.

</template>

</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/products/{productID}/related">

# Related

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
 https://api.trader4.net/v1/products/{productID}/related
```

</template>

</CodeBox>

<Response jfile="v1/marketPlace/related" >

<template #result>

- `title` <span>String</span>, The title of product.
- `slogan` <span>String</span>.
- `introduction` <span>String</span>, The introduction of product.
- `description` <span>String</span>, The description  of product.
- `logo` <span>String</span>, The logo of product.
- `downloads` <span>Integer</span>,  downloads.
- `view` <span>Integer</span>, Views.
- `purchases` <span>Integer</span>, purchases.
- `likes` <span>Integer</span>, likes.
- `type` <span>Integer</span> type.
- `status` <span>Integer</span> status.

</template>

</Response>