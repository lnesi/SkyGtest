SkyTest


### Getting Started
Start Server:

```
> npm install
> npm start
```

Asuming Docker Image is runing in same machine for:

API: http://localhost:8888

WS: ws://localhost:8889

```bash
# running the basic image
docker run -it --rm --name sbg-tech-test-api -p 8888-8890:8888-8890 sbgtechtest/api

# running using docker compose
docker-compose up

# running using docker compose in the background
docker-compose up -d
```

Websocket Implemented: only in /football/live

PRICE_CHANGE

OUTCOME_STATUS


In the console you can review socket activity and on the front end app you can reivew new activiy on suspended and prices difficult to follow needs to add visual aids for when a value gets updated

### DEMO CONSOLE:
```
SOCKET_PRICE_CHANGE
Maccabi Ironi Kiryat Ata 0 v 0 Hapoel Shfaram
CURRENT OUTCOME Maccabi Ironi Kiryat Ata {decimal: "2.1", num: "11", den: "10"}
NEW OUTECOME Maccabi Ironi Kiryat Ata {decimal: "11", num: "10", den: "1"}

SOCKET_PRICE_CHANGE
Kuching FA 0 v 1 UKM FC
CURRENT OUTCOME Draw {decimal: "1.57", num: "4", den: "7"}
NEW OUTECOME Draw {decimal: "51", num: "50", den: "1"}

SOCKET_PRICE_CHANGE
Payasspor 1 v 0 Amed Sportif Faaliyetler
CURRENT OUTCOME Draw {decimal: "1.2", num: "1", den: "5"}
NEW OUTECOME Draw {decimal: "1.286", num: "2", den: "7"}

SOCKET_OUTCOME_STATUS
Shahrdari Hamedan 0 v 0 Khoosheh Talai
CURRENT OUTCOME Shahrdari Hamedan {decimal: "2.1", num: "11", den: "10"}
NEW OUTECOME Shahrdari Hamedan {decimal: "2.1", num: "11", den: "10"}
```

