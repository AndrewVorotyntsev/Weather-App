var app1 = new Vue({
    el: '#city',
    data() {
      return {
        city: 'city',
        code : null,
        test : "Введите город",
        date : null,
        minTemp : null,
        maxTemp : null,
        DayWind : null,
        DayTotalLiquid : null,
        DayRain : null,
        DaySnow : null,
        DayIce : null,
        NightWind : null,
        NightTotalLiquid : null,
        NightRain : null,
        NightSnow : null,
        NightIce : null
      };
    },
    methods: {
        getCode: function () {
            if (this.city != null) {
            a = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=&q=" + this.city
            let url = new URL(a)
            axios
                .get(url)
                .then(response => (this.code = response['data'][0]['Key']),
                this.test = "Город выбран",
                )
                {
                    if (this.code != null ) {
                        this.test = "Город выбран"
                    }
                }
            }
                  },


        getData: function () {
            if (this.code != null) {
            d = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + this.code + "?apikey=qZ5Fjf5t1aEXMJmLEx8wtZXSIJeBYEA3&details=true&metric=true"
            let link = new URL(d)
                //Дата
            axios
                .get(link)
                .then(response => (this.date = response.data.Headline.EffectiveDate))
                //Минимальная температура
            axios
                .get(link)
                .then(response => (this.minTemp = response['data']['DailyForecasts'][0]["Temperature"]["Minimum"]["Value"]))
                //Максимальняа температура
            axios
                .get(link)
                .then(response => (this.maxTemp = response['data']['DailyForecasts'][0]['Temperature']['Maximum']['Value']))
                //День
                //Скорость ветра
            axios
                .get(link)
                .then(response => (this.DayWind = response['data']['DailyForecasts'][0]['Day']["Wind"]["Speed"]["Value"]))
                //Общее количество осадков
            axios
                .get(link)
                .then(response => (this.DayTotalLiquid = response['data']['DailyForecasts'][0]['Day']["TotalLiquid"]["Value"]))
                //Дождь
            axios
                .get(link)
                .then(response => (this.DayRain = response['data']['DailyForecasts'][0]['Day']["Rain"]["Value"]))
                //Снег
            axios
                .get(link)
                .then(response => (this.DaySnow = response['data']['DailyForecasts'][0]['Day']["Snow"]["Value"]))
                //Лёд
            axios
                .get(link)
                .then(response => (this.DayIce = response['data']['DailyForecasts'][0]['Day']["Ice"]["Value"]))
                //Ночь
                //Скорость ветра
            axios
            .get(link)
            .then(response => (this.NightWind = response['data']['DailyForecasts'][0]["Night"]["Wind"]["Speed"]["Value"]))
            //Общее количество осадков
            axios
                .get(link)
                .then(response => (this.NightTotalLiquid = response['data']['DailyForecasts'][0]["Night"]["TotalLiquid"]["Value"]))
                //Дождь
            axios
                .get(link)
                .then(response => (this.NightRain = response['data']['DailyForecasts'][0]["Night"]["Rain"]["Value"]))
                //Снег
            axios
                .get(link)
                .then(response => (this.NightSnow = response['data']['DailyForecasts'][0]["Night"]["Snow"]["Value"]))
                //Лёд
            axios
                .get(link)
                .then(response => (this.NightIce = response['data']['DailyForecasts'][0]["Night"]["Ice"]["Value"]))
                    


            

        } else {
            this.test = "Введите город"
        }
    }
 

} });
