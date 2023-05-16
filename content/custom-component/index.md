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

::code-box{lang="Restful" method="GET" endpoint="/v1/account"}

## Account

Using our Account Method, users are now able to easily retrieve their account information.

#code

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account
```

::

::Response{jfile="v1/user/account" }

#result
- `first_name` <span>String</span>, The first name of user.
- `middle_name` <span>String</span>, The middle name of user.
- `last_name` <span>String</span>, The last name of user.
- `email` <span>String</span>, The email address of user.
- `mobile` <span>String</span>, The mobile number of user.
- `phone_number` <span>String</span>, The phone number of user.
- `country` <span>String</span>, The country that user registered. Check out [ISO 3166-1 Alpha-3](https://www.iso.org/iso-3166-country-codes.html).
- `language` <span>String</span>, The language that user selected. Check out [ISO 639-1](https://www.iso.org/iso-639-language-codes.html).
- `timezone` <span>String</span>, The timezone that user selected. Check out [Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- `currency` <span>String</span>, The currency that user selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `last_connection` <span>Datetime</span>, The last time that user connected to our system. Check out [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
- `private` <span>Boolean</span>, The privacy of user profile.
- `avatar` <span>String</span>, The URL of user avatar.
::
