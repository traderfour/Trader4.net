---
title: custom-component
---

# Account

:select-libraries{:libraries='[
{
"name": "Restful",
"link": "https://api.trader4.net",
"code":"https://api.trader4.net"
},
{
"name": "Python",
"link": "https://github.com/trader4/python",
"code": "pip install trader4"
},
{
"name": "PHP",
"link": "https://github.com/trader4/php",
"code": "composer require trader4/trader4-php"
},
{
"name": "Node.js",
"link": "https://npmjs.com/trader4",
"code": "npm install trader4"
},
{
"name": "Go",
"link": "https://golang.com/trader4",
"code": "go @install trader4"
}
]'}

:test{text="test"}

# Account

:test{text="test2"}

:code-box{lang="Restful",method="GET",endpoint="/v1/account}

:code-box{lang="Restful" method="GET" endpoint="/v1/account}

# Account

Using our Account Method, users are now able to easily retrieve their account information.

#code

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account
```

::

:
