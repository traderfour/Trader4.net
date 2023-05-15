---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/marketplace/categories">

# Category

Using this method, you can easily see the categories

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/marketplace/categories
```

</template>

</CodeBox>

<Response jfile="v1/category/category" >

<template #result>

- `title` <span>String</span>, The title of category.
- `slug` <span>String</span>, The link that comes after the domain.
- `type` <span>integer</span>, A number that specifies the type of categories .

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/marketplace/categories">

# Filter Category

Using this method, we can filter the categories.


<template #params>

- `title` <span>String</span>, The title of category.
- `type` <span>String</span>, The type of category.
- `sort[created_at]` <span>String</span>,sort base on category created.
- `sort[id]` <span>String</span>, sort base on category id.


</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/marketplace/categories \
  -d '{
    "title": "Scalping",
    "sort[created_at]": "desc",
    "sort[id]": "asc",
    "type": "13000",
  }'
```

</template>

</CodeBox>

<Response jfile="v1/category/filter" >

<template #result>

- `title` <span>String</span>, The title of category.
- `slug` <span>String</span>, The link that comes after the domain.
- `type` <span>integer</span>, A number that specifies the type of categories .

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/marketplace/categories/:id/products">

# Show product

By using this method, you can show products related to the category

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/marketplace/categories/:id/products
```

</template>

</CodeBox>

<Response jfile="v1/category/product" >

<template #result>

- `id` <span>String</span>, The id of product.
- `title` <span>String</span>, The title of product.
- `slogan` <span>String</span>, The link that comes after the domain.
- `introduction` <span>String</span>, The introduction of product.
- `description` <span>String</span>, The description of product.
- `logo` <span>String</span>, The logo of product.
- `cover` <span>String</span>, The cover of product.
- `downloads` <span>Integer</span>, downloads.
- `views` <span>Integer</span>, views.
- `purchases` <span>Integer</span>, purchases.
- `likes` <span>Integer</span>, likes.
- `type` <span>String</span>, type.
- `status` <span>Integer</span>, status.




</template>

</Response>



## Auto Withdraw Table

| CODE               | CONSTANT                              | DESCRIPTION |
|--------------------|---------------------------------------|-------------|
| <code>13000</code> | <pre>BOT</pre>                        |             |
| <code>13001</code> | <pre>INDICATOR</pre>                  |             |
| <code>13002</code> | <pre>SYSTEM</pre>                     |             |
| <code>13003</code> | <pre>SCRIPT</pre>                     |             |
| <code>13004</code> | <pre>TEMPLATE</pre>                   |   
| <code>13005</code> | <pre>ALGORITHM</pre>                  |  
| <code>13006</code> | <pre>ARTIFICIAL_INTELLIGENCE</pre>    |   
| <code>13007</code> | <pre>PORTFOLIO</pre>                  |   
| <code>13008</code> | <pre>AI_LIVE</pre>                    |   
| <code>13009</code> | <pre>FUNDED_ACCOUNT</pre>             |             |
| <code>13010</code> | <pre>TRADING_SIGNAL</pre>             |  
| <code>13011</code> | <pre>TRADING_STRATEGY</pre>           |  
| <code>13012</code> | <pre>COURSE</pre>                     |             |



