export class Api {
    constructor({adress}) {
        this._adress = adress;
    }

    getWeather() {
        return fetch(`${this._adress}?aggregateHours=24&location=Ekaterinburg&contentType=json&unitGroup=us&startDateTime=2021-5-1T00:00:00&endDateTime=2021-5-31T00:00:00&shortColumnNames=0`, {
            headers: {
                'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
                'x-rapidapi-key': 'd4d068a20amsh514fe9f793b3f19p170353jsnbe0a177bd1a9',
                'Content-Type': 'application/json'
            },
            params: {
                startDateTime: '2019-05-01T00:00:00',
                aggregateHours: '24',
                location: 'Ekaterinburg',
                endDateTime: '2021-05-31T00:00:00',
                unitGroup: 'us',
                dayStartTime: '8:00:00',
                contentType: 'json',
                dayEndTime: '17:00:00',
                shortColumnNames: '0'
            }
        }).then(response => {

            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка ${response.status}`)
        })
            .then(res => {
                let data;
                return data = res;
            })
    }
}
