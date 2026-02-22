```bash
curl -X GET "https://api.stormglass.io/v2/weather/point?lat=41.683&lng=-8.833&params=waveHeight,windSpeed,gust,windDirection,waterTemperature,pressure" -H "Authorization: api_key_here"
```

```json
{
  "hours": [
    {
      "gust": { "ecmwf": 3.75, "noaa": 4.14, "sg": 3.75 },
      "pressure": {
        "ecmwf": 1010.84,
        "ecmwf:aifs": 1011.82,
        "noaa": 1029.5,
        "sg": 1010.84
      },
      "time": "2026-02-15T00:00:00+00:00",
      "waterTemperature": { "meto": 13.06, "noaa": 13.0, "sg": 13.06 },
      "waveHeight": {
        "dwd": 2.91,
        "ecmwf": 2.87,
        "meteo": 2.47,
        "noaa": 2.34,
        "sg": 2.87
      },
      "windDirection": {
        "dwd": 268.67,
        "ecmwf": 249.99,
        "ecmwf:aifs": 249.64,
        "noaa": 269.38,
        "sg": 249.99
      },
      "windSpeed": {
        "dwd": 4.17,
        "ecmwf": 1.28,
        "ecmwf:aifs": 1.59,
        "noaa": 3.51,
        "sg": 1.28
      }
    },
    {
      "gust": { "ecmwf": 5.91, "noaa": 4.87, "sg": 5.91 },
      "pressure": {
        "ecmwf": 1010.49,
        "ecmwf:aifs": 1011.52,
        "noaa": 1029.15,
        "sg": 1010.49
      },
      "time": "2026-02-15T01:00:00+00:00",
      "waterTemperature": { "meto": 13.05, "noaa": 12.99, "sg": 13.05 },
      "waveHeight": {
        "dwd": 2.83,
        "ecmwf": 2.78,
        "meteo": 2.41,
        "noaa": 2.29,
        "sg": 2.78
      },
      "windDirection": {
        "dwd": 263.86,
        "ecmwf": 246.22,
        "ecmwf:aifs": 245.86,
        "noaa": 263.17,
        "sg": 246.22
      },
      "windSpeed": {
        "dwd": 4.38,
        "ecmwf": 1.65,
        "ecmwf:aifs": 1.87,
        "noaa": 4.22,
        "sg": 1.65
      }
    },
    {
      "gust": { "ecmwf": 5.91, "noaa": 5.59, "sg": 5.91 },
      "pressure": {
        "ecmwf": 1010.14,
        "ecmwf:aifs": 1011.23,
        "noaa": 1028.81,
        "sg": 1010.14
      },
      "time": "2026-02-15T02:00:00+00:00",
      "waterTemperature": { "meto": 13.06, "noaa": 12.98, "sg": 13.06 },
      "waveHeight": {
        "dwd": 2.74,
        "ecmwf": 2.69,
        "meteo": 2.35,
        "noaa": 2.24,
        "sg": 2.69
      },
      "windDirection": {
        "dwd": 259.06,
        "ecmwf": 242.46,
        "ecmwf:aifs": 242.09,
        "noaa": 256.95,
        "sg": 242.46
      },
      "windSpeed": {
        "dwd": 4.58,
        "ecmwf": 2.03,
        "ecmwf:aifs": 2.15,
        "noaa": 4.92,
        "sg": 2.03
      }
    },
    {
      "gust": { "ecmwf": 5.91, "noaa": 6.32, "sg": 5.91 },
      "pressure": {
        "ecmwf": 1009.8,
        "ecmwf:aifs": 1010.94,
        "noaa": 1028.46,
        "sg": 1009.8
      },
      "time": "2026-02-15T03:00:00+00:00",
      "waterTemperature": { "meto": 13.07, "noaa": 12.97, "sg": 13.07 },
      "waveHeight": {
        "dwd": 2.66,
        "ecmwf": 2.6,
        "meteo": 2.29,
        "noaa": 2.19,
        "sg": 2.6
      },
      "windDirection": {
        "dwd": 254.25,
        "ecmwf": 238.69,
        "ecmwf:aifs": 238.31,
        "noaa": 250.74,
        "sg": 238.69
      },
      "windSpeed": {
        "dwd": 4.79,
        "ecmwf": 2.4,
        "ecmwf:aifs": 2.43,
        "noaa": 5.63,
        "sg": 2.4
      }
    },
    {
      "gust": { "ecmwf": 6.4, "noaa": 6.82, "sg": 6.4 },
      "pressure": {
        "ecmwf": 1009.49,
        "ecmwf:aifs": 1010.64,
        "noaa": 1028.19,
        "sg": 1009.49
      },
      "time": "2026-02-15T04:00:00+00:00",
      "waterTemperature": { "meto": 13.08, "noaa": 12.96, "sg": 13.08 },
      "waveHeight": {
        "dwd": 2.58,
        "ecmwf": 2.53,
        "meteo": 2.25,
        "noaa": 2.15,
        "sg": 2.53
      },
      "windDirection": {
        "dwd": 247.05,
        "ecmwf": 238.25,
        "ecmwf:aifs": 234.53,
        "noaa": 250.8,
        "sg": 238.25
      },
      "windSpeed": {
        "dwd": 4.97,
        "ecmwf": 2.56,
        "ecmwf:aifs": 2.71,
        "noaa": 5.87,
        "sg": 2.56
      }
    },
    {
      "gust": { "ecmwf": 6.4, "noaa": 7.32, "sg": 6.4 },
      "pressure": {
        "ecmwf": 1009.19,
        "ecmwf:aifs": 1010.35,
        "noaa": 1027.92,
        "sg": 1009.19
      },
      "time": "2026-02-15T05:00:00+00:00",
      "waterTemperature": { "meto": 13.09, "noaa": 12.94, "sg": 13.09 },
      "waveHeight": {
        "dwd": 2.51,
        "ecmwf": 2.46,
        "meteo": 2.21,
        "noaa": 2.1,
        "sg": 2.46
      },
      "windDirection": {
        "dwd": 239.85,
        "ecmwf": 237.82,
        "ecmwf:aifs": 230.76,
        "noaa": 250.85,
        "sg": 237.82
      },
      "windSpeed": {
        "dwd": 5.16,
        "ecmwf": 2.71,
        "ecmwf:aifs": 2.99,
        "noaa": 6.11,
        "sg": 2.71
      }
    },
    {
      "gust": { "ecmwf": 6.4, "noaa": 7.81, "sg": 6.4 },
      "pressure": {
        "ecmwf": 1008.88,
        "ecmwf:aifs": 1010.05,
        "noaa": 1027.65,
        "sg": 1008.88
      },
      "time": "2026-02-15T06:00:00+00:00",
      "waterTemperature": { "meto": 13.1, "noaa": 12.9, "sg": 13.1 },
      "waveHeight": {
        "dwd": 2.43,
        "ecmwf": 2.39,
        "meteo": 2.17,
        "noaa": 2.06,
        "sg": 2.39
      },
      "windDirection": {
        "dwd": 232.65,
        "ecmwf": 237.38,
        "ecmwf:aifs": 226.98,
        "noaa": 250.91,
        "sg": 237.38
      },
      "windSpeed": {
        "dwd": 5.34,
        "ecmwf": 2.87,
        "ecmwf:aifs": 3.27,
        "noaa": 6.35,
        "sg": 2.87
      }
    },
    {
      "gust": { "ecmwf": 10.9, "noaa": 7.95, "sg": 10.9 },
      "pressure": {
        "ecmwf": 1008.93,
        "ecmwf:aifs": 1010.15,
        "noaa": 1027.83,
        "sg": 1008.93
      },
      "time": "2026-02-15T07:00:00+00:00",
      "waterTemperature": { "meto": 13.1, "noaa": 12.89, "sg": 13.1 },
      "waveHeight": {
        "dwd": 2.37,
        "ecmwf": 2.37,
        "meteo": 2.14,
        "noaa": 2.04,
        "sg": 2.37
      },
      "windDirection": {
        "dwd": 228.16,
        "ecmwf": 242.56,
        "ecmwf:aifs": 229.83,
        "noaa": 251.11,
        "sg": 242.56
      },
      "windSpeed": {
        "dwd": 5.14,
        "ecmwf": 3.49,
        "ecmwf:aifs": 3.62,
        "noaa": 6.31,
        "sg": 3.49
      }
    },
    {
      "gust": { "ecmwf": 10.9, "noaa": 8.1, "sg": 10.9 },
      "pressure": {
        "ecmwf": 1008.98,
        "ecmwf:aifs": 1010.25,
        "noaa": 1028.01,
        "sg": 1008.98
      },
      "time": "2026-02-15T08:00:00+00:00",
      "waterTemperature": { "meto": 13.11, "noaa": 12.86, "sg": 13.11 },
      "waveHeight": {
        "dwd": 2.32,
        "ecmwf": 2.35,
        "meteo": 2.12,
        "noaa": 2.01,
        "sg": 2.35
      },
      "windDirection": {
        "dwd": 223.67,
        "ecmwf": 247.74,
        "ecmwf:aifs": 232.69,
        "noaa": 251.3,
        "sg": 247.74
      },
      "windSpeed": {
        "dwd": 4.94,
        "ecmwf": 4.11,
        "ecmwf:aifs": 3.98,
        "noaa": 6.28,
        "sg": 4.11
      }
    },
    {
      "gust": { "ecmwf": 10.9, "noaa": 8.24, "sg": 10.9 },
      "pressure": {
        "ecmwf": 1009.03,
        "ecmwf:aifs": 1010.35,
        "noaa": 1028.19,
        "sg": 1009.03
      },
      "time": "2026-02-15T09:00:00+00:00",
      "waterTemperature": { "meto": 13.13, "noaa": 12.85, "sg": 13.13 },
      "waveHeight": {
        "dwd": 2.26,
        "ecmwf": 2.32,
        "meteo": 2.09,
        "noaa": 1.99,
        "sg": 2.32
      },
      "windDirection": {
        "dwd": 219.18,
        "ecmwf": 252.92,
        "ecmwf:aifs": 235.54,
        "noaa": 251.5,
        "sg": 252.92
      },
      "windSpeed": {
        "dwd": 4.74,
        "ecmwf": 4.73,
        "ecmwf:aifs": 4.34,
        "noaa": 6.24,
        "sg": 4.73
      }
    },
    {
      "gust": { "ecmwf": 12.76, "noaa": 8.61, "sg": 12.76 },
      "pressure": {
        "ecmwf": 1009.16,
        "ecmwf:aifs": 1010.45,
        "noaa": 1028.22,
        "sg": 1009.16
      },
      "time": "2026-02-15T10:00:00+00:00",
      "waterTemperature": { "meto": 13.15, "noaa": 12.85, "sg": 13.15 },
      "waveHeight": {
        "dwd": 2.22,
        "ecmwf": 2.31,
        "meteo": 2.08,
        "noaa": 1.98,
        "sg": 2.31
      },
      "windDirection": {
        "dwd": 221.58,
        "ecmwf": 253.76,
        "ecmwf:aifs": 238.39,
        "noaa": 252.18,
        "sg": 253.76
      },
      "windSpeed": {
        "dwd": 5.0,
        "ecmwf": 4.78,
        "ecmwf:aifs": 4.69,
        "noaa": 6.4,
        "sg": 4.78
      }
    },
    {
      "gust": { "ecmwf": 12.76, "noaa": 8.97, "sg": 12.76 },
      "pressure": {
        "ecmwf": 1009.28,
        "ecmwf:aifs": 1010.54,
        "noaa": 1028.24,
        "sg": 1009.28
      },
      "time": "2026-02-15T11:00:00+00:00",
      "waterTemperature": { "meto": 13.17, "noaa": 12.85, "sg": 13.17 },
      "waveHeight": {
        "dwd": 2.19,
        "ecmwf": 2.29,
        "meteo": 2.08,
        "noaa": 1.98,
        "sg": 2.29
      },
      "windDirection": {
        "dwd": 223.98,
        "ecmwf": 254.61,
        "ecmwf:aifs": 241.25,
        "noaa": 252.85,
        "sg": 254.61
      },
      "windSpeed": {
        "dwd": 5.25,
        "ecmwf": 4.84,
        "ecmwf:aifs": 5.05,
        "noaa": 6.55,
        "sg": 4.84
      }
    },
    {
      "gust": { "ecmwf": 12.76, "noaa": 9.34, "sg": 12.76 },
      "pressure": {
        "ecmwf": 1009.4,
        "ecmwf:aifs": 1010.64,
        "noaa": 1028.27,
        "sg": 1009.4
      },
      "time": "2026-02-15T12:00:00+00:00",
      "waterTemperature": { "meto": 13.19, "noaa": 12.85, "sg": 13.19 },
      "waveHeight": {
        "dwd": 2.15,
        "ecmwf": 2.28,
        "meteo": 2.07,
        "noaa": 1.97,
        "sg": 2.28
      },
      "windDirection": {
        "dwd": 226.38,
        "ecmwf": 255.45,
        "ecmwf:aifs": 244.1,
        "noaa": 253.53,
        "sg": 255.45
      },
      "windSpeed": {
        "dwd": 5.51,
        "ecmwf": 4.89,
        "ecmwf:aifs": 5.4,
        "noaa": 6.71,
        "sg": 4.89
      }
    },
    {
      "gust": { "ecmwf": 12.75, "noaa": 9.86, "sg": 12.75 },
      "pressure": {
        "ecmwf": 1008.92,
        "ecmwf:aifs": 1010.43,
        "noaa": 1027.85,
        "sg": 1008.92
      },
      "time": "2026-02-15T13:00:00+00:00",
      "waterTemperature": { "meto": 13.22, "noaa": 12.86, "sg": 13.22 },
      "waveHeight": {
        "dwd": 2.15,
        "ecmwf": 2.3,
        "meteo": 2.08,
        "noaa": 2.01,
        "sg": 2.3
      },
      "windDirection": {
        "dwd": 232.77,
        "ecmwf": 253.46,
        "ecmwf:aifs": 243.4,
        "noaa": 251.87,
        "sg": 253.46
      },
      "windSpeed": {
        "dwd": 6.06,
        "ecmwf": 5.19,
        "ecmwf:aifs": 5.38,
        "noaa": 7.21,
        "sg": 5.19
      }
    },
    {
      "gust": { "ecmwf": 12.75, "noaa": 10.39, "sg": 12.75 },
      "pressure": {
        "ecmwf": 1008.43,
        "ecmwf:aifs": 1010.21,
        "noaa": 1027.43,
        "sg": 1008.43
      },
      "time": "2026-02-15T14:00:00+00:00",
      "waterTemperature": { "meto": 13.25, "noaa": 12.88, "sg": 13.25 },
      "waveHeight": {
        "dwd": 2.16,
        "ecmwf": 2.33,
        "meteo": 2.1,
        "noaa": 2.06,
        "sg": 2.33
      },
      "windDirection": {
        "dwd": 239.15,
        "ecmwf": 251.48,
        "ecmwf:aifs": 242.69,
        "noaa": 250.21,
        "sg": 251.48
      },
      "windSpeed": {
        "dwd": 6.6,
        "ecmwf": 5.5,
        "ecmwf:aifs": 5.35,
        "noaa": 7.7,
        "sg": 5.5
      }
    },
    {
      "gust": { "ecmwf": 12.75, "noaa": 10.92, "sg": 12.75 },
      "pressure": {
        "ecmwf": 1007.95,
        "ecmwf:aifs": 1010.0,
        "noaa": 1027.01,
        "sg": 1007.95
      },
      "time": "2026-02-15T15:00:00+00:00",
      "waterTemperature": { "meto": 13.25, "noaa": 12.9, "sg": 13.25 },
      "waveHeight": {
        "dwd": 2.16,
        "ecmwf": 2.35,
        "meteo": 2.11,
        "noaa": 2.1,
        "sg": 2.35
      },
      "windDirection": {
        "dwd": 245.54,
        "ecmwf": 249.49,
        "ecmwf:aifs": 241.99,
        "noaa": 248.55,
        "sg": 249.49
      },
      "windSpeed": {
        "dwd": 7.15,
        "ecmwf": 5.8,
        "ecmwf:aifs": 5.33,
        "noaa": 8.2,
        "sg": 5.8
      }
    },
    {
      "gust": { "ecmwf": 11.05, "noaa": 11.37, "sg": 11.05 },
      "pressure": {
        "ecmwf": 1008.15,
        "ecmwf:aifs": 1009.78,
        "noaa": 1027.04,
        "sg": 1008.15
      },
      "time": "2026-02-15T16:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "noaa": 12.92, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.18,
        "ecmwf": 2.41,
        "meteo": 2.16,
        "noaa": 2.21,
        "sg": 2.41
      },
      "windDirection": {
        "dwd": 242.7,
        "ecmwf": 249.97,
        "ecmwf:aifs": 241.29,
        "noaa": 249.86,
        "sg": 249.97
      },
      "windSpeed": {
        "dwd": 7.04,
        "ecmwf": 5.53,
        "ecmwf:aifs": 5.3,
        "noaa": 8.3,
        "sg": 5.53
      }
    },
    {
      "gust": { "ecmwf": 11.05, "noaa": 11.81, "sg": 11.05 },
      "pressure": {
        "ecmwf": 1008.34,
        "ecmwf:aifs": 1009.57,
        "noaa": 1027.08,
        "sg": 1008.34
      },
      "time": "2026-02-15T17:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "noaa": 12.94, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.2,
        "ecmwf": 2.48,
        "meteo": 2.2,
        "noaa": 2.31,
        "sg": 2.48
      },
      "windDirection": {
        "dwd": 239.86,
        "ecmwf": 250.44,
        "ecmwf:aifs": 240.58,
        "noaa": 251.17,
        "sg": 250.44
      },
      "windSpeed": {
        "dwd": 6.94,
        "ecmwf": 5.25,
        "ecmwf:aifs": 5.28,
        "noaa": 8.39,
        "sg": 5.25
      }
    },
    {
      "gust": { "ecmwf": 11.05, "noaa": 12.26, "sg": 11.05 },
      "pressure": {
        "ecmwf": 1008.54,
        "ecmwf:aifs": 1009.35,
        "noaa": 1027.12,
        "sg": 1008.54
      },
      "time": "2026-02-15T18:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "noaa": 12.95, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.22,
        "ecmwf": 2.54,
        "meteo": 2.25,
        "noaa": 2.42,
        "sg": 2.54
      },
      "windDirection": {
        "dwd": 237.02,
        "ecmwf": 250.92,
        "ecmwf:aifs": 239.88,
        "noaa": 252.48,
        "sg": 250.92
      },
      "windSpeed": {
        "dwd": 6.83,
        "ecmwf": 4.98,
        "ecmwf:aifs": 5.25,
        "noaa": 8.49,
        "sg": 4.98
      }
    },
    {
      "gust": { "ecmwf": 9.39, "noaa": 12.19, "sg": 9.39 },
      "pressure": {
        "ecmwf": 1008.67,
        "ecmwf:aifs": 1009.41,
        "noaa": 1027.45,
        "sg": 1008.67
      },
      "time": "2026-02-15T19:00:00+00:00",
      "waterTemperature": { "meto": 13.25, "noaa": 12.95, "sg": 13.25 },
      "waveHeight": {
        "dwd": 2.27,
        "ecmwf": 2.63,
        "meteo": 2.32,
        "noaa": 2.57,
        "sg": 2.63
      },
      "windDirection": {
        "dwd": 235.28,
        "ecmwf": 247.52,
        "ecmwf:aifs": 239.3,
        "noaa": 251.84,
        "sg": 247.52
      },
      "windSpeed": {
        "dwd": 6.81,
        "ecmwf": 5.0,
        "ecmwf:aifs": 5.31,
        "noaa": 8.3,
        "sg": 5.0
      }
    },
    {
      "gust": { "ecmwf": 9.39, "noaa": 12.13, "sg": 9.39 },
      "pressure": {
        "ecmwf": 1008.8,
        "ecmwf:aifs": 1009.46,
        "noaa": 1027.78,
        "sg": 1008.8
      },
      "time": "2026-02-15T20:00:00+00:00",
      "waterTemperature": { "meto": 13.25, "noaa": 12.96, "sg": 13.25 },
      "waveHeight": {
        "dwd": 2.31,
        "ecmwf": 2.71,
        "meteo": 2.38,
        "noaa": 2.71,
        "sg": 2.71
      },
      "windDirection": {
        "dwd": 233.54,
        "ecmwf": 244.13,
        "ecmwf:aifs": 238.72,
        "noaa": 251.2,
        "sg": 244.13
      },
      "windSpeed": {
        "dwd": 6.78,
        "ecmwf": 5.01,
        "ecmwf:aifs": 5.38,
        "noaa": 8.1,
        "sg": 5.01
      }
    },
    {
      "gust": { "ecmwf": 9.39, "noaa": 12.06, "sg": 9.39 },
      "pressure": {
        "ecmwf": 1008.93,
        "ecmwf:aifs": 1009.51,
        "noaa": 1028.11,
        "sg": 1008.93
      },
      "time": "2026-02-15T21:00:00+00:00",
      "waterTemperature": { "meto": 13.24, "noaa": 12.95, "sg": 13.24 },
      "waveHeight": {
        "dwd": 2.36,
        "ecmwf": 2.8,
        "meteo": 2.45,
        "noaa": 2.86,
        "sg": 2.8
      },
      "windDirection": {
        "dwd": 231.8,
        "ecmwf": 240.73,
        "ecmwf:aifs": 238.15,
        "noaa": 250.56,
        "sg": 240.73
      },
      "windSpeed": {
        "dwd": 6.76,
        "ecmwf": 5.03,
        "ecmwf:aifs": 5.44,
        "noaa": 7.91,
        "sg": 5.03
      }
    },
    {
      "gust": { "ecmwf": 7.25, "noaa": 12.44, "sg": 7.25 },
      "pressure": {
        "ecmwf": 1008.89,
        "ecmwf:aifs": 1009.56,
        "noaa": 1027.89,
        "sg": 1008.89
      },
      "time": "2026-02-15T22:00:00+00:00",
      "waterTemperature": { "meto": 13.24, "noaa": 12.96, "sg": 13.24 },
      "waveHeight": {
        "dwd": 2.44,
        "ecmwf": 2.89,
        "meteo": 2.52,
        "noaa": 2.99,
        "sg": 2.89
      },
      "windDirection": {
        "dwd": 230.06,
        "ecmwf": 240.44,
        "ecmwf:aifs": 237.57,
        "noaa": 246.86,
        "sg": 240.44
      },
      "windSpeed": {
        "dwd": 7.38,
        "ecmwf": 5.07,
        "ecmwf:aifs": 5.5,
        "noaa": 8.39,
        "sg": 5.07
      }
    },
    {
      "gust": { "ecmwf": 7.25, "noaa": 12.82, "sg": 7.25 },
      "pressure": {
        "ecmwf": 1008.85,
        "ecmwf:aifs": 1009.62,
        "noaa": 1027.67,
        "sg": 1008.85
      },
      "time": "2026-02-15T23:00:00+00:00",
      "waterTemperature": { "meto": 13.23, "noaa": 12.95, "sg": 13.23 },
      "waveHeight": {
        "dwd": 2.52,
        "ecmwf": 2.97,
        "meteo": 2.6,
        "noaa": 3.13,
        "sg": 2.97
      },
      "windDirection": {
        "dwd": 228.33,
        "ecmwf": 240.14,
        "ecmwf:aifs": 236.99,
        "noaa": 243.15,
        "sg": 240.14
      },
      "windSpeed": {
        "dwd": 7.99,
        "ecmwf": 5.12,
        "ecmwf:aifs": 5.57,
        "noaa": 8.88,
        "sg": 5.12
      }
    },
    {
      "gust": { "ecmwf": 7.25, "noaa": 13.2, "sg": 7.25 },
      "pressure": {
        "ecmwf": 1008.81,
        "ecmwf:aifs": 1009.67,
        "noaa": 1027.45,
        "sg": 1008.81
      },
      "time": "2026-02-16T00:00:00+00:00",
      "waterTemperature": { "meto": 13.23, "noaa": 12.94, "sg": 13.23 },
      "waveHeight": {
        "dwd": 2.6,
        "ecmwf": 3.06,
        "meteo": 2.67,
        "noaa": 3.26,
        "sg": 3.06
      },
      "windDirection": {
        "dwd": 226.59,
        "ecmwf": 239.85,
        "ecmwf:aifs": 236.41,
        "noaa": 239.45,
        "sg": 239.85
      },
      "windSpeed": {
        "dwd": 8.61,
        "ecmwf": 5.16,
        "ecmwf:aifs": 5.63,
        "noaa": 9.36,
        "sg": 5.16
      }
    },
    {
      "gust": { "ecmwf": 8.83, "noaa": 13.67, "sg": 8.83 },
      "pressure": {
        "ecmwf": 1008.55,
        "ecmwf:aifs": 1009.45,
        "noaa": 1027.2,
        "sg": 1008.55
      },
      "time": "2026-02-16T01:00:00+00:00",
      "waterTemperature": { "meto": 13.22, "noaa": 12.92, "sg": 13.22 },
      "waveHeight": {
        "dwd": 2.7,
        "ecmwf": 3.15,
        "meteo": 2.75,
        "noaa": 3.34,
        "sg": 3.15
      },
      "windDirection": {
        "dwd": 230.2,
        "ecmwf": 244.08,
        "ecmwf:aifs": 239.56,
        "noaa": 242.24,
        "sg": 244.08
      },
      "windSpeed": {
        "dwd": 8.89,
        "ecmwf": 5.13,
        "ecmwf:aifs": 5.65,
        "noaa": 9.72,
        "sg": 5.13
      }
    },
    {
      "gust": { "ecmwf": 8.83, "noaa": 14.13, "sg": 8.83 },
      "pressure": {
        "ecmwf": 1008.28,
        "ecmwf:aifs": 1009.23,
        "noaa": 1026.94,
        "sg": 1008.28
      },
      "time": "2026-02-16T02:00:00+00:00",
      "waterTemperature": { "meto": 13.22, "noaa": 12.91, "sg": 13.22 },
      "waveHeight": {
        "dwd": 2.79,
        "ecmwf": 3.23,
        "meteo": 2.83,
        "noaa": 3.41,
        "sg": 3.23
      },
      "windDirection": {
        "dwd": 233.81,
        "ecmwf": 248.31,
        "ecmwf:aifs": 242.72,
        "noaa": 245.04,
        "sg": 248.31
      },
      "windSpeed": {
        "dwd": 9.18,
        "ecmwf": 5.11,
        "ecmwf:aifs": 5.68,
        "noaa": 10.07,
        "sg": 5.11
      }
    },
    {
      "gust": { "ecmwf": 8.83, "noaa": 14.6, "sg": 8.83 },
      "pressure": {
        "ecmwf": 1008.01,
        "ecmwf:aifs": 1009.02,
        "noaa": 1026.69,
        "sg": 1008.01
      },
      "time": "2026-02-16T03:00:00+00:00",
      "waterTemperature": { "meto": 13.22, "noaa": 12.9, "sg": 13.22 },
      "waveHeight": {
        "dwd": 2.89,
        "ecmwf": 3.31,
        "meteo": 2.91,
        "noaa": 3.49,
        "sg": 3.31
      },
      "windDirection": {
        "dwd": 237.42,
        "ecmwf": 252.54,
        "ecmwf:aifs": 245.87,
        "noaa": 247.83,
        "sg": 252.54
      },
      "windSpeed": {
        "dwd": 9.46,
        "ecmwf": 5.08,
        "ecmwf:aifs": 5.7,
        "noaa": 10.43,
        "sg": 5.08
      }
    },
    {
      "gust": { "ecmwf": 9.09, "noaa": 14.61, "sg": 9.09 },
      "pressure": {
        "ecmwf": 1007.93,
        "ecmwf:aifs": 1008.8,
        "noaa": 1026.58,
        "sg": 1007.93
      },
      "time": "2026-02-16T04:00:00+00:00",
      "waterTemperature": { "meto": 13.21, "noaa": 12.89, "sg": 13.21 },
      "waveHeight": {
        "dwd": 2.94,
        "ecmwf": 3.36,
        "meteo": 2.96,
        "noaa": 3.53,
        "sg": 3.36
      },
      "windDirection": {
        "dwd": 240.51,
        "ecmwf": 255.28,
        "ecmwf:aifs": 249.02,
        "noaa": 249.75,
        "sg": 255.28
      },
      "windSpeed": {
        "dwd": 9.34,
        "ecmwf": 5.05,
        "ecmwf:aifs": 5.72,
        "noaa": 10.29,
        "sg": 5.05
      }
    },
    {
      "gust": { "ecmwf": 9.09, "noaa": 14.61, "sg": 9.09 },
      "pressure": {
        "ecmwf": 1007.84,
        "ecmwf:aifs": 1008.58,
        "noaa": 1026.48,
        "sg": 1007.84
      },
      "time": "2026-02-16T05:00:00+00:00",
      "waterTemperature": { "meto": 13.21, "noaa": 12.89, "sg": 13.21 },
      "waveHeight": {
        "dwd": 3.0,
        "ecmwf": 3.4,
        "meteo": 3.01,
        "noaa": 3.56,
        "sg": 3.4
      },
      "windDirection": {
        "dwd": 243.6,
        "ecmwf": 258.02,
        "ecmwf:aifs": 252.18,
        "noaa": 251.67,
        "sg": 258.02
      },
      "windSpeed": {
        "dwd": 9.21,
        "ecmwf": 5.01,
        "ecmwf:aifs": 5.75,
        "noaa": 10.16,
        "sg": 5.01
      }
    },
    {
      "gust": { "ecmwf": 9.09, "noaa": 14.62, "sg": 9.09 },
      "pressure": {
        "ecmwf": 1007.76,
        "ecmwf:aifs": 1008.36,
        "noaa": 1026.37,
        "sg": 1007.76
      },
      "time": "2026-02-16T06:00:00+00:00",
      "waterTemperature": { "meto": 13.2, "noaa": 12.89, "sg": 13.2 },
      "waveHeight": {
        "dwd": 3.05,
        "ecmwf": 3.44,
        "meteo": 3.06,
        "noaa": 3.6,
        "sg": 3.44
      },
      "windDirection": {
        "dwd": 246.69,
        "ecmwf": 260.76,
        "ecmwf:aifs": 255.33,
        "noaa": 253.59,
        "sg": 260.76
      },
      "windSpeed": {
        "dwd": 9.09,
        "ecmwf": 4.98,
        "ecmwf:aifs": 5.77,
        "noaa": 10.02,
        "sg": 4.98
      }
    },
    {
      "gust": { "ecmwf": 9.36, "noaa": 14.53, "sg": 9.36 },
      "pressure": {
        "ecmwf": 1008.07,
        "ecmwf:aifs": 1008.63,
        "noaa": 1026.67,
        "sg": 1008.07
      },
      "time": "2026-02-16T07:00:00+00:00",
      "waterTemperature": { "meto": 13.19, "noaa": 12.88, "sg": 13.19 },
      "waveHeight": {
        "dwd": 3.07,
        "ecmwf": 3.45,
        "meteo": 3.08,
        "noaa": 3.59,
        "sg": 3.45
      },
      "windDirection": {
        "dwd": 250.02,
        "ecmwf": 260.93,
        "ecmwf:aifs": 256.24,
        "noaa": 255.83,
        "sg": 260.93
      },
      "windSpeed": {
        "dwd": 9.06,
        "ecmwf": 4.95,
        "ecmwf:aifs": 5.83,
        "noaa": 9.84,
        "sg": 4.95
      }
    },
    {
      "gust": { "ecmwf": 9.36, "noaa": 14.44, "sg": 9.36 },
      "pressure": {
        "ecmwf": 1008.39,
        "ecmwf:aifs": 1008.91,
        "noaa": 1026.97,
        "sg": 1008.39
      },
      "time": "2026-02-16T08:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "noaa": 12.88, "sg": 13.18 },
      "waveHeight": {
        "dwd": 3.1,
        "ecmwf": 3.45,
        "meteo": 3.1,
        "noaa": 3.58,
        "sg": 3.45
      },
      "windDirection": {
        "dwd": 253.35,
        "ecmwf": 261.09,
        "ecmwf:aifs": 257.14,
        "noaa": 258.07,
        "sg": 261.09
      },
      "windSpeed": {
        "dwd": 9.04,
        "ecmwf": 4.93,
        "ecmwf:aifs": 5.89,
        "noaa": 9.66,
        "sg": 4.93
      }
    },
    {
      "gust": { "ecmwf": 9.36, "noaa": 14.36, "sg": 9.36 },
      "pressure": {
        "ecmwf": 1008.71,
        "ecmwf:aifs": 1009.18,
        "noaa": 1027.26,
        "sg": 1008.71
      },
      "time": "2026-02-16T09:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "noaa": 12.88, "sg": 13.18 },
      "waveHeight": {
        "dwd": 3.12,
        "ecmwf": 3.46,
        "meteo": 3.12,
        "noaa": 3.57,
        "sg": 3.46
      },
      "windDirection": {
        "dwd": 256.68,
        "ecmwf": 261.26,
        "ecmwf:aifs": 258.05,
        "noaa": 260.31,
        "sg": 261.26
      },
      "windSpeed": {
        "dwd": 9.01,
        "ecmwf": 4.9,
        "ecmwf:aifs": 5.95,
        "noaa": 9.48,
        "sg": 4.9
      }
    },
    {
      "gust": { "ecmwf": 10.78, "noaa": 14.29, "sg": 10.78 },
      "pressure": {
        "ecmwf": 1009.06,
        "ecmwf:aifs": 1009.45,
        "noaa": 1027.47,
        "sg": 1009.06
      },
      "time": "2026-02-16T10:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "noaa": 12.88, "sg": 13.18 },
      "waveHeight": {
        "dwd": 3.1,
        "ecmwf": 3.44,
        "meteo": 3.11,
        "noaa": 3.54,
        "sg": 3.44
      },
      "windDirection": {
        "dwd": 255.12,
        "ecmwf": 261.27,
        "ecmwf:aifs": 258.95,
        "noaa": 260.15,
        "sg": 261.27
      },
      "windSpeed": {
        "dwd": 8.47,
        "ecmwf": 5.07,
        "ecmwf:aifs": 6.02,
        "noaa": 9.46,
        "sg": 5.07
      }
    },
    {
      "gust": { "ecmwf": 10.78, "noaa": 14.22, "sg": 10.78 },
      "pressure": {
        "ecmwf": 1009.41,
        "ecmwf:aifs": 1009.72,
        "noaa": 1027.68,
        "sg": 1009.41
      },
      "time": "2026-02-16T11:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "noaa": 12.89, "sg": 13.18 },
      "waveHeight": {
        "dwd": 3.08,
        "ecmwf": 3.42,
        "meteo": 3.09,
        "noaa": 3.51,
        "sg": 3.42
      },
      "windDirection": {
        "dwd": 253.57,
        "ecmwf": 261.29,
        "ecmwf:aifs": 259.86,
        "noaa": 259.99,
        "sg": 261.29
      },
      "windSpeed": {
        "dwd": 7.92,
        "ecmwf": 5.25,
        "ecmwf:aifs": 6.08,
        "noaa": 9.45,
        "sg": 5.25
      }
    },
    {
      "gust": { "ecmwf": 10.78, "noaa": 14.15, "sg": 10.78 },
      "pressure": {
        "ecmwf": 1009.76,
        "ecmwf:aifs": 1009.99,
        "noaa": 1027.89,
        "sg": 1009.76
      },
      "time": "2026-02-16T12:00:00+00:00",
      "waterTemperature": { "meto": 13.19, "noaa": 12.89, "sg": 13.19 },
      "waveHeight": {
        "dwd": 3.06,
        "ecmwf": 3.41,
        "meteo": 3.08,
        "noaa": 3.48,
        "sg": 3.41
      },
      "windDirection": {
        "dwd": 252.01,
        "ecmwf": 261.3,
        "ecmwf:aifs": 260.76,
        "noaa": 259.83,
        "sg": 261.3
      },
      "windSpeed": {
        "dwd": 7.38,
        "ecmwf": 5.42,
        "ecmwf:aifs": 6.14,
        "noaa": 9.43,
        "sg": 5.42
      }
    },
    {
      "gust": { "ecmwf": 11.09, "noaa": 13.58, "sg": 11.09 },
      "pressure": {
        "ecmwf": 1009.53,
        "ecmwf:aifs": 1009.86,
        "noaa": 1027.59,
        "sg": 1009.53
      },
      "time": "2026-02-16T13:00:00+00:00",
      "waterTemperature": { "meto": 13.2, "noaa": 12.9, "sg": 13.2 },
      "waveHeight": {
        "dwd": 3.04,
        "ecmwf": 3.38,
        "meteo": 3.05,
        "noaa": 3.44,
        "sg": 3.38
      },
      "windDirection": {
        "dwd": 253.07,
        "ecmwf": 261.39,
        "ecmwf:aifs": 261.54,
        "noaa": 260.97,
        "sg": 261.39
      },
      "windSpeed": {
        "dwd": 6.77,
        "ecmwf": 5.04,
        "ecmwf:aifs": 5.93,
        "noaa": 9.04,
        "sg": 5.04
      }
    },
    {
      "gust": { "ecmwf": 11.09, "noaa": 13.01, "sg": 11.09 },
      "pressure": {
        "ecmwf": 1009.29,
        "ecmwf:aifs": 1009.73,
        "noaa": 1027.3,
        "sg": 1009.29
      },
      "time": "2026-02-16T14:00:00+00:00",
      "waterTemperature": { "meto": 13.2, "noaa": 12.9, "sg": 13.2 },
      "waveHeight": {
        "dwd": 3.01,
        "ecmwf": 3.36,
        "meteo": 3.02,
        "noaa": 3.4,
        "sg": 3.36
      },
      "windDirection": {
        "dwd": 254.13,
        "ecmwf": 261.47,
        "ecmwf:aifs": 262.32,
        "noaa": 262.1,
        "sg": 261.47
      },
      "windSpeed": {
        "dwd": 6.16,
        "ecmwf": 4.65,
        "ecmwf:aifs": 5.71,
        "noaa": 8.64,
        "sg": 4.65
      }
    },
    {
      "gust": { "ecmwf": 11.09, "noaa": 12.44, "sg": 11.09 },
      "pressure": {
        "ecmwf": 1009.06,
        "ecmwf:aifs": 1009.6,
        "noaa": 1027.0,
        "sg": 1009.06
      },
      "time": "2026-02-16T15:00:00+00:00",
      "waterTemperature": { "meto": 13.2, "noaa": 12.91, "sg": 13.2 },
      "waveHeight": {
        "dwd": 2.99,
        "ecmwf": 3.33,
        "meteo": 2.99,
        "noaa": 3.36,
        "sg": 3.33
      },
      "windDirection": {
        "dwd": 255.19,
        "ecmwf": 261.56,
        "ecmwf:aifs": 263.1,
        "noaa": 263.24,
        "sg": 261.56
      },
      "windSpeed": {
        "dwd": 5.55,
        "ecmwf": 4.27,
        "ecmwf:aifs": 5.5,
        "noaa": 8.25,
        "sg": 4.27
      }
    },
    {
      "gust": { "ecmwf": 9.94, "noaa": 11.86, "sg": 9.94 },
      "pressure": {
        "ecmwf": 1008.99,
        "ecmwf:aifs": 1009.47,
        "noaa": 1027.07,
        "sg": 1008.99
      },
      "time": "2026-02-16T16:00:00+00:00",
      "waterTemperature": { "meto": 13.2, "noaa": 12.92, "sg": 13.2 },
      "waveHeight": {
        "dwd": 2.97,
        "ecmwf": 3.33,
        "meteo": 2.96,
        "noaa": 3.32,
        "sg": 3.33
      },
      "windDirection": {
        "dwd": 240.52,
        "ecmwf": 261.32,
        "ecmwf:aifs": 263.87,
        "noaa": 261.62,
        "sg": 261.32
      },
      "windSpeed": {
        "dwd": 4.95,
        "ecmwf": 3.95,
        "ecmwf:aifs": 5.29,
        "noaa": 7.79,
        "sg": 3.95
      }
    },
    {
      "gust": { "ecmwf": 9.94, "noaa": 11.28, "sg": 9.94 },
      "pressure": {
        "ecmwf": 1008.92,
        "ecmwf:aifs": 1009.34,
        "noaa": 1027.14,
        "sg": 1008.92
      },
      "time": "2026-02-16T17:00:00+00:00",
      "waterTemperature": { "meto": 13.19, "noaa": 12.93, "sg": 13.19 },
      "waveHeight": {
        "dwd": 2.94,
        "ecmwf": 3.34,
        "meteo": 2.94,
        "noaa": 3.28,
        "sg": 3.34
      },
      "windDirection": {
        "dwd": 225.86,
        "ecmwf": 261.07,
        "ecmwf:aifs": 264.65,
        "noaa": 259.99,
        "sg": 261.07
      },
      "windSpeed": {
        "dwd": 4.36,
        "ecmwf": 3.63,
        "ecmwf:aifs": 5.07,
        "noaa": 7.33,
        "sg": 3.63
      }
    },
    {
      "gust": { "ecmwf": 9.94, "noaa": 10.7, "sg": 9.94 },
      "pressure": {
        "ecmwf": 1008.85,
        "ecmwf:aifs": 1009.21,
        "noaa": 1027.21,
        "sg": 1008.85
      },
      "time": "2026-02-16T18:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "noaa": 12.94, "sg": 13.18 },
      "waveHeight": {
        "dwd": 2.92,
        "ecmwf": 3.35,
        "meteo": 2.91,
        "noaa": 3.24,
        "sg": 3.35
      },
      "windDirection": {
        "dwd": 211.19,
        "ecmwf": 260.83,
        "ecmwf:aifs": 265.43,
        "noaa": 258.37,
        "sg": 260.83
      },
      "windSpeed": {
        "dwd": 3.76,
        "ecmwf": 3.31,
        "ecmwf:aifs": 4.86,
        "noaa": 6.87,
        "sg": 3.31
      }
    },
    {
      "gust": { "ecmwf": 6.9, "noaa": 9.81, "sg": 6.9 },
      "pressure": {
        "ecmwf": 1008.91,
        "ecmwf:aifs": 1009.31,
        "noaa": 1027.46,
        "sg": 1008.91
      },
      "time": "2026-02-16T19:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "noaa": 12.94, "sg": 13.18 },
      "waveHeight": {
        "dwd": 2.91,
        "ecmwf": 3.39,
        "meteo": 2.91,
        "noaa": 3.2,
        "sg": 3.39
      },
      "windDirection": {
        "dwd": 213.0,
        "ecmwf": 255.31,
        "ecmwf:aifs": 264.44,
        "noaa": 253.95,
        "sg": 255.31
      },
      "windSpeed": {
        "dwd": 4.35,
        "ecmwf": 3.47,
        "ecmwf:aifs": 4.72,
        "noaa": 6.35,
        "sg": 3.47
      }
    },
    {
      "gust": { "ecmwf": 6.9, "noaa": 8.92, "sg": 6.9 },
      "pressure": {
        "ecmwf": 1008.97,
        "ecmwf:aifs": 1009.42,
        "noaa": 1027.7,
        "sg": 1008.97
      },
      "time": "2026-02-16T20:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "noaa": 12.94, "sg": 13.18 },
      "waveHeight": {
        "dwd": 2.91,
        "ecmwf": 3.43,
        "meteo": 2.92,
        "noaa": 3.17,
        "sg": 3.43
      },
      "windDirection": {
        "dwd": 214.82,
        "ecmwf": 249.79,
        "ecmwf:aifs": 263.45,
        "noaa": 249.52,
        "sg": 249.79
      },
      "windSpeed": {
        "dwd": 4.94,
        "ecmwf": 3.63,
        "ecmwf:aifs": 4.58,
        "noaa": 5.84,
        "sg": 3.63
      }
    },
    {
      "gust": { "ecmwf": 6.9, "noaa": 8.03, "sg": 6.9 },
      "pressure": {
        "ecmwf": 1009.04,
        "ecmwf:aifs": 1009.52,
        "noaa": 1027.95,
        "sg": 1009.04
      },
      "time": "2026-02-16T21:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "noaa": 12.94, "sg": 13.18 },
      "waveHeight": {
        "dwd": 2.9,
        "ecmwf": 3.47,
        "meteo": 2.92,
        "noaa": 3.13,
        "sg": 3.47
      },
      "windDirection": {
        "dwd": 216.63,
        "ecmwf": 244.27,
        "ecmwf:aifs": 262.46,
        "noaa": 245.1,
        "sg": 244.27
      },
      "windSpeed": {
        "dwd": 5.53,
        "ecmwf": 3.79,
        "ecmwf:aifs": 4.45,
        "noaa": 5.32,
        "sg": 3.79
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.07, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1009.1,
        "ecmwf:aifs": 1009.63,
        "noaa": 1027.83,
        "sg": 1009.1
      },
      "time": "2026-02-16T22:00:00+00:00",
      "waterTemperature": { "meto": 13.17, "noaa": 12.94, "sg": 13.17 },
      "waveHeight": {
        "dwd": 2.9,
        "ecmwf": 3.49,
        "meteo": 2.9,
        "noaa": 3.09,
        "sg": 3.49
      },
      "windDirection": {
        "dwd": 217.55,
        "ecmwf": 241.67,
        "ecmwf:aifs": 261.47,
        "noaa": 245.01,
        "sg": 241.67
      },
      "windSpeed": {
        "dwd": 5.74,
        "ecmwf": 3.83,
        "ecmwf:aifs": 4.31,
        "noaa": 5.44,
        "sg": 3.83
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.11, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1009.16,
        "ecmwf:aifs": 1009.73,
        "noaa": 1027.71,
        "sg": 1009.16
      },
      "time": "2026-02-16T23:00:00+00:00",
      "waterTemperature": { "meto": 13.17, "noaa": 12.94, "sg": 13.17 },
      "waveHeight": {
        "dwd": 2.9,
        "ecmwf": 3.51,
        "meteo": 2.88,
        "noaa": 3.06,
        "sg": 3.51
      },
      "windDirection": {
        "dwd": 218.47,
        "ecmwf": 239.08,
        "ecmwf:aifs": 260.48,
        "noaa": 244.92,
        "sg": 239.08
      },
      "windSpeed": {
        "dwd": 5.94,
        "ecmwf": 3.88,
        "ecmwf:aifs": 4.17,
        "noaa": 5.57,
        "sg": 3.88
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.15, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1009.22,
        "ecmwf:aifs": 1009.84,
        "noaa": 1027.58,
        "sg": 1009.22
      },
      "time": "2026-02-17T00:00:00+00:00",
      "waterTemperature": { "meto": 13.16, "noaa": 12.94, "sg": 13.16 },
      "waveHeight": {
        "dwd": 2.9,
        "ecmwf": 3.53,
        "meteo": 2.86,
        "noaa": 3.02,
        "sg": 3.53
      },
      "windDirection": {
        "dwd": 219.39,
        "ecmwf": 236.48,
        "ecmwf:aifs": 259.49,
        "noaa": 244.83,
        "sg": 236.48
      },
      "windSpeed": {
        "dwd": 6.15,
        "ecmwf": 3.92,
        "ecmwf:aifs": 4.03,
        "noaa": 5.69,
        "sg": 3.92
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.98, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1008.81,
        "ecmwf:aifs": 1009.55,
        "noaa": 1027.24,
        "sg": 1008.81
      },
      "time": "2026-02-17T01:00:00+00:00",
      "waterTemperature": { "meto": 13.14, "noaa": 12.93, "sg": 13.14 },
      "waveHeight": {
        "dwd": 2.89,
        "ecmwf": 3.51,
        "meteo": 2.85,
        "noaa": 2.99,
        "sg": 3.51
      },
      "windDirection": {
        "dwd": 219.61,
        "ecmwf": 235.87,
        "ecmwf:aifs": 257.73,
        "noaa": 246.34,
        "sg": 235.87
      },
      "windSpeed": {
        "dwd": 5.93,
        "ecmwf": 3.62,
        "ecmwf:aifs": 3.94,
        "noaa": 5.5,
        "sg": 3.62
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.81, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1008.4,
        "ecmwf:aifs": 1009.26,
        "noaa": 1026.9,
        "sg": 1008.4
      },
      "time": "2026-02-17T02:00:00+00:00",
      "waterTemperature": { "meto": 13.14, "noaa": 12.93, "sg": 13.14 },
      "waveHeight": {
        "dwd": 2.89,
        "ecmwf": 3.5,
        "meteo": 2.83,
        "noaa": 2.95,
        "sg": 3.5
      },
      "windDirection": {
        "dwd": 219.84,
        "ecmwf": 235.25,
        "ecmwf:aifs": 255.97,
        "noaa": 247.84,
        "sg": 235.25
      },
      "windSpeed": {
        "dwd": 5.7,
        "ecmwf": 3.31,
        "ecmwf:aifs": 3.85,
        "noaa": 5.32,
        "sg": 3.31
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.64, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.99,
        "ecmwf:aifs": 1008.96,
        "noaa": 1026.55,
        "sg": 1007.99
      },
      "time": "2026-02-17T03:00:00+00:00",
      "waterTemperature": { "meto": 13.13, "noaa": 12.93, "sg": 13.13 },
      "waveHeight": {
        "dwd": 2.88,
        "ecmwf": 3.48,
        "meteo": 2.82,
        "noaa": 2.92,
        "sg": 3.48
      },
      "windDirection": {
        "dwd": 220.06,
        "ecmwf": 234.64,
        "ecmwf:aifs": 254.21,
        "noaa": 249.35,
        "sg": 234.64
      },
      "windSpeed": {
        "dwd": 5.48,
        "ecmwf": 3.01,
        "ecmwf:aifs": 3.76,
        "noaa": 5.13,
        "sg": 3.01
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.26, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.74,
        "ecmwf:aifs": 1008.67,
        "noaa": 1026.28,
        "sg": 1007.74
      },
      "time": "2026-02-17T04:00:00+00:00",
      "waterTemperature": { "meto": 13.12, "noaa": 12.92, "sg": 13.12 },
      "waveHeight": {
        "dwd": 2.87,
        "ecmwf": 3.45,
        "meteo": 2.8,
        "noaa": 2.89,
        "sg": 3.45
      },
      "windDirection": {
        "dwd": 216.44,
        "ecmwf": 236.96,
        "ecmwf:aifs": 252.45,
        "noaa": 249.79,
        "sg": 236.96
      },
      "windSpeed": {
        "dwd": 5.45,
        "ecmwf": 3.17,
        "ecmwf:aifs": 3.66,
        "noaa": 5.18,
        "sg": 3.17
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 6.89, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.5,
        "ecmwf:aifs": 1008.38,
        "noaa": 1026.01,
        "sg": 1007.5
      },
      "time": "2026-02-17T05:00:00+00:00",
      "waterTemperature": { "meto": 13.11, "noaa": 12.91, "sg": 13.11 },
      "waveHeight": {
        "dwd": 2.85,
        "ecmwf": 3.41,
        "meteo": 2.79,
        "noaa": 2.86,
        "sg": 3.41
      },
      "windDirection": {
        "dwd": 212.82,
        "ecmwf": 239.27,
        "ecmwf:aifs": 250.69,
        "noaa": 250.23,
        "sg": 239.27
      },
      "windSpeed": {
        "dwd": 5.41,
        "ecmwf": 3.32,
        "ecmwf:aifs": 3.57,
        "noaa": 5.22,
        "sg": 3.32
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 6.51, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.26,
        "ecmwf:aifs": 1008.09,
        "noaa": 1025.74,
        "sg": 1007.26
      },
      "time": "2026-02-17T06:00:00+00:00",
      "waterTemperature": { "meto": 13.11, "noaa": 12.91, "sg": 13.11 },
      "waveHeight": {
        "dwd": 2.84,
        "ecmwf": 3.38,
        "meteo": 2.77,
        "noaa": 2.83,
        "sg": 3.38
      },
      "windDirection": {
        "dwd": 209.2,
        "ecmwf": 241.59,
        "ecmwf:aifs": 248.93,
        "noaa": 250.67,
        "sg": 241.59
      },
      "windSpeed": {
        "dwd": 5.38,
        "ecmwf": 3.48,
        "ecmwf:aifs": 3.48,
        "noaa": 5.27,
        "sg": 3.48
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 6.58, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.38,
        "ecmwf:aifs": 1008.14,
        "noaa": 1025.75,
        "sg": 1007.38
      },
      "time": "2026-02-17T07:00:00+00:00",
      "waterTemperature": { "meto": 13.11, "noaa": 12.9, "sg": 13.11 },
      "waveHeight": {
        "dwd": 2.82,
        "ecmwf": 3.34,
        "meteo": 2.74,
        "noaa": 2.79,
        "sg": 3.34
      },
      "windDirection": {
        "dwd": 204.98,
        "ecmwf": 236.2,
        "ecmwf:aifs": 245.99,
        "noaa": 242.77,
        "sg": 236.2
      },
      "windSpeed": {
        "dwd": 5.24,
        "ecmwf": 3.59,
        "ecmwf:aifs": 3.59,
        "noaa": 5.34,
        "sg": 3.59
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 6.64, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.51,
        "ecmwf:aifs": 1008.19,
        "noaa": 1025.76,
        "sg": 1007.51
      },
      "time": "2026-02-17T08:00:00+00:00",
      "waterTemperature": { "meto": 13.11, "noaa": 12.9, "sg": 13.11 },
      "waveHeight": {
        "dwd": 2.79,
        "ecmwf": 3.3,
        "meteo": 2.71,
        "noaa": 2.75,
        "sg": 3.3
      },
      "windDirection": {
        "dwd": 200.77,
        "ecmwf": 230.81,
        "ecmwf:aifs": 243.06,
        "noaa": 234.87,
        "sg": 230.81
      },
      "windSpeed": {
        "dwd": 5.09,
        "ecmwf": 3.7,
        "ecmwf:aifs": 3.7,
        "noaa": 5.41,
        "sg": 3.7
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 6.71, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.63,
        "ecmwf:aifs": 1008.24,
        "noaa": 1025.77,
        "sg": 1007.63
      },
      "time": "2026-02-17T09:00:00+00:00",
      "waterTemperature": { "meto": 13.12, "noaa": 12.9, "sg": 13.12 },
      "waveHeight": {
        "dwd": 2.77,
        "ecmwf": 3.26,
        "meteo": 2.68,
        "noaa": 2.71,
        "sg": 3.26
      },
      "windDirection": {
        "dwd": 196.55,
        "ecmwf": 225.42,
        "ecmwf:aifs": 240.12,
        "noaa": 226.97,
        "sg": 225.42
      },
      "windSpeed": {
        "dwd": 4.95,
        "ecmwf": 3.81,
        "ecmwf:aifs": 3.81,
        "noaa": 5.48,
        "sg": 3.81
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 6.94, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.6,
        "ecmwf:aifs": 1008.29,
        "noaa": 1025.72,
        "sg": 1007.6
      },
      "time": "2026-02-17T10:00:00+00:00",
      "waterTemperature": { "meto": 13.15, "noaa": 12.9, "sg": 13.15 },
      "waveHeight": {
        "dwd": 2.74,
        "ecmwf": 3.22,
        "meteo": 2.66,
        "noaa": 2.67,
        "sg": 3.22
      },
      "windDirection": {
        "dwd": 197.6,
        "ecmwf": 228.88,
        "ecmwf:aifs": 237.19,
        "noaa": 225.39,
        "sg": 228.88
      },
      "windSpeed": {
        "dwd": 5.36,
        "ecmwf": 4.03,
        "ecmwf:aifs": 3.92,
        "noaa": 5.64,
        "sg": 4.03
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.18, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.57,
        "ecmwf:aifs": 1008.35,
        "noaa": 1025.67,
        "sg": 1007.57
      },
      "time": "2026-02-17T11:00:00+00:00",
      "waterTemperature": { "meto": 13.19, "noaa": 12.9, "sg": 13.19 },
      "waveHeight": {
        "dwd": 2.72,
        "ecmwf": 3.18,
        "meteo": 2.63,
        "noaa": 2.63,
        "sg": 3.18
      },
      "windDirection": {
        "dwd": 198.64,
        "ecmwf": 232.35,
        "ecmwf:aifs": 234.26,
        "noaa": 223.8,
        "sg": 232.35
      },
      "windSpeed": {
        "dwd": 5.78,
        "ecmwf": 4.24,
        "ecmwf:aifs": 4.03,
        "noaa": 5.81,
        "sg": 4.24
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.42, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.55,
        "ecmwf:aifs": 1008.4,
        "noaa": 1025.63,
        "sg": 1007.55
      },
      "time": "2026-02-17T12:00:00+00:00",
      "waterTemperature": { "meto": 13.22, "noaa": 12.91, "sg": 13.22 },
      "waveHeight": {
        "dwd": 2.69,
        "ecmwf": 3.15,
        "meteo": 2.61,
        "noaa": 2.59,
        "sg": 3.15
      },
      "windDirection": {
        "dwd": 199.69,
        "ecmwf": 235.81,
        "ecmwf:aifs": 231.32,
        "noaa": 222.22,
        "sg": 235.81
      },
      "windSpeed": {
        "dwd": 6.19,
        "ecmwf": 4.46,
        "ecmwf:aifs": 4.14,
        "noaa": 5.97,
        "sg": 4.46
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.69, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1006.75,
        "ecmwf:aifs": 1007.92,
        "noaa": 1024.84,
        "sg": 1006.75
      },
      "time": "2026-02-17T13:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "noaa": 12.92, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.69,
        "ecmwf": 3.12,
        "meteo": 2.59,
        "noaa": 2.56,
        "sg": 3.12
      },
      "windDirection": {
        "dwd": 204.95,
        "ecmwf": 226.83,
        "ecmwf:aifs": 228.43,
        "noaa": 221.52,
        "sg": 226.83
      },
      "windSpeed": {
        "dwd": 6.48,
        "ecmwf": 4.62,
        "ecmwf:aifs": 4.1,
        "noaa": 6.1,
        "sg": 4.62
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.96, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1005.95,
        "ecmwf:aifs": 1007.43,
        "noaa": 1024.04,
        "sg": 1005.95
      },
      "time": "2026-02-17T14:00:00+00:00",
      "waterTemperature": { "meto": 13.29, "noaa": 12.94, "sg": 13.29 },
      "waveHeight": {
        "dwd": 2.69,
        "ecmwf": 3.09,
        "meteo": 2.56,
        "noaa": 2.52,
        "sg": 3.09
      },
      "windDirection": {
        "dwd": 210.22,
        "ecmwf": 217.84,
        "ecmwf:aifs": 225.54,
        "noaa": 220.82,
        "sg": 217.84
      },
      "windSpeed": {
        "dwd": 6.76,
        "ecmwf": 4.78,
        "ecmwf:aifs": 4.05,
        "noaa": 6.22,
        "sg": 4.78
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.23, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1005.14,
        "ecmwf:aifs": 1006.95,
        "noaa": 1023.25,
        "sg": 1005.14
      },
      "time": "2026-02-17T15:00:00+00:00",
      "waterTemperature": { "meto": 13.3, "noaa": 12.96, "sg": 13.3 },
      "waveHeight": {
        "dwd": 2.69,
        "ecmwf": 3.06,
        "meteo": 2.54,
        "noaa": 2.49,
        "sg": 3.06
      },
      "windDirection": {
        "dwd": 215.48,
        "ecmwf": 208.86,
        "ecmwf:aifs": 222.66,
        "noaa": 220.12,
        "sg": 208.86
      },
      "windSpeed": {
        "dwd": 7.05,
        "ecmwf": 4.94,
        "ecmwf:aifs": 4.01,
        "noaa": 6.35,
        "sg": 4.94
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.33, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1004.83,
        "ecmwf:aifs": 1006.47,
        "noaa": 1022.95,
        "sg": 1004.83
      },
      "time": "2026-02-17T16:00:00+00:00",
      "waterTemperature": { "meto": 13.3, "noaa": 12.98, "sg": 13.3 },
      "waveHeight": {
        "dwd": 2.67,
        "ecmwf": 3.02,
        "meteo": 2.51,
        "noaa": 2.47,
        "sg": 3.02
      },
      "windDirection": {
        "dwd": 209.54,
        "ecmwf": 211.01,
        "ecmwf:aifs": 219.77,
        "noaa": 218.28,
        "sg": 211.01
      },
      "windSpeed": {
        "dwd": 7.15,
        "ecmwf": 4.88,
        "ecmwf:aifs": 3.97,
        "noaa": 6.59,
        "sg": 4.88
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.44, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1004.51,
        "ecmwf:aifs": 1005.99,
        "noaa": 1022.65,
        "sg": 1004.51
      },
      "time": "2026-02-17T17:00:00+00:00",
      "waterTemperature": { "meto": 13.3, "noaa": 13.0, "sg": 13.3 },
      "waveHeight": {
        "dwd": 2.65,
        "ecmwf": 2.98,
        "meteo": 2.49,
        "noaa": 2.44,
        "sg": 2.98
      },
      "windDirection": {
        "dwd": 203.59,
        "ecmwf": 213.16,
        "ecmwf:aifs": 216.88,
        "noaa": 216.44,
        "sg": 213.16
      },
      "windSpeed": {
        "dwd": 7.25,
        "ecmwf": 4.82,
        "ecmwf:aifs": 3.92,
        "noaa": 6.83,
        "sg": 4.82
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.54, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1004.2,
        "ecmwf:aifs": 1005.51,
        "noaa": 1022.34,
        "sg": 1004.2
      },
      "time": "2026-02-17T18:00:00+00:00",
      "waterTemperature": { "meto": 13.29, "noaa": 13.01, "sg": 13.29 },
      "waveHeight": {
        "dwd": 2.63,
        "ecmwf": 2.94,
        "meteo": 2.46,
        "noaa": 2.42,
        "sg": 2.94
      },
      "windDirection": {
        "dwd": 197.65,
        "ecmwf": 215.31,
        "ecmwf:aifs": 213.99,
        "noaa": 214.6,
        "sg": 215.31
      },
      "windSpeed": {
        "dwd": 7.35,
        "ecmwf": 4.76,
        "ecmwf:aifs": 3.88,
        "noaa": 7.07,
        "sg": 4.76
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.81, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1003.92,
        "ecmwf:aifs": 1005.15,
        "noaa": 1021.96,
        "sg": 1003.92
      },
      "time": "2026-02-17T19:00:00+00:00",
      "waterTemperature": { "meto": 13.29, "noaa": 13.02, "sg": 13.29 },
      "waveHeight": {
        "dwd": 2.63,
        "ecmwf": 2.9,
        "meteo": 2.44,
        "noaa": 2.4,
        "sg": 2.9
      },
      "windDirection": {
        "dwd": 198.19,
        "ecmwf": 210.63,
        "ecmwf:aifs": 212.5,
        "noaa": 208.62,
        "sg": 210.63
      },
      "windSpeed": {
        "dwd": 7.66,
        "ecmwf": 4.73,
        "ecmwf:aifs": 3.98,
        "noaa": 7.4,
        "sg": 4.73
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 9.07, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1003.65,
        "ecmwf:aifs": 1004.79,
        "noaa": 1021.58,
        "sg": 1003.65
      },
      "time": "2026-02-17T20:00:00+00:00",
      "waterTemperature": { "meto": 13.28, "noaa": 13.02, "sg": 13.28 },
      "waveHeight": {
        "dwd": 2.62,
        "ecmwf": 2.87,
        "meteo": 2.41,
        "noaa": 2.39,
        "sg": 2.87
      },
      "windDirection": {
        "dwd": 198.74,
        "ecmwf": 205.96,
        "ecmwf:aifs": 211.01,
        "noaa": 202.64,
        "sg": 205.96
      },
      "windSpeed": {
        "dwd": 7.96,
        "ecmwf": 4.71,
        "ecmwf:aifs": 4.08,
        "noaa": 7.74,
        "sg": 4.71
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 9.34, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1003.37,
        "ecmwf:aifs": 1004.43,
        "noaa": 1021.2,
        "sg": 1003.37
      },
      "time": "2026-02-17T21:00:00+00:00",
      "waterTemperature": { "meto": 13.28, "noaa": 13.01, "sg": 13.28 },
      "waveHeight": {
        "dwd": 2.62,
        "ecmwf": 2.83,
        "meteo": 2.39,
        "noaa": 2.37,
        "sg": 2.83
      },
      "windDirection": {
        "dwd": 199.28,
        "ecmwf": 201.28,
        "ecmwf:aifs": 209.53,
        "noaa": 196.66,
        "sg": 201.28
      },
      "windSpeed": {
        "dwd": 8.27,
        "ecmwf": 4.68,
        "ecmwf:aifs": 4.18,
        "noaa": 8.07,
        "sg": 4.68
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 10.03, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1002.75,
        "ecmwf:aifs": 1004.07,
        "noaa": 1020.43,
        "sg": 1002.75
      },
      "time": "2026-02-17T22:00:00+00:00",
      "waterTemperature": { "meto": 13.27, "noaa": 13.02, "sg": 13.27 },
      "waveHeight": {
        "dwd": 2.62,
        "ecmwf": 2.82,
        "meteo": 2.39,
        "noaa": 2.39,
        "sg": 2.82
      },
      "windDirection": {
        "dwd": 200.02,
        "ecmwf": 200.99,
        "ecmwf:aifs": 208.04,
        "noaa": 194.2,
        "sg": 200.99
      },
      "windSpeed": {
        "dwd": 8.57,
        "ecmwf": 4.86,
        "ecmwf:aifs": 4.29,
        "noaa": 8.6,
        "sg": 4.86
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 10.73, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1002.13,
        "ecmwf:aifs": 1003.72,
        "noaa": 1019.66,
        "sg": 1002.13
      },
      "time": "2026-02-17T23:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "noaa": 13.01, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.62,
        "ecmwf": 2.8,
        "meteo": 2.4,
        "noaa": 2.41,
        "sg": 2.8
      },
      "windDirection": {
        "dwd": 200.75,
        "ecmwf": 200.7,
        "ecmwf:aifs": 206.55,
        "noaa": 191.75,
        "sg": 200.7
      },
      "windSpeed": {
        "dwd": 8.86,
        "ecmwf": 5.03,
        "ecmwf:aifs": 4.39,
        "noaa": 9.13,
        "sg": 5.03
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 11.42, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1001.5,
        "ecmwf:aifs": 1003.36,
        "noaa": 1018.89,
        "sg": 1001.5
      },
      "time": "2026-02-18T00:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "noaa": 13.0, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.62,
        "ecmwf": 2.79,
        "meteo": 2.4,
        "noaa": 2.43,
        "sg": 2.79
      },
      "windDirection": {
        "dwd": 201.49,
        "ecmwf": 200.41,
        "ecmwf:aifs": 205.06,
        "noaa": 189.29,
        "sg": 200.41
      },
      "windSpeed": {
        "dwd": 9.16,
        "ecmwf": 5.21,
        "ecmwf:aifs": 4.49,
        "noaa": 9.66,
        "sg": 5.21
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 12.12, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1000.77,
        "ecmwf:aifs": 1002.64,
        "noaa": 1018.08,
        "sg": 1000.77
      },
      "time": "2026-02-18T01:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.64,
        "ecmwf": 2.8,
        "meteo": 2.42,
        "noaa": 2.48,
        "sg": 2.8
      },
      "windDirection": {
        "dwd": 203.25,
        "ecmwf": 203.76,
        "ecmwf:aifs": 204.57,
        "noaa": 189.91,
        "sg": 203.76
      },
      "windSpeed": {
        "dwd": 9.4,
        "ecmwf": 5.42,
        "ecmwf:aifs": 4.65,
        "noaa": 10.23,
        "sg": 5.42
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 12.82, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1000.04,
        "ecmwf:aifs": 1001.93,
        "noaa": 1017.28,
        "sg": 1000.04
      },
      "time": "2026-02-18T02:00:00+00:00",
      "waterTemperature": { "meto": 13.25, "sg": 13.25 },
      "waveHeight": {
        "dwd": 2.65,
        "ecmwf": 2.8,
        "meteo": 2.44,
        "noaa": 2.54,
        "sg": 2.8
      },
      "windDirection": {
        "dwd": 205.02,
        "ecmwf": 207.12,
        "ecmwf:aifs": 204.09,
        "noaa": 190.53,
        "sg": 207.12
      },
      "windSpeed": {
        "dwd": 9.64,
        "ecmwf": 5.64,
        "ecmwf:aifs": 4.81,
        "noaa": 10.79,
        "sg": 5.64
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 13.52, "sg": 6.91 },
      "pressure": {
        "ecmwf": 999.31,
        "ecmwf:aifs": 1001.21,
        "noaa": 1016.47,
        "sg": 999.31
      },
      "time": "2026-02-18T03:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.67,
        "ecmwf": 2.81,
        "meteo": 2.46,
        "noaa": 2.59,
        "sg": 2.81
      },
      "windDirection": {
        "dwd": 206.78,
        "ecmwf": 210.47,
        "ecmwf:aifs": 203.6,
        "noaa": 191.15,
        "sg": 210.47
      },
      "windSpeed": {
        "dwd": 9.88,
        "ecmwf": 5.85,
        "ecmwf:aifs": 4.96,
        "noaa": 11.36,
        "sg": 5.85
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 14.28, "sg": 6.91 },
      "pressure": {
        "ecmwf": 998.53,
        "ecmwf:aifs": 1000.49,
        "noaa": 1015.7,
        "sg": 998.53
      },
      "time": "2026-02-18T04:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.69,
        "ecmwf": 2.82,
        "meteo": 2.48,
        "noaa": 2.69,
        "sg": 2.82
      },
      "windDirection": {
        "dwd": 205.75,
        "ecmwf": 207.47,
        "ecmwf:aifs": 203.11,
        "noaa": 192.14,
        "sg": 207.47
      },
      "windSpeed": {
        "dwd": 10.06,
        "ecmwf": 5.62,
        "ecmwf:aifs": 5.12,
        "noaa": 11.82,
        "sg": 5.62
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 15.04, "sg": 6.91 },
      "pressure": {
        "ecmwf": 997.75,
        "ecmwf:aifs": 999.78,
        "noaa": 1014.93,
        "sg": 997.75
      },
      "time": "2026-02-18T05:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.72,
        "ecmwf": 2.83,
        "meteo": 2.5,
        "noaa": 2.79,
        "sg": 2.83
      },
      "windDirection": {
        "dwd": 204.73,
        "ecmwf": 204.48,
        "ecmwf:aifs": 202.63,
        "noaa": 193.13,
        "sg": 204.48
      },
      "windSpeed": {
        "dwd": 10.24,
        "ecmwf": 5.38,
        "ecmwf:aifs": 5.28,
        "noaa": 12.29,
        "sg": 5.38
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 15.8, "sg": 6.91 },
      "pressure": {
        "ecmwf": 996.98,
        "ecmwf:aifs": 999.06,
        "noaa": 1014.16,
        "sg": 996.98
      },
      "time": "2026-02-18T06:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.74,
        "ecmwf": 2.84,
        "meteo": 2.52,
        "noaa": 2.89,
        "sg": 2.84
      },
      "windDirection": {
        "dwd": 203.7,
        "ecmwf": 201.48,
        "ecmwf:aifs": 202.14,
        "noaa": 194.12,
        "sg": 201.48
      },
      "windSpeed": {
        "dwd": 10.42,
        "ecmwf": 5.15,
        "ecmwf:aifs": 5.44,
        "noaa": 12.75,
        "sg": 5.15
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 16.31, "sg": 6.91 },
      "pressure": {
        "ecmwf": 996.45,
        "ecmwf:aifs": 998.62,
        "noaa": 1013.86,
        "sg": 996.45
      },
      "time": "2026-02-18T07:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "sg": 13.26 },
      "waveHeight": {
        "dwd": 2.77,
        "ecmwf": 2.86,
        "meteo": 2.55,
        "noaa": 3.03,
        "sg": 2.86
      },
      "windDirection": {
        "dwd": 202.53,
        "ecmwf": 201.45,
        "ecmwf:aifs": 208.85,
        "noaa": 205.02,
        "sg": 201.45
      },
      "windSpeed": {
        "dwd": 10.72,
        "ecmwf": 5.48,
        "ecmwf:aifs": 5.83,
        "noaa": 12.98,
        "sg": 5.48
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 16.81, "sg": 6.91 },
      "pressure": {
        "ecmwf": 995.92,
        "ecmwf:aifs": 998.17,
        "noaa": 1013.56,
        "sg": 995.92
      },
      "time": "2026-02-18T08:00:00+00:00",
      "waterTemperature": { "meto": 13.27, "sg": 13.27 },
      "waveHeight": {
        "dwd": 2.8,
        "ecmwf": 2.88,
        "meteo": 2.57,
        "noaa": 3.18,
        "sg": 2.88
      },
      "windDirection": {
        "dwd": 201.37,
        "ecmwf": 201.42,
        "ecmwf:aifs": 215.57,
        "noaa": 215.93,
        "sg": 201.42
      },
      "windSpeed": {
        "dwd": 11.02,
        "ecmwf": 5.8,
        "ecmwf:aifs": 6.22,
        "noaa": 13.2,
        "sg": 5.8
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 17.32, "sg": 6.91 },
      "pressure": {
        "ecmwf": 995.39,
        "ecmwf:aifs": 997.73,
        "noaa": 1013.26,
        "sg": 995.39
      },
      "time": "2026-02-18T09:00:00+00:00",
      "waterTemperature": { "meto": 13.27, "sg": 13.27 },
      "waveHeight": {
        "dwd": 2.83,
        "ecmwf": 2.9,
        "meteo": 2.6,
        "noaa": 3.32,
        "sg": 2.9
      },
      "windDirection": {
        "dwd": 200.2,
        "ecmwf": 201.39,
        "ecmwf:aifs": 222.28,
        "noaa": 226.83,
        "sg": 201.39
      },
      "windSpeed": {
        "dwd": 11.32,
        "ecmwf": 6.13,
        "ecmwf:aifs": 6.61,
        "noaa": 13.43,
        "sg": 6.13
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 16.42, "sg": 6.91 },
      "pressure": {
        "ecmwf": 994.91,
        "ecmwf:aifs": 997.28,
        "noaa": 1013.48,
        "sg": 994.91
      },
      "time": "2026-02-18T10:00:00+00:00",
      "waterTemperature": { "meto": 13.28, "sg": 13.28 },
      "waveHeight": {
        "dwd": 2.95,
        "ecmwf": 3.0,
        "meteo": 2.67,
        "noaa": 3.44,
        "sg": 3.0
      },
      "windDirection": {
        "dwd": 208.42,
        "ecmwf": 208.15,
        "ecmwf:aifs": 229.0,
        "noaa": 241.19,
        "sg": 208.15
      },
      "windSpeed": {
        "dwd": 11.79,
        "ecmwf": 6.78,
        "ecmwf:aifs": 6.99,
        "noaa": 12.8,
        "sg": 6.78
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 15.53, "sg": 6.91 },
      "pressure": {
        "ecmwf": 994.43,
        "ecmwf:aifs": 996.84,
        "noaa": 1013.7,
        "sg": 994.43
      },
      "time": "2026-02-18T11:00:00+00:00",
      "waterTemperature": { "meto": 13.29, "sg": 13.29 },
      "waveHeight": {
        "dwd": 3.06,
        "ecmwf": 3.09,
        "meteo": 2.74,
        "noaa": 3.57,
        "sg": 3.09
      },
      "windDirection": {
        "dwd": 216.64,
        "ecmwf": 214.9,
        "ecmwf:aifs": 235.71,
        "noaa": 255.55,
        "sg": 214.9
      },
      "windSpeed": {
        "dwd": 12.27,
        "ecmwf": 7.44,
        "ecmwf:aifs": 7.38,
        "noaa": 12.16,
        "sg": 7.44
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 14.63, "sg": 6.91 },
      "pressure": {
        "ecmwf": 993.95,
        "ecmwf:aifs": 996.39,
        "noaa": 1013.93,
        "sg": 993.95
      },
      "time": "2026-02-18T12:00:00+00:00",
      "waterTemperature": { "meto": 13.31, "sg": 13.31 },
      "waveHeight": {
        "dwd": 3.18,
        "ecmwf": 3.18,
        "meteo": 2.81,
        "noaa": 3.69,
        "sg": 3.18
      },
      "windDirection": {
        "dwd": 224.86,
        "ecmwf": 221.66,
        "ecmwf:aifs": 242.43,
        "noaa": 269.91,
        "sg": 221.66
      },
      "windSpeed": {
        "dwd": 12.74,
        "ecmwf": 8.09,
        "ecmwf:aifs": 7.77,
        "noaa": 11.53,
        "sg": 8.09
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 14.13, "sg": 6.91 },
      "pressure": {
        "ecmwf": 993.76,
        "ecmwf:aifs": 996.69,
        "noaa": 1014.16,
        "sg": 993.76
      },
      "time": "2026-02-18T13:00:00+00:00",
      "waterTemperature": { "meto": 13.33, "sg": 13.33 },
      "waveHeight": {
        "dwd": 3.25,
        "ecmwf": 3.31,
        "meteo": 2.94,
        "noaa": 3.79,
        "sg": 3.31
      },
      "windDirection": {
        "dwd": 232.3,
        "ecmwf": 235.0,
        "ecmwf:aifs": 251.17,
        "noaa": 275.96,
        "sg": 235.0
      },
      "windSpeed": {
        "dwd": 12.79,
        "ecmwf": 8.15,
        "ecmwf:aifs": 7.58,
        "noaa": 11.3,
        "sg": 8.15
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 13.62, "sg": 6.91 },
      "pressure": {
        "ecmwf": 993.56,
        "ecmwf:aifs": 996.99,
        "noaa": 1014.4,
        "sg": 993.56
      },
      "time": "2026-02-18T14:00:00+00:00",
      "waterTemperature": { "meto": 13.34, "sg": 13.34 },
      "waveHeight": {
        "dwd": 3.31,
        "ecmwf": 3.44,
        "meteo": 3.08,
        "noaa": 3.88,
        "sg": 3.44
      },
      "windDirection": {
        "dwd": 239.75,
        "ecmwf": 248.35,
        "ecmwf:aifs": 259.91,
        "noaa": 282.01,
        "sg": 248.35
      },
      "windSpeed": {
        "dwd": 12.83,
        "ecmwf": 8.21,
        "ecmwf:aifs": 7.39,
        "noaa": 11.07,
        "sg": 8.21
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 13.12, "sg": 6.91 },
      "pressure": {
        "ecmwf": 993.37,
        "ecmwf:aifs": 997.28,
        "noaa": 1014.63,
        "sg": 993.37
      },
      "time": "2026-02-18T15:00:00+00:00",
      "waterTemperature": { "meto": 13.35, "sg": 13.35 },
      "waveHeight": {
        "dwd": 3.38,
        "ecmwf": 3.57,
        "meteo": 3.21,
        "noaa": 3.98,
        "sg": 3.57
      },
      "windDirection": {
        "dwd": 247.19,
        "ecmwf": 261.69,
        "ecmwf:aifs": 268.65,
        "noaa": 288.06,
        "sg": 261.69
      },
      "windSpeed": {
        "dwd": 12.88,
        "ecmwf": 8.27,
        "ecmwf:aifs": 7.2,
        "noaa": 10.84,
        "sg": 8.27
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 13.78, "sg": 6.91 },
      "pressure": {
        "ecmwf": 993.99,
        "ecmwf:aifs": 997.58,
        "noaa": 1015.53,
        "sg": 993.99
      },
      "time": "2026-02-18T16:00:00+00:00",
      "waterTemperature": { "meto": 13.35, "sg": 13.35 },
      "waveHeight": {
        "dwd": 3.56,
        "ecmwf": 3.77,
        "meteo": 3.39,
        "noaa": 4.04,
        "sg": 3.77
      },
      "windDirection": {
        "dwd": 253.87,
        "ecmwf": 270.82,
        "ecmwf:aifs": 277.4,
        "noaa": 290.06,
        "sg": 270.82
      },
      "windSpeed": {
        "dwd": 12.91,
        "ecmwf": 7.67,
        "ecmwf:aifs": 7.02,
        "noaa": 11.35,
        "sg": 7.67
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 14.44, "sg": 6.91 },
      "pressure": {
        "ecmwf": 994.61,
        "ecmwf:aifs": 997.88,
        "noaa": 1016.43,
        "sg": 994.61
      },
      "time": "2026-02-18T17:00:00+00:00",
      "waterTemperature": { "meto": 13.35, "sg": 13.35 },
      "waveHeight": {
        "dwd": 3.75,
        "ecmwf": 3.98,
        "meteo": 3.56,
        "noaa": 4.1,
        "sg": 3.98
      },
      "windDirection": {
        "dwd": 260.54,
        "ecmwf": 279.95,
        "ecmwf:aifs": 286.14,
        "noaa": 292.07,
        "sg": 279.95
      },
      "windSpeed": {
        "dwd": 12.93,
        "ecmwf": 7.06,
        "ecmwf:aifs": 6.83,
        "noaa": 11.85,
        "sg": 7.06
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 15.1, "sg": 6.91 },
      "pressure": {
        "ecmwf": 995.23,
        "ecmwf:aifs": 998.17,
        "noaa": 1017.33,
        "sg": 995.23
      },
      "time": "2026-02-18T18:00:00+00:00",
      "waterTemperature": { "meto": 13.34, "sg": 13.34 },
      "waveHeight": {
        "dwd": 3.93,
        "ecmwf": 4.18,
        "meteo": 3.74,
        "noaa": 4.16,
        "sg": 4.18
      },
      "windDirection": {
        "dwd": 267.22,
        "ecmwf": 289.08,
        "ecmwf:aifs": 294.88,
        "noaa": 294.07,
        "sg": 289.08
      },
      "windSpeed": {
        "dwd": 12.96,
        "ecmwf": 6.46,
        "ecmwf:aifs": 6.64,
        "noaa": 12.36,
        "sg": 6.46
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 14.71, "sg": 6.91 },
      "pressure": {
        "ecmwf": 996.11,
        "ecmwf:aifs": 998.85,
        "noaa": 1018.25,
        "sg": 996.11
      },
      "time": "2026-02-18T19:00:00+00:00",
      "waterTemperature": { "meto": 13.33, "sg": 13.33 },
      "waveHeight": {
        "dwd": 4.13,
        "ecmwf": 4.38,
        "meteo": 3.85,
        "noaa": 4.21,
        "sg": 4.38
      },
      "windDirection": {
        "dwd": 275.42,
        "ecmwf": 292.53,
        "ecmwf:aifs": 297.33,
        "noaa": 300.03,
        "sg": 292.53
      },
      "windSpeed": {
        "dwd": 12.89,
        "ecmwf": 6.23,
        "ecmwf:aifs": 6.61,
        "noaa": 12.42,
        "sg": 6.23
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 14.32, "sg": 6.91 },
      "pressure": {
        "ecmwf": 997.0,
        "ecmwf:aifs": 999.53,
        "noaa": 1019.17,
        "sg": 997.0
      },
      "time": "2026-02-18T20:00:00+00:00",
      "waterTemperature": { "meto": 13.31, "sg": 13.31 },
      "waveHeight": {
        "dwd": 4.34,
        "ecmwf": 4.57,
        "meteo": 3.97,
        "noaa": 4.27,
        "sg": 4.57
      },
      "windDirection": {
        "dwd": 283.63,
        "ecmwf": 295.97,
        "ecmwf:aifs": 299.79,
        "noaa": 306.0,
        "sg": 295.97
      },
      "windSpeed": {
        "dwd": 12.83,
        "ecmwf": 6.01,
        "ecmwf:aifs": 6.59,
        "noaa": 12.47,
        "sg": 6.01
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 13.94, "sg": 6.91 },
      "pressure": {
        "ecmwf": 997.88,
        "ecmwf:aifs": 1000.21,
        "noaa": 1020.08,
        "sg": 997.88
      },
      "time": "2026-02-18T21:00:00+00:00",
      "waterTemperature": { "meto": 13.3, "sg": 13.3 },
      "waveHeight": {
        "dwd": 4.54,
        "ecmwf": 4.76,
        "meteo": 4.08,
        "noaa": 4.32,
        "sg": 4.76
      },
      "windDirection": {
        "dwd": 291.83,
        "ecmwf": 299.42,
        "ecmwf:aifs": 302.24,
        "noaa": 311.96,
        "sg": 299.42
      },
      "windSpeed": {
        "dwd": 12.76,
        "ecmwf": 5.78,
        "ecmwf:aifs": 6.56,
        "noaa": 12.53,
        "sg": 5.78
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 13.37, "sg": 6.91 },
      "pressure": {
        "ecmwf": 998.41,
        "ecmwf:aifs": 1000.89,
        "noaa": 1020.76,
        "sg": 998.41
      },
      "time": "2026-02-18T22:00:00+00:00",
      "waterTemperature": { "meto": 13.29, "sg": 13.29 },
      "waveHeight": {
        "dwd": 4.62,
        "ecmwf": 4.79,
        "meteo": 4.11,
        "noaa": 4.3,
        "sg": 4.79
      },
      "windDirection": {
        "dwd": 294.68,
        "ecmwf": 301.05,
        "ecmwf:aifs": 304.69,
        "noaa": 313.18,
        "sg": 301.05
      },
      "windSpeed": {
        "dwd": 12.82,
        "ecmwf": 5.96,
        "ecmwf:aifs": 6.53,
        "noaa": 12.0,
        "sg": 5.96
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 12.81, "sg": 6.91 },
      "pressure": {
        "ecmwf": 998.94,
        "ecmwf:aifs": 1001.56,
        "noaa": 1021.44,
        "sg": 998.94
      },
      "time": "2026-02-18T23:00:00+00:00",
      "waterTemperature": { "meto": 13.28, "sg": 13.28 },
      "waveHeight": {
        "dwd": 4.69,
        "ecmwf": 4.82,
        "meteo": 4.13,
        "noaa": 4.27,
        "sg": 4.82
      },
      "windDirection": {
        "dwd": 297.52,
        "ecmwf": 302.67,
        "ecmwf:aifs": 307.15,
        "noaa": 314.39,
        "sg": 302.67
      },
      "windSpeed": {
        "dwd": 12.88,
        "ecmwf": 6.15,
        "ecmwf:aifs": 6.51,
        "noaa": 11.46,
        "sg": 6.15
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 12.24, "sg": 6.91 },
      "pressure": {
        "ecmwf": 999.47,
        "ecmwf:aifs": 1002.24,
        "noaa": 1022.12,
        "sg": 999.47
      },
      "time": "2026-02-19T00:00:00+00:00",
      "waterTemperature": { "meto": 13.27, "sg": 13.27 },
      "waveHeight": {
        "dwd": 4.77,
        "ecmwf": 4.85,
        "meteo": 4.16,
        "noaa": 4.25,
        "sg": 4.85
      },
      "windDirection": {
        "dwd": 300.37,
        "ecmwf": 304.3,
        "ecmwf:aifs": 309.6,
        "noaa": 315.61,
        "sg": 304.3
      },
      "windSpeed": {
        "dwd": 12.94,
        "ecmwf": 6.33,
        "ecmwf:aifs": 6.48,
        "noaa": 10.93,
        "sg": 6.33
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 12.37, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1000.01,
        "ecmwf:aifs": 1002.66,
        "noaa": 1022.56,
        "sg": 1000.01
      },
      "time": "2026-02-19T01:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "sg": 13.26 },
      "waveHeight": {
        "dwd": 4.74,
        "ecmwf": 4.83,
        "meteo": 4.15,
        "noaa": 4.22,
        "sg": 4.83
      },
      "windDirection": {
        "dwd": 304.5,
        "ecmwf": 308.03,
        "ecmwf:aifs": 313.28,
        "noaa": 317.12,
        "sg": 308.03
      },
      "windSpeed": {
        "dwd": 12.74,
        "ecmwf": 6.27,
        "ecmwf:aifs": 6.26,
        "noaa": 11.33,
        "sg": 6.27
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 12.49, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1000.55,
        "ecmwf:aifs": 1003.08,
        "noaa": 1023.01,
        "sg": 1000.55
      },
      "time": "2026-02-19T02:00:00+00:00",
      "waterTemperature": { "meto": 13.24, "sg": 13.24 },
      "waveHeight": {
        "dwd": 4.7,
        "ecmwf": 4.8,
        "meteo": 4.13,
        "noaa": 4.19,
        "sg": 4.8
      },
      "windDirection": {
        "dwd": 308.63,
        "ecmwf": 311.75,
        "ecmwf:aifs": 316.96,
        "noaa": 318.63,
        "sg": 311.75
      },
      "windSpeed": {
        "dwd": 12.55,
        "ecmwf": 6.21,
        "ecmwf:aifs": 6.05,
        "noaa": 11.73,
        "sg": 6.21
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 12.62, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1001.09,
        "ecmwf:aifs": 1003.5,
        "noaa": 1023.46,
        "sg": 1001.09
      },
      "time": "2026-02-19T03:00:00+00:00",
      "waterTemperature": { "meto": 13.23, "sg": 13.23 },
      "waveHeight": {
        "dwd": 4.67,
        "ecmwf": 4.78,
        "meteo": 4.12,
        "noaa": 4.16,
        "sg": 4.78
      },
      "windDirection": {
        "dwd": 312.76,
        "ecmwf": 315.48,
        "ecmwf:aifs": 320.64,
        "noaa": 320.14,
        "sg": 315.48
      },
      "windSpeed": {
        "dwd": 12.35,
        "ecmwf": 6.15,
        "ecmwf:aifs": 5.83,
        "noaa": 12.13,
        "sg": 6.15
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 12.22, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1001.61,
        "ecmwf:aifs": 1003.92,
        "noaa": 1023.95,
        "sg": 1001.61
      },
      "time": "2026-02-19T04:00:00+00:00",
      "waterTemperature": { "meto": 13.21, "sg": 13.21 },
      "waveHeight": {
        "dwd": 4.6,
        "ecmwf": 4.73,
        "meteo": 4.08,
        "noaa": 4.13,
        "sg": 4.73
      },
      "windDirection": {
        "dwd": 317.07,
        "ecmwf": 317.22,
        "ecmwf:aifs": 324.32,
        "noaa": 322.84,
        "sg": 317.22
      },
      "windSpeed": {
        "dwd": 11.94,
        "ecmwf": 5.94,
        "ecmwf:aifs": 5.61,
        "noaa": 11.63,
        "sg": 5.94
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 11.82, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1002.12,
        "ecmwf:aifs": 1004.34,
        "noaa": 1024.43,
        "sg": 1002.12
      },
      "time": "2026-02-19T05:00:00+00:00",
      "waterTemperature": { "meto": 13.2, "sg": 13.2 },
      "waveHeight": {
        "dwd": 4.52,
        "ecmwf": 4.67,
        "meteo": 4.05,
        "noaa": 4.09,
        "sg": 4.67
      },
      "windDirection": {
        "dwd": 321.39,
        "ecmwf": 318.97,
        "ecmwf:aifs": 328.0,
        "noaa": 325.53,
        "sg": 318.97
      },
      "windSpeed": {
        "dwd": 11.53,
        "ecmwf": 5.74,
        "ecmwf:aifs": 5.4,
        "noaa": 11.14,
        "sg": 5.74
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 11.42, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1002.63,
        "ecmwf:aifs": 1004.76,
        "noaa": 1024.92,
        "sg": 1002.63
      },
      "time": "2026-02-19T06:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "sg": 13.18 },
      "waveHeight": {
        "dwd": 4.45,
        "ecmwf": 4.61,
        "meteo": 4.01,
        "noaa": 4.06,
        "sg": 4.61
      },
      "windDirection": {
        "dwd": 325.7,
        "ecmwf": 320.71,
        "ecmwf:aifs": 331.68,
        "noaa": 328.23,
        "sg": 320.71
      },
      "windSpeed": {
        "dwd": 11.12,
        "ecmwf": 5.53,
        "ecmwf:aifs": 5.18,
        "noaa": 10.64,
        "sg": 5.53
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 10.78, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1003.49,
        "ecmwf:aifs": 1005.41,
        "noaa": 1025.74,
        "sg": 1003.49
      },
      "time": "2026-02-19T07:00:00+00:00",
      "waterTemperature": { "meto": 13.17, "sg": 13.17 },
      "waveHeight": {
        "dwd": 4.36,
        "ecmwf": 4.57,
        "meteo": 3.96,
        "noaa": 4.03,
        "sg": 4.57
      },
      "windDirection": {
        "dwd": 328.32,
        "ecmwf": 323.27,
        "ecmwf:aifs": 332.05,
        "noaa": 330.75,
        "sg": 323.27
      },
      "windSpeed": {
        "dwd": 10.8,
        "ecmwf": 5.4,
        "ecmwf:aifs": 5.05,
        "noaa": 10.19,
        "sg": 5.4
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 10.14, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1004.35,
        "ecmwf:aifs": 1006.07,
        "noaa": 1026.56,
        "sg": 1004.35
      },
      "time": "2026-02-19T08:00:00+00:00",
      "waterTemperature": { "meto": 13.15, "sg": 13.15 },
      "waveHeight": {
        "dwd": 4.27,
        "ecmwf": 4.53,
        "meteo": 3.92,
        "noaa": 4.0,
        "sg": 4.53
      },
      "windDirection": {
        "dwd": 330.93,
        "ecmwf": 325.84,
        "ecmwf:aifs": 332.42,
        "noaa": 333.26,
        "sg": 325.84
      },
      "windSpeed": {
        "dwd": 10.48,
        "ecmwf": 5.26,
        "ecmwf:aifs": 4.92,
        "noaa": 9.73,
        "sg": 5.26
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 9.5, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1005.21,
        "ecmwf:aifs": 1006.72,
        "noaa": 1027.37,
        "sg": 1005.21
      },
      "time": "2026-02-19T09:00:00+00:00",
      "waterTemperature": { "meto": 13.14, "sg": 13.14 },
      "waveHeight": {
        "dwd": 4.18,
        "ecmwf": 4.49,
        "meteo": 3.87,
        "noaa": 3.97,
        "sg": 4.49
      },
      "windDirection": {
        "dwd": 333.55,
        "ecmwf": 328.4,
        "ecmwf:aifs": 332.79,
        "noaa": 335.78,
        "sg": 328.4
      },
      "windSpeed": {
        "dwd": 10.16,
        "ecmwf": 5.13,
        "ecmwf:aifs": 4.79,
        "noaa": 9.28,
        "sg": 5.13
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 9.04, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1005.83,
        "ecmwf:aifs": 1007.37,
        "noaa": 1027.94,
        "sg": 1005.83
      },
      "time": "2026-02-19T10:00:00+00:00",
      "waterTemperature": { "meto": 13.14, "sg": 13.14 },
      "waveHeight": {
        "dwd": 4.11,
        "ecmwf": 4.53,
        "meteo": 3.84,
        "noaa": 3.9,
        "sg": 4.53
      },
      "windDirection": {
        "dwd": 335.44,
        "ecmwf": 328.74,
        "ecmwf:aifs": 333.16,
        "noaa": 338.14,
        "sg": 328.74
      },
      "windSpeed": {
        "dwd": 9.8,
        "ecmwf": 5.64,
        "ecmwf:aifs": 4.66,
        "noaa": 8.67,
        "sg": 5.64
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.57, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1006.45,
        "ecmwf:aifs": 1008.03,
        "noaa": 1028.51,
        "sg": 1006.45
      },
      "time": "2026-02-19T11:00:00+00:00",
      "waterTemperature": { "meto": 13.13, "sg": 13.13 },
      "waveHeight": {
        "dwd": 4.04,
        "ecmwf": 4.56,
        "meteo": 3.8,
        "noaa": 3.82,
        "sg": 4.56
      },
      "windDirection": {
        "dwd": 337.34,
        "ecmwf": 329.09,
        "ecmwf:aifs": 333.53,
        "noaa": 340.49,
        "sg": 329.09
      },
      "windSpeed": {
        "dwd": 9.45,
        "ecmwf": 6.15,
        "ecmwf:aifs": 4.53,
        "noaa": 8.05,
        "sg": 6.15
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.11, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.07,
        "ecmwf:aifs": 1008.68,
        "noaa": 1029.08,
        "sg": 1007.07
      },
      "time": "2026-02-19T12:00:00+00:00",
      "waterTemperature": { "meto": 13.13, "sg": 13.13 },
      "waveHeight": {
        "dwd": 3.97,
        "ecmwf": 4.6,
        "meteo": 3.77,
        "noaa": 3.75,
        "sg": 4.6
      },
      "windDirection": {
        "dwd": 339.23,
        "ecmwf": 329.43,
        "ecmwf:aifs": 333.9,
        "noaa": 342.85,
        "sg": 329.43
      },
      "windSpeed": {
        "dwd": 9.09,
        "ecmwf": 6.66,
        "ecmwf:aifs": 4.4,
        "noaa": 7.44,
        "sg": 6.66
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.09, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.21,
        "ecmwf:aifs": 1008.89,
        "noaa": 1029.13,
        "sg": 1007.21
      },
      "time": "2026-02-19T13:00:00+00:00",
      "waterTemperature": { "meto": 13.14, "sg": 13.14 },
      "waveHeight": {
        "dwd": 3.9,
        "ecmwf": 4.64,
        "meteo": 3.74,
        "noaa": 3.66,
        "sg": 4.64
      },
      "windDirection": {
        "dwd": 339.39,
        "ecmwf": 329.61,
        "ecmwf:aifs": 333.82,
        "noaa": 343.32,
        "sg": 329.61
      },
      "windSpeed": {
        "dwd": 8.54,
        "ecmwf": 6.59,
        "ecmwf:aifs": 4.2,
        "noaa": 7.42,
        "sg": 6.59
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.06, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.34,
        "ecmwf:aifs": 1009.1,
        "noaa": 1029.17,
        "sg": 1007.34
      },
      "time": "2026-02-19T14:00:00+00:00",
      "waterTemperature": { "meto": 13.14, "sg": 13.14 },
      "waveHeight": {
        "dwd": 3.83,
        "ecmwf": 4.68,
        "meteo": 3.71,
        "noaa": 3.58,
        "sg": 4.68
      },
      "windDirection": {
        "dwd": 339.56,
        "ecmwf": 329.78,
        "ecmwf:aifs": 333.74,
        "noaa": 343.79,
        "sg": 329.78
      },
      "windSpeed": {
        "dwd": 7.99,
        "ecmwf": 6.53,
        "ecmwf:aifs": 3.99,
        "noaa": 7.4,
        "sg": 6.53
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.04, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.47,
        "ecmwf:aifs": 1009.3,
        "noaa": 1029.22,
        "sg": 1007.47
      },
      "time": "2026-02-19T15:00:00+00:00",
      "waterTemperature": { "meto": 13.14, "sg": 13.14 },
      "waveHeight": {
        "dwd": 3.76,
        "ecmwf": 4.72,
        "meteo": 3.68,
        "noaa": 3.49,
        "sg": 4.72
      },
      "windDirection": {
        "dwd": 339.72,
        "ecmwf": 329.96,
        "ecmwf:aifs": 333.66,
        "noaa": 344.26,
        "sg": 329.96
      },
      "windSpeed": {
        "dwd": 7.44,
        "ecmwf": 6.46,
        "ecmwf:aifs": 3.79,
        "noaa": 7.38,
        "sg": 6.46
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.1, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1007.96,
        "ecmwf:aifs": 1009.51,
        "noaa": 1029.58,
        "sg": 1007.96
      },
      "time": "2026-02-19T16:00:00+00:00",
      "waterTemperature": { "meto": 13.13, "sg": 13.13 },
      "waveHeight": {
        "dwd": 3.7,
        "ecmwf": 4.66,
        "meteo": 3.63,
        "noaa": 3.39,
        "sg": 4.66
      },
      "windDirection": {
        "dwd": 342.39,
        "ecmwf": 331.98,
        "ecmwf:aifs": 333.58,
        "noaa": 346.54,
        "sg": 331.98
      },
      "windSpeed": {
        "dwd": 7.35,
        "ecmwf": 5.69,
        "ecmwf:aifs": 3.59,
        "noaa": 7.38,
        "sg": 5.69
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.16, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1008.45,
        "ecmwf:aifs": 1009.72,
        "noaa": 1029.95,
        "sg": 1008.45
      },
      "time": "2026-02-19T17:00:00+00:00",
      "waterTemperature": { "meto": 13.12, "sg": 13.12 },
      "waveHeight": {
        "dwd": 3.63,
        "ecmwf": 4.61,
        "meteo": 3.57,
        "noaa": 3.3,
        "sg": 4.61
      },
      "windDirection": {
        "dwd": 345.07,
        "ecmwf": 334.01,
        "ecmwf:aifs": 333.5,
        "noaa": 348.81,
        "sg": 334.01
      },
      "windSpeed": {
        "dwd": 7.25,
        "ecmwf": 4.93,
        "ecmwf:aifs": 3.38,
        "noaa": 7.37,
        "sg": 4.93
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.21, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1008.94,
        "ecmwf:aifs": 1009.93,
        "noaa": 1030.31,
        "sg": 1008.94
      },
      "time": "2026-02-19T18:00:00+00:00",
      "waterTemperature": { "meto": 13.11, "sg": 13.11 },
      "waveHeight": {
        "dwd": 3.57,
        "ecmwf": 4.55,
        "meteo": 3.52,
        "noaa": 3.2,
        "sg": 4.55
      },
      "windDirection": {
        "dwd": 347.74,
        "ecmwf": 336.03,
        "ecmwf:aifs": 333.42,
        "noaa": 351.09,
        "sg": 336.03
      },
      "windSpeed": {
        "dwd": 7.16,
        "ecmwf": 4.16,
        "ecmwf:aifs": 3.18,
        "noaa": 7.37,
        "sg": 4.16
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.39, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1009.52,
        "ecmwf:aifs": 1010.26,
        "noaa": 1030.62,
        "sg": 1009.52
      },
      "time": "2026-02-19T19:00:00+00:00",
      "waterTemperature": { "meto": 13.09, "sg": 13.09 },
      "waveHeight": {
        "dwd": 3.5,
        "ecmwf": 4.45,
        "meteo": 3.45,
        "noaa": 3.11,
        "sg": 4.45
      },
      "windDirection": {
        "dwd": 351.15,
        "ecmwf": 343.31,
        "ecmwf:aifs": 340.86,
        "noaa": 354.69,
        "sg": 343.31
      },
      "windSpeed": {
        "dwd": 6.48,
        "ecmwf": 3.56,
        "ecmwf:aifs": 3.0,
        "noaa": 7.77,
        "sg": 3.56
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.58, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1010.1,
        "ecmwf:aifs": 1010.59,
        "noaa": 1030.93,
        "sg": 1010.1
      },
      "time": "2026-02-19T20:00:00+00:00",
      "waterTemperature": { "meto": 13.07, "sg": 13.07 },
      "waveHeight": {
        "dwd": 3.43,
        "ecmwf": 4.34,
        "meteo": 3.39,
        "noaa": 3.02,
        "sg": 4.34
      },
      "windDirection": {
        "dwd": 354.55,
        "ecmwf": 350.58,
        "ecmwf:aifs": 348.29,
        "noaa": 358.3,
        "sg": 350.58
      },
      "windSpeed": {
        "dwd": 5.8,
        "ecmwf": 2.97,
        "ecmwf:aifs": 2.82,
        "noaa": 8.17,
        "sg": 2.97
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.76, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1010.67,
        "ecmwf:aifs": 1010.92,
        "noaa": 1031.24,
        "sg": 1010.67
      },
      "time": "2026-02-19T21:00:00+00:00",
      "waterTemperature": { "meto": 13.05, "sg": 13.05 },
      "waveHeight": {
        "dwd": 3.36,
        "ecmwf": 4.23,
        "meteo": 3.32,
        "noaa": 2.93,
        "sg": 4.23
      },
      "windDirection": {
        "dwd": 357.96,
        "ecmwf": 357.86,
        "ecmwf:aifs": 355.73,
        "noaa": 1.9,
        "sg": 357.86
      },
      "windSpeed": {
        "dwd": 5.12,
        "ecmwf": 2.37,
        "ecmwf:aifs": 2.63,
        "noaa": 8.57,
        "sg": 2.37
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.45, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1011.03,
        "ecmwf:aifs": 1011.25,
        "noaa": 1031.11,
        "sg": 1011.03
      },
      "time": "2026-02-19T22:00:00+00:00",
      "waterTemperature": { "meto": 13.02, "sg": 13.02 },
      "waveHeight": {
        "dwd": 3.28,
        "ecmwf": 4.11,
        "meteo": 3.22,
        "noaa": 2.84,
        "sg": 4.11
      },
      "windDirection": {
        "dwd": 1.28,
        "ecmwf": 14.58,
        "ecmwf:aifs": 3.17,
        "noaa": 4.73,
        "sg": 14.58
      },
      "windSpeed": {
        "dwd": 4.86,
        "ecmwf": 1.96,
        "ecmwf:aifs": 2.45,
        "noaa": 8.06,
        "sg": 1.96
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 8.14, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1011.38,
        "ecmwf:aifs": 1011.58,
        "noaa": 1030.99,
        "sg": 1011.38
      },
      "time": "2026-02-19T23:00:00+00:00",
      "waterTemperature": { "meto": 13.0, "sg": 13.0 },
      "waveHeight": {
        "dwd": 3.21,
        "ecmwf": 3.98,
        "meteo": 3.13,
        "noaa": 2.74,
        "sg": 3.98
      },
      "windDirection": {
        "dwd": 4.61,
        "ecmwf": 31.31,
        "ecmwf:aifs": 10.6,
        "noaa": 7.56,
        "sg": 31.31
      },
      "windSpeed": {
        "dwd": 4.59,
        "ecmwf": 1.54,
        "ecmwf:aifs": 2.27,
        "noaa": 7.55,
        "sg": 1.54
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.84, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1011.74,
        "ecmwf:aifs": 1011.91,
        "noaa": 1030.86,
        "sg": 1011.74
      },
      "time": "2026-02-20T00:00:00+00:00",
      "waterTemperature": { "meto": 12.97, "sg": 12.97 },
      "waveHeight": {
        "dwd": 3.13,
        "ecmwf": 3.86,
        "meteo": 3.03,
        "noaa": 2.65,
        "sg": 3.86
      },
      "windDirection": {
        "dwd": 7.93,
        "ecmwf": 48.03,
        "ecmwf:aifs": 18.04,
        "noaa": 10.39,
        "sg": 48.03
      },
      "windSpeed": {
        "dwd": 4.33,
        "ecmwf": 1.13,
        "ecmwf:aifs": 2.09,
        "noaa": 7.04,
        "sg": 1.13
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 7.36, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1011.82,
        "ecmwf:aifs": 1011.86,
        "noaa": 1030.96,
        "sg": 1011.82
      },
      "time": "2026-02-20T01:00:00+00:00",
      "waterTemperature": { "meto": 12.93, "sg": 12.93 },
      "waveHeight": {
        "dwd": 3.05,
        "ecmwf": 3.74,
        "meteo": 2.95,
        "noaa": 2.57,
        "sg": 3.74
      },
      "windDirection": {
        "dwd": 11.68,
        "ecmwf": 42.67,
        "ecmwf:aifs": 20.34,
        "noaa": 13.58,
        "sg": 42.67
      },
      "windSpeed": {
        "dwd": 3.86,
        "ecmwf": 1.28,
        "ecmwf:aifs": 1.99,
        "noaa": 6.47,
        "sg": 1.28
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 6.88, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1011.9,
        "ecmwf:aifs": 1011.82,
        "noaa": 1031.06,
        "sg": 1011.9
      },
      "time": "2026-02-20T02:00:00+00:00",
      "waterTemperature": { "meto": 12.88, "sg": 12.88 },
      "waveHeight": {
        "dwd": 2.97,
        "ecmwf": 3.62,
        "meteo": 2.87,
        "noaa": 2.49,
        "sg": 3.62
      },
      "windDirection": {
        "dwd": 15.44,
        "ecmwf": 37.31,
        "ecmwf:aifs": 22.65,
        "noaa": 16.76,
        "sg": 37.31
      },
      "windSpeed": {
        "dwd": 3.38,
        "ecmwf": 1.42,
        "ecmwf:aifs": 1.9,
        "noaa": 5.9,
        "sg": 1.42
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 6.41, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1011.99,
        "ecmwf:aifs": 1011.78,
        "noaa": 1031.16,
        "sg": 1011.99
      },
      "time": "2026-02-20T03:00:00+00:00",
      "waterTemperature": { "meto": 12.82, "sg": 12.82 },
      "waveHeight": {
        "dwd": 2.89,
        "ecmwf": 3.5,
        "meteo": 2.79,
        "noaa": 2.41,
        "sg": 3.5
      },
      "windDirection": {
        "dwd": 19.19,
        "ecmwf": 31.95,
        "ecmwf:aifs": 24.95,
        "noaa": 19.95,
        "sg": 31.95
      },
      "windSpeed": {
        "dwd": 2.91,
        "ecmwf": 1.57,
        "ecmwf:aifs": 1.8,
        "noaa": 5.33,
        "sg": 1.57
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 5.52, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.09,
        "ecmwf:aifs": 1011.74,
        "noaa": 1031.13,
        "sg": 1012.09
      },
      "time": "2026-02-20T04:00:00+00:00",
      "waterTemperature": { "meto": 12.75, "sg": 12.75 },
      "waveHeight": {
        "dwd": 2.81,
        "ecmwf": 3.39,
        "meteo": 2.72,
        "noaa": 2.34,
        "sg": 3.39
      },
      "windDirection": {
        "dwd": 23.18,
        "ecmwf": 37.02,
        "ecmwf:aifs": 27.25,
        "noaa": 28.49,
        "sg": 37.02
      },
      "windSpeed": {
        "dwd": 2.9,
        "ecmwf": 1.56,
        "ecmwf:aifs": 1.7,
        "noaa": 4.69,
        "sg": 1.56
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 4.63, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.19,
        "ecmwf:aifs": 1011.7,
        "noaa": 1031.11,
        "sg": 1012.19
      },
      "time": "2026-02-20T05:00:00+00:00",
      "waterTemperature": { "meto": 12.7, "sg": 12.7 },
      "waveHeight": {
        "dwd": 2.74,
        "ecmwf": 3.28,
        "meteo": 2.65,
        "noaa": 2.27,
        "sg": 3.28
      },
      "windDirection": {
        "dwd": 27.16,
        "ecmwf": 42.08,
        "ecmwf:aifs": 29.56,
        "noaa": 37.03,
        "sg": 42.08
      },
      "windSpeed": {
        "dwd": 2.89,
        "ecmwf": 1.54,
        "ecmwf:aifs": 1.61,
        "noaa": 4.04,
        "sg": 1.54
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 3.74, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.28,
        "ecmwf:aifs": 1011.66,
        "noaa": 1031.08,
        "sg": 1012.28
      },
      "time": "2026-02-20T06:00:00+00:00",
      "waterTemperature": { "meto": 12.66, "sg": 12.66 },
      "waveHeight": {
        "dwd": 2.66,
        "ecmwf": 3.17,
        "meteo": 2.58,
        "noaa": 2.2,
        "sg": 3.17
      },
      "windDirection": {
        "dwd": 31.15,
        "ecmwf": 47.15,
        "ecmwf:aifs": 31.86,
        "noaa": 45.57,
        "sg": 47.15
      },
      "windSpeed": {
        "dwd": 2.88,
        "ecmwf": 1.53,
        "ecmwf:aifs": 1.51,
        "noaa": 3.4,
        "sg": 1.53
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 3.37, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.88,
        "ecmwf:aifs": 1011.84,
        "noaa": 1031.45,
        "sg": 1012.88
      },
      "time": "2026-02-20T07:00:00+00:00",
      "waterTemperature": { "meto": 12.62, "sg": 12.62 },
      "waveHeight": {
        "dwd": 2.59,
        "ecmwf": 3.07,
        "meteo": 2.52,
        "noaa": 2.14,
        "sg": 3.07
      },
      "windDirection": {
        "dwd": 37.57,
        "ecmwf": 41.78,
        "ecmwf:aifs": 25.14,
        "noaa": 41.05,
        "sg": 41.78
      },
      "windSpeed": {
        "dwd": 2.59,
        "ecmwf": 1.69,
        "ecmwf:aifs": 1.36,
        "noaa": 3.14,
        "sg": 1.69
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 3.0, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1013.47,
        "ecmwf:aifs": 1012.02,
        "noaa": 1031.82,
        "sg": 1013.47
      },
      "time": "2026-02-20T08:00:00+00:00",
      "waterTemperature": { "meto": 12.58, "sg": 12.58 },
      "waveHeight": {
        "dwd": 2.52,
        "ecmwf": 2.97,
        "meteo": 2.46,
        "noaa": 2.07,
        "sg": 2.97
      },
      "windDirection": {
        "dwd": 43.98,
        "ecmwf": 36.4,
        "ecmwf:aifs": 18.41,
        "noaa": 36.52,
        "sg": 36.4
      },
      "windSpeed": {
        "dwd": 2.29,
        "ecmwf": 1.85,
        "ecmwf:aifs": 1.22,
        "noaa": 2.88,
        "sg": 1.85
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 2.63, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1014.07,
        "ecmwf:aifs": 1012.2,
        "noaa": 1032.2,
        "sg": 1014.07
      },
      "time": "2026-02-20T09:00:00+00:00",
      "waterTemperature": { "meto": 12.61, "sg": 12.61 },
      "waveHeight": {
        "dwd": 2.45,
        "ecmwf": 2.87,
        "meteo": 2.4,
        "noaa": 2.01,
        "sg": 2.87
      },
      "windDirection": {
        "dwd": 50.4,
        "ecmwf": 31.03,
        "ecmwf:aifs": 11.69,
        "noaa": 32.0,
        "sg": 31.03
      },
      "windSpeed": {
        "dwd": 2.0,
        "ecmwf": 2.01,
        "ecmwf:aifs": 1.07,
        "noaa": 2.62,
        "sg": 2.01
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 2.27, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1013.97,
        "ecmwf:aifs": 1012.37,
        "noaa": 1032.22,
        "sg": 1013.97
      },
      "time": "2026-02-20T10:00:00+00:00",
      "waterTemperature": { "meto": 12.7, "sg": 12.7 },
      "waveHeight": {
        "dwd": 2.38,
        "ecmwf": 2.78,
        "meteo": 2.34,
        "noaa": 1.96,
        "sg": 2.78
      },
      "windDirection": {
        "dwd": 32.62,
        "ecmwf": 20.66,
        "ecmwf:aifs": 4.97,
        "noaa": 23.1,
        "sg": 20.66
      },
      "windSpeed": {
        "dwd": 2.0,
        "ecmwf": 2.25,
        "ecmwf:aifs": 0.93,
        "noaa": 2.24,
        "sg": 2.25
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 1.9, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1013.87,
        "ecmwf:aifs": 1012.55,
        "noaa": 1032.25,
        "sg": 1013.87
      },
      "time": "2026-02-20T11:00:00+00:00",
      "waterTemperature": { "meto": 12.79, "sg": 12.79 },
      "waveHeight": {
        "dwd": 2.32,
        "ecmwf": 2.69,
        "meteo": 2.29,
        "noaa": 1.92,
        "sg": 2.69
      },
      "windDirection": {
        "dwd": 14.85,
        "ecmwf": 10.28,
        "ecmwf:aifs": 358.24,
        "noaa": 14.2,
        "sg": 10.28
      },
      "windSpeed": {
        "dwd": 2.0,
        "ecmwf": 2.48,
        "ecmwf:aifs": 0.78,
        "noaa": 1.87,
        "sg": 2.48
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 1.54, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1013.77,
        "ecmwf:aifs": 1012.73,
        "noaa": 1032.27,
        "sg": 1013.77
      },
      "time": "2026-02-20T12:00:00+00:00",
      "waterTemperature": { "meto": 12.87, "sg": 12.87 },
      "waveHeight": {
        "dwd": 2.25,
        "ecmwf": 2.6,
        "meteo": 2.23,
        "noaa": 1.87,
        "sg": 2.6
      },
      "windDirection": {
        "dwd": 357.07,
        "ecmwf": 359.91,
        "ecmwf:aifs": 351.52,
        "noaa": 5.3,
        "sg": 359.91
      },
      "windSpeed": {
        "dwd": 2.0,
        "ecmwf": 2.72,
        "ecmwf:aifs": 0.64,
        "noaa": 1.49,
        "sg": 2.72
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 1.99, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1013.23,
        "ecmwf:aifs": 1012.47,
        "noaa": 1031.77,
        "sg": 1013.23
      },
      "time": "2026-02-20T13:00:00+00:00",
      "waterTemperature": { "meto": 12.93, "sg": 12.93 },
      "waveHeight": {
        "dwd": 2.19,
        "ecmwf": 2.52,
        "meteo": 2.18,
        "noaa": 1.84,
        "sg": 2.52
      },
      "windDirection": {
        "dwd": 350.55,
        "ecmwf": 347.3,
        "ecmwf:aifs": 348.81,
        "noaa": 359.89,
        "sg": 347.3
      },
      "windSpeed": {
        "dwd": 2.62,
        "ecmwf": 2.81,
        "ecmwf:aifs": 0.9,
        "noaa": 2.07,
        "sg": 2.81
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 2.45, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.7,
        "ecmwf:aifs": 1012.2,
        "noaa": 1031.26,
        "sg": 1012.7
      },
      "time": "2026-02-20T14:00:00+00:00",
      "waterTemperature": { "meto": 12.98, "sg": 12.98 },
      "waveHeight": {
        "dwd": 2.13,
        "ecmwf": 2.44,
        "meteo": 2.14,
        "noaa": 1.81,
        "sg": 2.44
      },
      "windDirection": {
        "dwd": 344.04,
        "ecmwf": 334.68,
        "ecmwf:aifs": 346.1,
        "noaa": 354.48,
        "sg": 334.68
      },
      "windSpeed": {
        "dwd": 3.23,
        "ecmwf": 2.91,
        "ecmwf:aifs": 1.15,
        "noaa": 2.66,
        "sg": 2.91
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 2.9, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.16,
        "ecmwf:aifs": 1011.94,
        "noaa": 1030.76,
        "sg": 1012.16
      },
      "time": "2026-02-20T15:00:00+00:00",
      "waterTemperature": { "meto": 13.02, "sg": 13.02 },
      "waveHeight": {
        "dwd": 2.07,
        "ecmwf": 2.35,
        "meteo": 2.09,
        "noaa": 1.78,
        "sg": 2.35
      },
      "windDirection": {
        "dwd": 337.52,
        "ecmwf": 322.07,
        "ecmwf:aifs": 343.38,
        "noaa": 349.07,
        "sg": 322.07
      },
      "windSpeed": {
        "dwd": 3.85,
        "ecmwf": 3.0,
        "ecmwf:aifs": 1.41,
        "noaa": 3.24,
        "sg": 3.0
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 3.81, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.38,
        "ecmwf:aifs": 1011.68,
        "noaa": 1030.63,
        "sg": 1012.38
      },
      "time": "2026-02-20T16:00:00+00:00",
      "waterTemperature": { "meto": 13.04, "sg": 13.04 },
      "waveHeight": {
        "dwd": 2.04,
        "ecmwf": 2.3,
        "meteo": 2.04,
        "noaa": 1.78,
        "sg": 2.3
      },
      "windDirection": {
        "dwd": 341.98,
        "ecmwf": 326.85,
        "ecmwf:aifs": 340.67,
        "noaa": 349.91,
        "sg": 326.85
      },
      "windSpeed": {
        "dwd": 4.26,
        "ecmwf": 2.9,
        "ecmwf:aifs": 1.67,
        "noaa": 4.07,
        "sg": 2.9
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 4.72, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.6,
        "ecmwf:aifs": 1011.41,
        "noaa": 1030.51,
        "sg": 1012.6
      },
      "time": "2026-02-20T17:00:00+00:00",
      "waterTemperature": { "meto": 13.06, "sg": 13.06 },
      "waveHeight": {
        "dwd": 2.0,
        "ecmwf": 2.24,
        "meteo": 2.0,
        "noaa": 1.78,
        "sg": 2.24
      },
      "windDirection": {
        "dwd": 346.45,
        "ecmwf": 331.62,
        "ecmwf:aifs": 337.96,
        "noaa": 350.75,
        "sg": 331.62
      },
      "windSpeed": {
        "dwd": 4.66,
        "ecmwf": 2.79,
        "ecmwf:aifs": 1.92,
        "noaa": 4.91,
        "sg": 2.79
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 5.64, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1012.82,
        "ecmwf:aifs": 1011.15,
        "noaa": 1030.39,
        "sg": 1012.82
      },
      "time": "2026-02-20T18:00:00+00:00",
      "waterTemperature": { "meto": 13.04, "sg": 13.04 },
      "waveHeight": {
        "dwd": 1.97,
        "ecmwf": 2.19,
        "meteo": 1.95,
        "noaa": 1.78,
        "sg": 2.19
      },
      "windDirection": {
        "dwd": 350.91,
        "ecmwf": 336.4,
        "ecmwf:aifs": 335.25,
        "noaa": 351.59,
        "sg": 336.4
      },
      "windSpeed": {
        "dwd": 5.07,
        "ecmwf": 2.69,
        "ecmwf:aifs": 2.18,
        "noaa": 5.74,
        "sg": 2.69
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 5.29, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1013.19,
        "ecmwf:aifs": 1011.29,
        "noaa": 1030.63,
        "sg": 1013.19
      },
      "time": "2026-02-20T19:00:00+00:00",
      "waterTemperature": { "meto": 12.98, "sg": 12.98 },
      "waveHeight": {
        "dwd": 1.99,
        "ecmwf": 2.15,
        "meteo": 1.91,
        "noaa": 1.8,
        "sg": 2.15
      },
      "windDirection": {
        "dwd": 356.75,
        "ecmwf": 347.66,
        "ecmwf:aifs": 343.93,
        "noaa": 359.43,
        "sg": 347.66
      },
      "windSpeed": {
        "dwd": 4.88,
        "ecmwf": 2.51,
        "ecmwf:aifs": 2.07,
        "noaa": 5.25,
        "sg": 2.51
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 4.95, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1013.56,
        "ecmwf:aifs": 1011.43,
        "noaa": 1030.88,
        "sg": 1013.56
      },
      "time": "2026-02-20T20:00:00+00:00",
      "waterTemperature": { "meto": 12.92, "sg": 12.92 },
      "waveHeight": {
        "dwd": 2.0,
        "ecmwf": 2.12,
        "meteo": 1.88,
        "noaa": 1.83,
        "sg": 2.12
      },
      "windDirection": {
        "dwd": 2.59,
        "ecmwf": 358.93,
        "ecmwf:aifs": 352.61,
        "noaa": 7.26,
        "sg": 358.93
      },
      "windSpeed": {
        "dwd": 4.69,
        "ecmwf": 2.33,
        "ecmwf:aifs": 1.96,
        "noaa": 4.76,
        "sg": 2.33
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 4.6, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1013.93,
        "ecmwf:aifs": 1011.57,
        "noaa": 1031.12,
        "sg": 1013.93
      },
      "time": "2026-02-20T21:00:00+00:00",
      "waterTemperature": { "meto": 12.87, "sg": 12.87 },
      "waveHeight": {
        "dwd": 2.02,
        "ecmwf": 2.08,
        "meteo": 1.84,
        "noaa": 1.85,
        "sg": 2.08
      },
      "windDirection": {
        "dwd": 8.43,
        "ecmwf": 10.19,
        "ecmwf:aifs": 1.29,
        "noaa": 15.1,
        "sg": 10.19
      },
      "windSpeed": {
        "dwd": 4.5,
        "ecmwf": 2.15,
        "ecmwf:aifs": 1.85,
        "noaa": 4.27,
        "sg": 2.15
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 4.04, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1014.01,
        "ecmwf:aifs": 1011.71,
        "noaa": 1031.25,
        "sg": 1014.01
      },
      "time": "2026-02-20T22:00:00+00:00",
      "waterTemperature": { "meto": 12.82, "sg": 12.82 },
      "waveHeight": {
        "dwd": 2.08,
        "ecmwf": 2.09,
        "meteo": 1.82,
        "noaa": 1.9,
        "sg": 2.09
      },
      "windDirection": {
        "dwd": 11.22,
        "ecmwf": 18.5,
        "ecmwf:aifs": 9.97,
        "noaa": 33.55,
        "sg": 18.5
      },
      "windSpeed": {
        "dwd": 4.17,
        "ecmwf": 1.97,
        "ecmwf:aifs": 1.73,
        "noaa": 3.87,
        "sg": 1.97
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 3.48, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1014.1,
        "ecmwf:aifs": 1011.85,
        "noaa": 1031.38,
        "sg": 1014.1
      },
      "time": "2026-02-20T23:00:00+00:00",
      "waterTemperature": { "meto": 12.78, "sg": 12.78 },
      "waveHeight": {
        "dwd": 2.15,
        "ecmwf": 2.1,
        "meteo": 1.79,
        "noaa": 1.94,
        "sg": 2.1
      },
      "windDirection": {
        "dwd": 14.01,
        "ecmwf": 26.81,
        "ecmwf:aifs": 18.65,
        "noaa": 52.01,
        "sg": 26.81
      },
      "windSpeed": {
        "dwd": 3.85,
        "ecmwf": 1.79,
        "ecmwf:aifs": 1.62,
        "noaa": 3.47,
        "sg": 1.79
      }
    },
    {
      "gust": { "ecmwf": 6.91, "noaa": 2.92, "sg": 6.91 },
      "pressure": {
        "ecmwf": 1014.19,
        "ecmwf:aifs": 1011.99,
        "noaa": 1031.51,
        "sg": 1014.19
      },
      "time": "2026-02-21T00:00:00+00:00",
      "waterTemperature": { "meto": 12.73, "sg": 12.73 },
      "waveHeight": {
        "dwd": 2.21,
        "ecmwf": 2.1,
        "meteo": 1.77,
        "noaa": 1.99,
        "sg": 2.1
      },
      "windDirection": {
        "dwd": 16.8,
        "ecmwf": 35.12,
        "ecmwf:aifs": 27.33,
        "noaa": 70.46,
        "sg": 35.12
      },
      "windSpeed": {
        "dwd": 3.52,
        "ecmwf": 1.61,
        "ecmwf:aifs": 1.51,
        "noaa": 3.07,
        "sg": 1.61
      }
    },
    {
      "gust": { "noaa": 3.02, "sg": 3.02 },
      "pressure": { "ecmwf:aifs": 1011.86, "noaa": 1031.41, "sg": 1031.41 },
      "time": "2026-02-21T01:00:00+00:00",
      "waterTemperature": { "meto": 12.69, "sg": 12.69 },
      "waveHeight": { "dwd": 2.31, "meteo": 1.78, "noaa": 2.06, "sg": 1.78 },
      "windDirection": {
        "dwd": 18.46,
        "ecmwf:aifs": 32.36,
        "noaa": 75.42,
        "sg": 18.46
      },
      "windSpeed": { "dwd": 3.23, "ecmwf:aifs": 1.46, "noaa": 3.08, "sg": 3.23 }
    },
    {
      "gust": { "noaa": 3.11, "sg": 3.11 },
      "pressure": { "ecmwf:aifs": 1011.74, "noaa": 1031.31, "sg": 1031.31 },
      "time": "2026-02-21T02:00:00+00:00",
      "waterTemperature": { "meto": 12.64, "sg": 12.64 },
      "waveHeight": { "dwd": 2.4, "meteo": 1.8, "noaa": 2.12, "sg": 1.8 },
      "windDirection": {
        "dwd": 20.13,
        "ecmwf:aifs": 37.39,
        "noaa": 80.38,
        "sg": 20.13
      },
      "windSpeed": { "dwd": 2.93, "ecmwf:aifs": 1.42, "noaa": 3.09, "sg": 2.93 }
    },
    {
      "gust": { "noaa": 3.21, "sg": 3.21 },
      "pressure": { "ecmwf:aifs": 1011.61, "noaa": 1031.21, "sg": 1031.21 },
      "time": "2026-02-21T03:00:00+00:00",
      "waterTemperature": { "meto": 12.58, "sg": 12.58 },
      "waveHeight": { "dwd": 2.5, "meteo": 1.81, "noaa": 2.19, "sg": 1.81 },
      "windDirection": {
        "dwd": 21.79,
        "ecmwf:aifs": 42.42,
        "noaa": 85.34,
        "sg": 21.79
      },
      "windSpeed": { "dwd": 2.64, "ecmwf:aifs": 1.37, "noaa": 3.1, "sg": 2.64 }
    },
    {
      "gust": { "noaa": 3.44, "sg": 3.44 },
      "pressure": { "ecmwf:aifs": 1011.48, "noaa": 1031.19, "sg": 1031.19 },
      "time": "2026-02-21T04:00:00+00:00",
      "waterTemperature": { "meto": 12.52, "sg": 12.52 },
      "waveHeight": { "dwd": 2.59, "meteo": 1.85, "noaa": 2.25, "sg": 1.85 },
      "windDirection": {
        "dwd": 20.16,
        "ecmwf:aifs": 47.45,
        "noaa": 89.87,
        "sg": 20.16
      },
      "windSpeed": { "dwd": 2.43, "ecmwf:aifs": 1.32, "noaa": 3.29, "sg": 2.43 }
    },
    {
      "gust": { "noaa": 3.67, "sg": 3.67 },
      "pressure": { "ecmwf:aifs": 1011.36, "noaa": 1031.18, "sg": 1031.18 },
      "time": "2026-02-21T05:00:00+00:00",
      "waterTemperature": { "meto": 12.45, "sg": 12.45 },
      "waveHeight": { "dwd": 2.69, "meteo": 1.89, "noaa": 2.31, "sg": 1.89 },
      "windDirection": {
        "dwd": 18.54,
        "ecmwf:aifs": 52.48,
        "noaa": 94.39,
        "sg": 18.54
      },
      "windSpeed": { "dwd": 2.21, "ecmwf:aifs": 1.28, "noaa": 3.47, "sg": 2.21 }
    },
    {
      "gust": { "noaa": 3.9, "sg": 3.9 },
      "pressure": { "ecmwf:aifs": 1011.23, "noaa": 1031.17, "sg": 1031.17 },
      "time": "2026-02-21T06:00:00+00:00",
      "waterTemperature": { "meto": 12.41, "sg": 12.41 },
      "waveHeight": { "dwd": 2.78, "meteo": 1.93, "noaa": 2.37, "sg": 1.93 },
      "windDirection": {
        "dwd": 16.91,
        "ecmwf:aifs": 57.51,
        "noaa": 98.92,
        "sg": 16.91
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 1.23, "noaa": 3.66, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 3.47, "sg": 3.47 },
      "pressure": { "ecmwf:aifs": 1011.36, "noaa": 1031.8, "sg": 1031.8 },
      "time": "2026-02-21T07:00:00+00:00",
      "waterTemperature": { "meto": 12.42, "sg": 12.42 },
      "waveHeight": { "dwd": 2.85, "meteo": 1.99, "noaa": 2.4, "sg": 1.99 },
      "windDirection": {
        "dwd": 28.26,
        "ecmwf:aifs": 82.68,
        "noaa": 92.81,
        "sg": 28.26
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 1.1, "noaa": 3.32, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 3.05, "sg": 3.05 },
      "pressure": { "ecmwf:aifs": 1011.49, "noaa": 1032.43, "sg": 1032.43 },
      "time": "2026-02-21T08:00:00+00:00",
      "waterTemperature": { "meto": 12.43, "sg": 12.43 },
      "waveHeight": { "dwd": 2.91, "meteo": 2.05, "noaa": 2.44, "sg": 2.05 },
      "windDirection": {
        "dwd": 39.62,
        "ecmwf:aifs": 107.85,
        "noaa": 86.71,
        "sg": 39.62
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 0.98, "noaa": 2.99, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 2.62, "sg": 2.62 },
      "pressure": { "ecmwf:aifs": 1011.62, "noaa": 1033.07, "sg": 1033.07 },
      "time": "2026-02-21T09:00:00+00:00",
      "waterTemperature": { "meto": 12.45, "sg": 12.45 },
      "waveHeight": { "dwd": 2.98, "meteo": 2.11, "noaa": 2.47, "sg": 2.11 },
      "windDirection": {
        "dwd": 50.97,
        "ecmwf:aifs": 133.02,
        "noaa": 80.6,
        "sg": 50.97
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 0.85, "noaa": 2.65, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 2.3, "sg": 2.3 },
      "pressure": { "ecmwf:aifs": 1011.75, "noaa": 1033.06, "sg": 1033.06 },
      "time": "2026-02-21T10:00:00+00:00",
      "waterTemperature": { "meto": 12.46, "sg": 12.46 },
      "waveHeight": { "dwd": 3.01, "meteo": 2.17, "noaa": 2.47, "sg": 2.17 },
      "windDirection": {
        "dwd": 40.76,
        "ecmwf:aifs": 158.19,
        "noaa": 93.38,
        "sg": 40.76
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 0.72, "noaa": 2.2, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 1.98, "sg": 1.98 },
      "pressure": { "ecmwf:aifs": 1011.88, "noaa": 1033.06, "sg": 1033.06 },
      "time": "2026-02-21T11:00:00+00:00",
      "waterTemperature": { "meto": 12.48, "sg": 12.48 },
      "waveHeight": { "dwd": 3.03, "meteo": 2.24, "noaa": 2.48, "sg": 2.24 },
      "windDirection": {
        "dwd": 30.55,
        "ecmwf:aifs": 183.36,
        "noaa": 106.16,
        "sg": 30.55
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 0.6, "noaa": 1.75, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 1.66, "sg": 1.66 },
      "pressure": { "ecmwf:aifs": 1012.01, "noaa": 1033.05, "sg": 1033.05 },
      "time": "2026-02-21T12:00:00+00:00",
      "waterTemperature": { "meto": 12.53, "sg": 12.53 },
      "waveHeight": { "dwd": 3.06, "meteo": 2.3, "noaa": 2.48, "sg": 2.3 },
      "windDirection": {
        "dwd": 20.34,
        "ecmwf:aifs": 208.53,
        "noaa": 118.94,
        "sg": 20.34
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 0.47, "noaa": 1.3, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 1.67, "sg": 1.67 },
      "pressure": { "ecmwf:aifs": 1011.81, "noaa": 1032.5, "sg": 1032.5 },
      "time": "2026-02-21T13:00:00+00:00",
      "waterTemperature": { "meto": 12.61, "sg": 12.61 },
      "waveHeight": { "dwd": 3.05, "meteo": 2.34, "noaa": 2.46, "sg": 2.34 },
      "windDirection": {
        "dwd": 8.25,
        "ecmwf:aifs": 230.42,
        "noaa": 71.01,
        "sg": 8.25
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 0.76, "noaa": 1.48, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 1.67, "sg": 1.67 },
      "pressure": { "ecmwf:aifs": 1011.6, "noaa": 1031.95, "sg": 1031.95 },
      "time": "2026-02-21T14:00:00+00:00",
      "waterTemperature": { "meto": 12.69, "sg": 12.69 },
      "waveHeight": { "dwd": 3.04, "meteo": 2.39, "noaa": 2.45, "sg": 2.39 },
      "windDirection": {
        "dwd": 356.17,
        "ecmwf:aifs": 252.31,
        "noaa": 23.09,
        "sg": 356.17
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 1.06, "noaa": 1.65, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 1.68, "sg": 1.68 },
      "pressure": { "ecmwf:aifs": 1011.4, "noaa": 1031.4, "sg": 1031.4 },
      "time": "2026-02-21T15:00:00+00:00",
      "waterTemperature": { "meto": 12.77, "sg": 12.77 },
      "waveHeight": { "dwd": 3.03, "meteo": 2.43, "noaa": 2.43, "sg": 2.43 },
      "windDirection": {
        "dwd": 344.08,
        "ecmwf:aifs": 274.19,
        "noaa": 335.16,
        "sg": 344.08
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 1.35, "noaa": 1.83, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 3.1, "sg": 3.1 },
      "pressure": { "ecmwf:aifs": 1011.2, "noaa": 1031.45, "sg": 1031.45 },
      "time": "2026-02-21T16:00:00+00:00",
      "waterTemperature": { "meto": 12.83, "sg": 12.83 },
      "waveHeight": { "dwd": 2.99, "meteo": 2.44, "noaa": 2.42, "sg": 2.44 },
      "windDirection": {
        "dwd": 347.04,
        "ecmwf:aifs": 296.08,
        "noaa": 340.84,
        "sg": 347.04
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 1.64, "noaa": 3.02, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 4.52, "sg": 4.52 },
      "pressure": { "ecmwf:aifs": 1011.0, "noaa": 1031.51, "sg": 1031.51 },
      "time": "2026-02-21T17:00:00+00:00",
      "waterTemperature": { "meto": 12.88, "sg": 12.88 },
      "waveHeight": { "dwd": 2.96, "meteo": 2.46, "noaa": 2.41, "sg": 2.46 },
      "windDirection": {
        "dwd": 349.99,
        "ecmwf:aifs": 317.97,
        "noaa": 346.53,
        "sg": 349.99
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 1.94, "noaa": 4.22, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 5.94, "sg": 5.94 },
      "pressure": { "ecmwf:aifs": 1010.8, "noaa": 1031.56, "sg": 1031.56 },
      "time": "2026-02-21T18:00:00+00:00",
      "waterTemperature": { "meto": 12.89, "sg": 12.89 },
      "waveHeight": { "dwd": 2.92, "meteo": 2.47, "noaa": 2.4, "sg": 2.47 },
      "windDirection": {
        "dwd": 352.95,
        "ecmwf:aifs": 339.86,
        "noaa": 352.21,
        "sg": 352.95
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 2.23, "noaa": 5.41, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 5.8, "sg": 5.8 },
      "pressure": { "ecmwf:aifs": 1010.96, "noaa": 1031.69, "sg": 1031.69 },
      "time": "2026-02-21T19:00:00+00:00",
      "waterTemperature": { "meto": 12.85, "sg": 12.85 },
      "waveHeight": { "dwd": 2.87, "meteo": 2.45, "noaa": 2.38, "sg": 2.45 },
      "windDirection": {
        "dwd": 359.24,
        "ecmwf:aifs": 345.62,
        "noaa": 359.22,
        "sg": 359.24
      },
      "windSpeed": { "dwd": 2.25, "ecmwf:aifs": 2.21, "noaa": 5.16, "sg": 2.25 }
    },
    {
      "gust": { "noaa": 5.66, "sg": 5.66 },
      "pressure": { "ecmwf:aifs": 1011.12, "noaa": 1031.83, "sg": 1031.83 },
      "time": "2026-02-21T20:00:00+00:00",
      "waterTemperature": { "meto": 12.81, "sg": 12.81 },
      "waveHeight": { "dwd": 2.83, "meteo": 2.43, "noaa": 2.36, "sg": 2.43 },
      "windDirection": {
        "dwd": 5.53,
        "ecmwf:aifs": 351.39,
        "noaa": 6.22,
        "sg": 5.53
      },
      "windSpeed": { "dwd": 2.49, "ecmwf:aifs": 2.18, "noaa": 4.9, "sg": 2.49 }
    },
    {
      "gust": { "noaa": 5.52, "sg": 5.52 },
      "pressure": { "ecmwf:aifs": 1011.28, "noaa": 1031.96, "sg": 1031.96 },
      "time": "2026-02-21T21:00:00+00:00",
      "waterTemperature": { "meto": 12.76, "sg": 12.76 },
      "waveHeight": { "dwd": 2.78, "meteo": 2.41, "noaa": 2.34, "sg": 2.41 },
      "windDirection": {
        "dwd": 11.82,
        "ecmwf:aifs": 357.15,
        "noaa": 13.23,
        "sg": 11.82
      },
      "windSpeed": { "dwd": 2.74, "ecmwf:aifs": 2.16, "noaa": 4.65, "sg": 2.74 }
    },
    {
      "gust": { "noaa": 4.7, "sg": 4.7 },
      "pressure": { "ecmwf:aifs": 1011.43, "noaa": 1031.87, "sg": 1031.87 },
      "time": "2026-02-21T22:00:00+00:00",
      "waterTemperature": { "meto": 12.71, "sg": 12.71 },
      "waveHeight": { "dwd": 2.73, "meteo": 2.37, "noaa": 2.32, "sg": 2.37 },
      "windDirection": {
        "dwd": 15.78,
        "ecmwf:aifs": 2.92,
        "noaa": 43.4,
        "sg": 15.78
      },
      "windSpeed": { "dwd": 2.49, "ecmwf:aifs": 2.14, "noaa": 4.06, "sg": 2.49 }
    },
    {
      "gust": { "noaa": 3.87, "sg": 3.87 },
      "pressure": { "ecmwf:aifs": 1011.59, "noaa": 1031.77, "sg": 1031.77 },
      "time": "2026-02-21T23:00:00+00:00",
      "waterTemperature": { "meto": 12.64, "sg": 12.64 },
      "waveHeight": { "dwd": 2.67, "meteo": 2.33, "noaa": 2.29, "sg": 2.33 },
      "windDirection": {
        "dwd": 19.74,
        "ecmwf:aifs": 8.68,
        "noaa": 73.57,
        "sg": 19.74
      },
      "windSpeed": { "dwd": 2.25, "ecmwf:aifs": 2.11, "noaa": 3.46, "sg": 2.25 }
    },
    {
      "gust": { "noaa": 3.04, "sg": 3.04 },
      "pressure": { "ecmwf:aifs": 1011.75, "noaa": 1031.67, "sg": 1031.67 },
      "time": "2026-02-22T00:00:00+00:00",
      "waterTemperature": { "meto": 12.56, "sg": 12.56 },
      "waveHeight": { "dwd": 2.62, "meteo": 2.29, "noaa": 2.27, "sg": 2.29 },
      "windDirection": {
        "dwd": 23.7,
        "ecmwf:aifs": 14.45,
        "noaa": 103.74,
        "sg": 23.7
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 2.09, "noaa": 2.87, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 3.44, "sg": 3.44 },
      "pressure": { "ecmwf:aifs": 1011.62, "noaa": 1031.47, "sg": 1031.47 },
      "time": "2026-02-22T01:00:00+00:00",
      "waterTemperature": { "meto": 12.48, "sg": 12.48 },
      "waveHeight": { "dwd": 2.57, "meteo": 2.25, "noaa": 2.25, "sg": 2.25 },
      "windDirection": {
        "dwd": 30.31,
        "ecmwf:aifs": 15.17,
        "noaa": 106.92,
        "sg": 30.31
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 2.14, "noaa": 3.22, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 3.84, "sg": 3.84 },
      "pressure": { "ecmwf:aifs": 1011.48, "noaa": 1031.26, "sg": 1031.26 },
      "time": "2026-02-22T02:00:00+00:00",
      "waterTemperature": { "meto": 12.41, "sg": 12.41 },
      "waveHeight": { "dwd": 2.53, "meteo": 2.2, "noaa": 2.24, "sg": 2.2 },
      "windDirection": {
        "dwd": 36.92,
        "ecmwf:aifs": 15.89,
        "noaa": 110.09,
        "sg": 36.92
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 2.18, "noaa": 3.56, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 4.24, "sg": 4.24 },
      "pressure": { "ecmwf:aifs": 1011.35, "noaa": 1031.06, "sg": 1031.06 },
      "time": "2026-02-22T03:00:00+00:00",
      "waterTemperature": { "meto": 12.34, "sg": 12.34 },
      "waveHeight": { "dwd": 2.48, "meteo": 2.16, "noaa": 2.22, "sg": 2.16 },
      "windDirection": {
        "dwd": 43.53,
        "ecmwf:aifs": 16.61,
        "noaa": 113.27,
        "sg": 43.53
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 2.23, "noaa": 3.91, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 4.31, "sg": 4.31 },
      "pressure": { "ecmwf:aifs": 1011.22, "noaa": 1031.0, "sg": 1031.0 },
      "time": "2026-02-22T04:00:00+00:00",
      "waterTemperature": { "meto": 12.27, "sg": 12.27 },
      "waveHeight": { "dwd": 2.45, "meteo": 2.12, "noaa": 2.2, "sg": 2.12 },
      "windDirection": {
        "dwd": 38.0,
        "ecmwf:aifs": 17.32,
        "noaa": 111.73,
        "sg": 38.0
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 2.28, "noaa": 3.98, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 4.37, "sg": 4.37 },
      "pressure": { "ecmwf:aifs": 1011.08, "noaa": 1030.94, "sg": 1030.94 },
      "time": "2026-02-22T05:00:00+00:00",
      "waterTemperature": { "meto": 12.21, "sg": 12.21 },
      "waveHeight": { "dwd": 2.42, "meteo": 2.07, "noaa": 2.19, "sg": 2.07 },
      "windDirection": {
        "dwd": 32.46,
        "ecmwf:aifs": 18.04,
        "noaa": 110.2,
        "sg": 32.46
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 2.32, "noaa": 4.05, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 4.44, "sg": 4.44 },
      "pressure": { "ecmwf:aifs": 1010.95, "noaa": 1030.88, "sg": 1030.88 },
      "time": "2026-02-22T06:00:00+00:00",
      "waterTemperature": { "meto": 12.21, "sg": 12.21 },
      "waveHeight": { "dwd": 2.39, "meteo": 2.03, "noaa": 2.17, "sg": 2.03 },
      "windDirection": {
        "dwd": 26.93,
        "ecmwf:aifs": 18.76,
        "noaa": 108.66,
        "sg": 26.93
      },
      "windSpeed": { "dwd": 2.0, "ecmwf:aifs": 2.37, "noaa": 4.12, "sg": 2.0 }
    },
    {
      "gust": { "noaa": 4.5, "sg": 4.5 },
      "pressure": { "ecmwf:aifs": 1011.03, "noaa": 1031.01, "sg": 1031.01 },
      "time": "2026-02-22T07:00:00+00:00",
      "waterTemperature": { "meto": 12.27, "sg": 12.27 },
      "waveHeight": { "meteo": 1.99, "noaa": 2.16, "sg": 1.99 },
      "windDirection": { "ecmwf:aifs": 13.38, "noaa": 108.24, "sg": 108.24 },
      "windSpeed": { "ecmwf:aifs": 2.19, "noaa": 4.14, "sg": 4.14 }
    },
    {
      "gust": { "noaa": 4.55, "sg": 4.55 },
      "pressure": { "ecmwf:aifs": 1011.11, "noaa": 1031.14, "sg": 1031.14 },
      "time": "2026-02-22T08:00:00+00:00",
      "waterTemperature": { "meto": 12.33, "sg": 12.33 },
      "waveHeight": { "meteo": 1.95, "noaa": 2.14, "sg": 1.95 },
      "windDirection": { "ecmwf:aifs": 8.01, "noaa": 107.81, "sg": 107.81 },
      "windSpeed": { "ecmwf:aifs": 2.01, "noaa": 4.17, "sg": 4.17 }
    },
    {
      "gust": { "noaa": 4.61, "sg": 4.61 },
      "pressure": { "ecmwf:aifs": 1011.19, "noaa": 1031.27, "sg": 1031.27 },
      "time": "2026-02-22T09:00:00+00:00",
      "waterTemperature": { "meto": 12.39, "sg": 12.39 },
      "waveHeight": { "meteo": 1.91, "noaa": 2.13, "sg": 1.91 },
      "windDirection": { "ecmwf:aifs": 2.63, "noaa": 107.39, "sg": 107.39 },
      "windSpeed": { "ecmwf:aifs": 1.83, "noaa": 4.19, "sg": 4.19 }
    },
    {
      "gust": { "noaa": 3.79, "sg": 3.79 },
      "pressure": { "ecmwf:aifs": 1011.27, "noaa": 1031.24, "sg": 1031.24 },
      "time": "2026-02-22T10:00:00+00:00",
      "waterTemperature": { "meto": 12.44, "sg": 12.44 },
      "waveHeight": { "meteo": 1.88, "noaa": 2.12, "sg": 1.88 },
      "windDirection": { "ecmwf:aifs": 357.25, "noaa": 113.71, "sg": 113.71 },
      "windSpeed": { "ecmwf:aifs": 1.65, "noaa": 3.39, "sg": 3.39 }
    },
    {
      "gust": { "noaa": 2.96, "sg": 2.96 },
      "pressure": { "ecmwf:aifs": 1011.35, "noaa": 1031.22, "sg": 1031.22 },
      "time": "2026-02-22T11:00:00+00:00",
      "waterTemperature": { "meto": 12.49, "sg": 12.49 },
      "waveHeight": { "meteo": 1.85, "noaa": 2.1, "sg": 1.85 },
      "windDirection": { "ecmwf:aifs": 351.88, "noaa": 120.04, "sg": 120.04 },
      "windSpeed": { "ecmwf:aifs": 1.47, "noaa": 2.59, "sg": 2.59 }
    },
    {
      "gust": { "noaa": 2.14, "sg": 2.14 },
      "pressure": { "ecmwf:aifs": 1011.43, "noaa": 1031.2, "sg": 1031.2 },
      "time": "2026-02-22T12:00:00+00:00",
      "waterTemperature": { "meto": 12.57, "sg": 12.57 },
      "waveHeight": { "meteo": 1.82, "noaa": 2.09, "sg": 1.82 },
      "windDirection": { "ecmwf:aifs": 346.5, "noaa": 126.36, "sg": 126.36 },
      "windSpeed": { "ecmwf:aifs": 1.29, "noaa": 1.79, "sg": 1.79 }
    },
    {
      "gust": { "noaa": 2.17, "sg": 2.17 },
      "pressure": { "ecmwf:aifs": 1011.03, "noaa": 1030.63, "sg": 1030.63 },
      "time": "2026-02-22T13:00:00+00:00",
      "waterTemperature": { "meto": 12.68, "sg": 12.68 },
      "waveHeight": { "meteo": 1.8, "noaa": 2.07, "sg": 1.8 },
      "windDirection": { "ecmwf:aifs": 346.46, "noaa": 82.26, "sg": 82.26 },
      "windSpeed": { "ecmwf:aifs": 1.44, "noaa": 1.94, "sg": 1.94 }
    },
    {
      "gust": { "noaa": 2.19, "sg": 2.19 },
      "pressure": { "ecmwf:aifs": 1010.62, "noaa": 1030.06, "sg": 1030.06 },
      "time": "2026-02-22T14:00:00+00:00",
      "waterTemperature": { "meto": 12.78, "sg": 12.78 },
      "waveHeight": { "meteo": 1.77, "noaa": 2.05, "sg": 1.77 },
      "windDirection": { "ecmwf:aifs": 346.43, "noaa": 38.15, "sg": 38.15 },
      "windSpeed": { "ecmwf:aifs": 1.58, "noaa": 2.09, "sg": 2.09 }
    },
    {
      "gust": { "noaa": 2.21, "sg": 2.21 },
      "pressure": { "ecmwf:aifs": 1010.22, "noaa": 1029.49, "sg": 1029.49 },
      "time": "2026-02-22T15:00:00+00:00",
      "waterTemperature": { "meto": 12.87, "sg": 12.87 },
      "waveHeight": { "meteo": 1.75, "noaa": 2.03, "sg": 1.75 },
      "windDirection": { "ecmwf:aifs": 346.39, "noaa": 354.05, "sg": 354.05 },
      "windSpeed": { "ecmwf:aifs": 1.73, "noaa": 2.24, "sg": 2.24 }
    },
    {
      "gust": { "noaa": 3.04, "sg": 3.04 },
      "pressure": { "ecmwf:aifs": 1009.82, "noaa": 1029.23, "sg": 1029.23 },
      "time": "2026-02-22T16:00:00+00:00",
      "waterTemperature": { "meto": 12.95, "sg": 12.95 },
      "waveHeight": { "meteo": 1.74, "noaa": 2.01, "sg": 1.74 },
      "windDirection": { "ecmwf:aifs": 346.35, "noaa": 354.62, "sg": 354.62 },
      "windSpeed": { "ecmwf:aifs": 1.88, "noaa": 3.0, "sg": 3.0 }
    },
    {
      "gust": { "noaa": 3.87, "sg": 3.87 },
      "pressure": { "ecmwf:aifs": 1009.41, "noaa": 1028.97, "sg": 1028.97 },
      "time": "2026-02-22T17:00:00+00:00",
      "waterTemperature": { "meto": 13.02, "sg": 13.02 },
      "waveHeight": { "meteo": 1.74, "noaa": 1.98, "sg": 1.74 },
      "windDirection": { "ecmwf:aifs": 346.32, "noaa": 355.19, "sg": 355.19 },
      "windSpeed": { "ecmwf:aifs": 2.02, "noaa": 3.76, "sg": 3.76 }
    },
    {
      "gust": { "noaa": 4.7, "sg": 4.7 },
      "pressure": { "ecmwf:aifs": 1009.01, "noaa": 1028.72, "sg": 1028.72 },
      "time": "2026-02-22T18:00:00+00:00",
      "waterTemperature": { "meto": 13.0, "sg": 13.0 },
      "waveHeight": { "meteo": 1.73, "noaa": 1.96, "sg": 1.73 },
      "windDirection": { "ecmwf:aifs": 346.28, "noaa": 355.76, "sg": 355.76 },
      "windSpeed": { "ecmwf:aifs": 2.17, "noaa": 4.52, "sg": 4.52 }
    },
    {
      "gust": { "noaa": 4.32, "sg": 4.32 },
      "pressure": { "ecmwf:aifs": 1008.97, "noaa": 1028.84, "sg": 1028.84 },
      "time": "2026-02-22T19:00:00+00:00",
      "waterTemperature": { "meto": 12.89, "sg": 12.89 },
      "waveHeight": { "meteo": 1.73, "noaa": 1.93, "sg": 1.73 },
      "windDirection": { "ecmwf:aifs": 358.03, "noaa": 2.6, "sg": 2.6 },
      "windSpeed": { "ecmwf:aifs": 2.05, "noaa": 4.15, "sg": 4.15 }
    },
    {
      "gust": { "noaa": 3.94, "sg": 3.94 },
      "pressure": { "ecmwf:aifs": 1008.94, "noaa": 1028.96, "sg": 1028.96 },
      "time": "2026-02-22T20:00:00+00:00",
      "waterTemperature": { "meto": 12.8, "sg": 12.8 },
      "waveHeight": { "meteo": 1.74, "noaa": 1.91, "sg": 1.74 },
      "windDirection": { "ecmwf:aifs": 9.78, "noaa": 9.43, "sg": 9.43 },
      "windSpeed": { "ecmwf:aifs": 1.93, "noaa": 3.77, "sg": 3.77 }
    },
    {
      "gust": { "noaa": 3.56, "sg": 3.56 },
      "pressure": { "ecmwf:aifs": 1008.91, "noaa": 1029.08, "sg": 1029.08 },
      "time": "2026-02-22T21:00:00+00:00",
      "waterTemperature": { "meto": 12.72, "sg": 12.72 },
      "waveHeight": { "meteo": 1.74, "noaa": 1.88, "sg": 1.74 },
      "windDirection": { "ecmwf:aifs": 21.52, "noaa": 16.27, "sg": 16.27 },
      "windSpeed": { "ecmwf:aifs": 1.82, "noaa": 3.4, "sg": 3.4 }
    },
    {
      "gust": { "noaa": 3.18, "sg": 3.18 },
      "pressure": { "ecmwf:aifs": 1008.87, "noaa": 1028.96, "sg": 1028.96 },
      "time": "2026-02-22T22:00:00+00:00",
      "waterTemperature": { "meto": 12.65, "sg": 12.65 },
      "waveHeight": { "meteo": 1.74, "noaa": 1.85, "sg": 1.74 },
      "windDirection": { "ecmwf:aifs": 33.27, "noaa": 47.58, "sg": 47.58 },
      "windSpeed": { "ecmwf:aifs": 1.7, "noaa": 3.06, "sg": 3.06 }
    },
    {
      "gust": { "noaa": 2.79, "sg": 2.79 },
      "pressure": { "ecmwf:aifs": 1008.84, "noaa": 1028.83, "sg": 1028.83 },
      "time": "2026-02-22T23:00:00+00:00",
      "waterTemperature": { "meto": 12.59, "sg": 12.59 },
      "waveHeight": { "meteo": 1.75, "noaa": 1.82, "sg": 1.75 },
      "windDirection": { "ecmwf:aifs": 45.02, "noaa": 78.89, "sg": 78.89 },
      "windSpeed": { "ecmwf:aifs": 1.58, "noaa": 2.72, "sg": 2.72 }
    },
    {
      "gust": { "noaa": 2.4, "sg": 2.4 },
      "pressure": { "ecmwf:aifs": 1008.8, "noaa": 1028.7, "sg": 1028.7 },
      "time": "2026-02-23T00:00:00+00:00",
      "waterTemperature": { "meto": 12.55, "sg": 12.55 },
      "waveHeight": { "meteo": 1.75, "noaa": 1.79, "sg": 1.75 },
      "windDirection": { "ecmwf:aifs": 56.77, "noaa": 110.2, "sg": 110.2 },
      "windSpeed": { "ecmwf:aifs": 1.46, "noaa": 2.38, "sg": 2.38 }
    },
    {
      "gust": { "noaa": 3.11, "sg": 3.11 },
      "pressure": { "ecmwf:aifs": 1008.52, "noaa": 1028.52, "sg": 1028.52 },
      "time": "2026-02-23T01:00:00+00:00",
      "waterTemperature": { "meto": 12.52, "sg": 12.52 },
      "waveHeight": { "meteo": 1.75, "noaa": 1.77, "sg": 1.75 },
      "windDirection": { "ecmwf:aifs": 60.95, "noaa": 115.0, "sg": 115.0 },
      "windSpeed": { "ecmwf:aifs": 1.48, "noaa": 2.94, "sg": 2.94 }
    },
    {
      "gust": { "noaa": 3.81, "sg": 3.81 },
      "pressure": { "ecmwf:aifs": 1008.24, "noaa": 1028.33, "sg": 1028.33 },
      "time": "2026-02-23T02:00:00+00:00",
      "waterTemperature": { "meto": 12.49, "sg": 12.49 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.75, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 65.14, "noaa": 119.8, "sg": 119.8 },
      "windSpeed": { "ecmwf:aifs": 1.5, "noaa": 3.51, "sg": 3.51 }
    },
    {
      "gust": { "noaa": 4.51, "sg": 4.51 },
      "pressure": { "ecmwf:aifs": 1007.96, "noaa": 1028.14, "sg": 1028.14 },
      "time": "2026-02-23T03:00:00+00:00",
      "waterTemperature": { "meto": 12.44, "sg": 12.44 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.73, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 69.32, "noaa": 124.6, "sg": 124.6 },
      "windSpeed": { "ecmwf:aifs": 1.53, "noaa": 4.07, "sg": 4.07 }
    },
    {
      "gust": { "noaa": 4.51, "sg": 4.51 },
      "pressure": { "ecmwf:aifs": 1007.68, "noaa": 1027.9, "sg": 1027.9 },
      "time": "2026-02-23T04:00:00+00:00",
      "waterTemperature": { "meto": 12.4, "sg": 12.4 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.72, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 73.51, "noaa": 124.57, "sg": 124.57 },
      "windSpeed": { "ecmwf:aifs": 1.55, "noaa": 4.08, "sg": 4.08 }
    },
    {
      "gust": { "noaa": 4.51, "sg": 4.51 },
      "pressure": { "ecmwf:aifs": 1007.4, "noaa": 1027.65, "sg": 1027.65 },
      "time": "2026-02-23T05:00:00+00:00",
      "waterTemperature": { "meto": 12.36, "sg": 12.36 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.7, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 77.69, "noaa": 124.54, "sg": 124.54 },
      "windSpeed": { "ecmwf:aifs": 1.57, "noaa": 4.09, "sg": 4.09 }
    },
    {
      "gust": { "noaa": 4.5, "sg": 4.5 },
      "pressure": { "ecmwf:aifs": 1007.12, "noaa": 1027.4, "sg": 1027.4 },
      "time": "2026-02-23T06:00:00+00:00",
      "waterTemperature": { "meto": 12.36, "sg": 12.36 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.69, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 81.88, "noaa": 124.51, "sg": 124.51 },
      "windSpeed": { "ecmwf:aifs": 1.59, "noaa": 4.1, "sg": 4.1 }
    },
    {
      "gust": { "noaa": 4.58, "sg": 4.58 },
      "pressure": { "ecmwf:aifs": 1007.2, "noaa": 1027.62, "sg": 1027.62 },
      "time": "2026-02-23T07:00:00+00:00",
      "waterTemperature": { "meto": 12.41, "sg": 12.41 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.68, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 92.89, "noaa": 124.55, "sg": 124.55 },
      "windSpeed": { "ecmwf:aifs": 1.44, "noaa": 4.19, "sg": 4.19 }
    },
    {
      "gust": { "noaa": 4.66, "sg": 4.66 },
      "pressure": { "ecmwf:aifs": 1007.29, "noaa": 1027.85, "sg": 1027.85 },
      "time": "2026-02-23T08:00:00+00:00",
      "waterTemperature": { "meto": 12.45, "sg": 12.45 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.68, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 103.9, "noaa": 124.6, "sg": 124.6 },
      "windSpeed": { "ecmwf:aifs": 1.28, "noaa": 4.27, "sg": 4.27 }
    },
    {
      "gust": { "noaa": 4.73, "sg": 4.73 },
      "pressure": { "ecmwf:aifs": 1007.37, "noaa": 1028.07, "sg": 1028.07 },
      "time": "2026-02-23T09:00:00+00:00",
      "waterTemperature": { "meto": 12.5, "sg": 12.5 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.67, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 114.91, "noaa": 124.64, "sg": 124.64 },
      "windSpeed": { "ecmwf:aifs": 1.13, "noaa": 4.36, "sg": 4.36 }
    },
    {
      "gust": { "noaa": 4.71, "sg": 4.71 },
      "pressure": { "ecmwf:aifs": 1007.45, "noaa": 1028.17, "sg": 1028.17 },
      "time": "2026-02-23T10:00:00+00:00",
      "waterTemperature": { "meto": 12.54, "sg": 12.54 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.67, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 125.92, "noaa": 135.64, "sg": 135.64 },
      "windSpeed": { "ecmwf:aifs": 0.98, "noaa": 4.25, "sg": 4.25 }
    },
    {
      "gust": { "noaa": 4.68, "sg": 4.68 },
      "pressure": { "ecmwf:aifs": 1007.53, "noaa": 1028.27, "sg": 1028.27 },
      "time": "2026-02-23T11:00:00+00:00",
      "waterTemperature": { "meto": 12.58, "sg": 12.58 },
      "waveHeight": { "meteo": 1.77, "noaa": 1.67, "sg": 1.77 },
      "windDirection": { "ecmwf:aifs": 136.93, "noaa": 146.64, "sg": 146.64 },
      "windSpeed": { "ecmwf:aifs": 0.82, "noaa": 4.15, "sg": 4.15 }
    },
    {
      "gust": { "noaa": 4.65, "sg": 4.65 },
      "pressure": { "ecmwf:aifs": 1007.61, "noaa": 1028.37, "sg": 1028.37 },
      "time": "2026-02-23T12:00:00+00:00",
      "waterTemperature": { "meto": 12.66, "sg": 12.66 },
      "waveHeight": { "meteo": 1.77, "noaa": 1.67, "sg": 1.77 },
      "windDirection": { "ecmwf:aifs": 147.94, "noaa": 157.64, "sg": 157.64 },
      "windSpeed": { "ecmwf:aifs": 0.67, "noaa": 4.04, "sg": 4.04 }
    },
    {
      "gust": { "noaa": 4.59, "sg": 4.59 },
      "pressure": { "ecmwf:aifs": 1007.24, "noaa": 1027.82, "sg": 1027.82 },
      "time": "2026-02-23T13:00:00+00:00",
      "waterTemperature": { "meto": 12.76, "sg": 12.76 },
      "waveHeight": { "meteo": 1.77, "noaa": 1.67, "sg": 1.77 },
      "windDirection": { "ecmwf:aifs": 177.62, "noaa": 165.93, "sg": 165.93 },
      "windSpeed": { "ecmwf:aifs": 0.72, "noaa": 4.05, "sg": 4.05 }
    },
    {
      "gust": { "noaa": 4.53, "sg": 4.53 },
      "pressure": { "ecmwf:aifs": 1006.87, "noaa": 1027.27, "sg": 1027.27 },
      "time": "2026-02-23T14:00:00+00:00",
      "waterTemperature": { "meto": 12.86, "sg": 12.86 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.68, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 207.31, "noaa": 174.23, "sg": 174.23 },
      "windSpeed": { "ecmwf:aifs": 0.76, "noaa": 4.05, "sg": 4.05 }
    },
    {
      "gust": { "noaa": 4.46, "sg": 4.46 },
      "pressure": { "ecmwf:aifs": 1006.5, "noaa": 1026.72, "sg": 1026.72 },
      "time": "2026-02-23T15:00:00+00:00",
      "waterTemperature": { "meto": 12.95, "sg": 12.95 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.68, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 236.99, "noaa": 182.52, "sg": 182.52 },
      "windSpeed": { "ecmwf:aifs": 0.81, "noaa": 4.06, "sg": 4.06 }
    },
    {
      "gust": { "noaa": 4.25, "sg": 4.25 },
      "pressure": { "ecmwf:aifs": 1006.14, "noaa": 1026.62, "sg": 1026.62 },
      "time": "2026-02-23T16:00:00+00:00",
      "waterTemperature": { "meto": 13.04, "sg": 13.04 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.67, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 266.68, "noaa": 177.47, "sg": 177.47 },
      "windSpeed": { "ecmwf:aifs": 0.86, "noaa": 3.92, "sg": 3.92 }
    },
    {
      "gust": { "noaa": 4.04, "sg": 4.04 },
      "pressure": { "ecmwf:aifs": 1005.77, "noaa": 1026.52, "sg": 1026.52 },
      "time": "2026-02-23T17:00:00+00:00",
      "waterTemperature": { "meto": 13.12, "sg": 13.12 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.67, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 296.36, "noaa": 172.42, "sg": 172.42 },
      "windSpeed": { "ecmwf:aifs": 0.9, "noaa": 3.77, "sg": 3.77 }
    },
    {
      "gust": { "noaa": 3.83, "sg": 3.83 },
      "pressure": { "ecmwf:aifs": 1005.4, "noaa": 1026.43, "sg": 1026.43 },
      "time": "2026-02-23T18:00:00+00:00",
      "waterTemperature": { "meto": 13.13, "sg": 13.13 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.66, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 326.05, "noaa": 167.37, "sg": 167.37 },
      "windSpeed": { "ecmwf:aifs": 0.95, "noaa": 3.63, "sg": 3.63 }
    },
    {
      "gust": { "noaa": 4.49, "sg": 4.49 },
      "pressure": { "ecmwf:aifs": 1005.46, "noaa": 1026.61, "sg": 1026.61 },
      "time": "2026-02-23T19:00:00+00:00",
      "waterTemperature": { "meto": 13.08, "sg": 13.08 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.65, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 349.92, "noaa": 159.38, "sg": 159.38 },
      "windSpeed": { "ecmwf:aifs": 1.01, "noaa": 4.16, "sg": 4.16 }
    },
    {
      "gust": { "noaa": 5.14, "sg": 5.14 },
      "pressure": { "ecmwf:aifs": 1005.52, "noaa": 1026.79, "sg": 1026.79 },
      "time": "2026-02-23T20:00:00+00:00",
      "waterTemperature": { "meto": 13.02, "sg": 13.02 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.65, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 13.78, "noaa": 151.4, "sg": 151.4 },
      "windSpeed": { "ecmwf:aifs": 1.07, "noaa": 4.7, "sg": 4.7 }
    },
    {
      "gust": { "noaa": 5.8, "sg": 5.8 },
      "pressure": { "ecmwf:aifs": 1005.58, "noaa": 1026.98, "sg": 1026.98 },
      "time": "2026-02-23T21:00:00+00:00",
      "waterTemperature": { "meto": 12.95, "sg": 12.95 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.64, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 37.65, "noaa": 143.41, "sg": 143.41 },
      "windSpeed": { "ecmwf:aifs": 1.13, "noaa": 5.23, "sg": 5.23 }
    },
    {
      "gust": { "noaa": 6.68, "sg": 6.68 },
      "pressure": { "ecmwf:aifs": 1005.64, "noaa": 1026.67, "sg": 1026.67 },
      "time": "2026-02-23T22:00:00+00:00",
      "waterTemperature": { "meto": 12.87, "sg": 12.87 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.63, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 61.52, "noaa": 142.04, "sg": 142.04 },
      "windSpeed": { "ecmwf:aifs": 1.19, "noaa": 5.51, "sg": 5.51 }
    },
    {
      "gust": { "noaa": 7.56, "sg": 7.56 },
      "pressure": { "ecmwf:aifs": 1005.7, "noaa": 1026.36, "sg": 1026.36 },
      "time": "2026-02-23T23:00:00+00:00",
      "waterTemperature": { "meto": 12.79, "sg": 12.79 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.61, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 85.38, "noaa": 140.67, "sg": 140.67 },
      "windSpeed": { "ecmwf:aifs": 1.25, "noaa": 5.8, "sg": 5.8 }
    },
    {
      "gust": { "noaa": 8.44, "sg": 8.44 },
      "pressure": { "ecmwf:aifs": 1005.75, "noaa": 1026.06, "sg": 1026.06 },
      "time": "2026-02-24T00:00:00+00:00",
      "waterTemperature": { "meto": 12.72, "sg": 12.72 },
      "waveHeight": { "meteo": 1.76, "noaa": 1.6, "sg": 1.76 },
      "windDirection": { "ecmwf:aifs": 109.25, "noaa": 139.3, "sg": 139.3 },
      "windSpeed": { "ecmwf:aifs": 1.31, "noaa": 6.08, "sg": 6.08 }
    },
    {
      "gust": { "noaa": 8.73, "sg": 8.73 },
      "pressure": { "ecmwf:aifs": 1005.56, "noaa": 1025.77, "sg": 1025.77 },
      "time": "2026-02-24T01:00:00+00:00",
      "waterTemperature": { "meto": 12.66, "sg": 12.66 },
      "waveHeight": { "meteo": 1.75, "noaa": 1.59, "sg": 1.75 },
      "windDirection": { "ecmwf:aifs": 111.79, "noaa": 138.84, "sg": 138.84 },
      "windSpeed": { "ecmwf:aifs": 1.37, "noaa": 6.04, "sg": 6.04 }
    },
    {
      "gust": { "noaa": 9.02, "sg": 9.02 },
      "pressure": { "ecmwf:aifs": 1005.37, "noaa": 1025.48, "sg": 1025.48 },
      "time": "2026-02-24T02:00:00+00:00",
      "waterTemperature": { "meto": 12.6, "sg": 12.6 },
      "waveHeight": { "meteo": 1.75, "noaa": 1.58, "sg": 1.75 },
      "windDirection": { "ecmwf:aifs": 114.33, "noaa": 138.39, "sg": 138.39 },
      "windSpeed": { "ecmwf:aifs": 1.44, "noaa": 6.0, "sg": 6.0 }
    },
    {
      "gust": { "noaa": 9.3, "sg": 9.3 },
      "pressure": { "ecmwf:aifs": 1005.17, "noaa": 1025.19, "sg": 1025.19 },
      "time": "2026-02-24T03:00:00+00:00",
      "waterTemperature": { "meto": 12.55, "sg": 12.55 },
      "waveHeight": { "meteo": 1.74, "noaa": 1.57, "sg": 1.74 },
      "windDirection": { "ecmwf:aifs": 116.88, "noaa": 137.93, "sg": 137.93 },
      "windSpeed": { "ecmwf:aifs": 1.5, "noaa": 5.96, "sg": 5.96 }
    },
    {
      "gust": { "noaa": 9.05, "sg": 9.05 },
      "pressure": { "ecmwf:aifs": 1004.98, "noaa": 1025.04, "sg": 1025.04 },
      "time": "2026-02-24T04:00:00+00:00",
      "waterTemperature": { "meto": 12.51, "sg": 12.51 },
      "waveHeight": { "meteo": 1.73, "noaa": 1.57, "sg": 1.73 },
      "windDirection": { "ecmwf:aifs": 119.42, "noaa": 134.39, "sg": 134.39 },
      "windSpeed": { "ecmwf:aifs": 1.57, "noaa": 6.13, "sg": 6.13 }
    },
    {
      "gust": { "noaa": 8.79, "sg": 8.79 },
      "pressure": { "ecmwf:aifs": 1004.78, "noaa": 1024.89, "sg": 1024.89 },
      "time": "2026-02-24T05:00:00+00:00",
      "waterTemperature": { "meto": 12.46, "sg": 12.46 },
      "waveHeight": { "meteo": 1.73, "noaa": 1.56, "sg": 1.73 },
      "windDirection": { "ecmwf:aifs": 121.96, "noaa": 130.84, "sg": 130.84 },
      "windSpeed": { "ecmwf:aifs": 1.64, "noaa": 6.3, "sg": 6.3 }
    },
    {
      "gust": { "noaa": 8.53, "sg": 8.53 },
      "pressure": { "ecmwf:aifs": 1004.59, "noaa": 1024.74, "sg": 1024.74 },
      "time": "2026-02-24T06:00:00+00:00",
      "waterTemperature": { "meto": 12.47, "sg": 12.47 },
      "waveHeight": { "meteo": 1.72, "noaa": 1.56, "sg": 1.72 },
      "windDirection": { "ecmwf:aifs": 124.5, "noaa": 127.3, "sg": 127.3 },
      "windSpeed": { "ecmwf:aifs": 1.7, "noaa": 6.47, "sg": 6.47 }
    },
    {
      "gust": { "noaa": 8.16, "sg": 8.16 },
      "pressure": { "ecmwf:aifs": 1004.67, "noaa": 1024.98, "sg": 1024.98 },
      "time": "2026-02-24T07:00:00+00:00",
      "waterTemperature": { "meto": 12.53, "sg": 12.53 },
      "waveHeight": { "meteo": 1.71, "noaa": 1.55, "sg": 1.71 },
      "windDirection": { "ecmwf:aifs": 131.62, "noaa": 127.92, "sg": 127.92 },
      "windSpeed": { "ecmwf:aifs": 1.78, "noaa": 6.32, "sg": 6.32 }
    },
    {
      "gust": { "noaa": 7.79, "sg": 7.79 },
      "pressure": { "ecmwf:aifs": 1004.75, "noaa": 1025.22, "sg": 1025.22 },
      "time": "2026-02-24T08:00:00+00:00",
      "waterTemperature": { "meto": 12.59, "sg": 12.59 },
      "waveHeight": { "meteo": 1.69, "noaa": 1.53, "sg": 1.69 },
      "windDirection": { "ecmwf:aifs": 138.73, "noaa": 128.53, "sg": 128.53 },
      "windSpeed": { "ecmwf:aifs": 1.85, "noaa": 6.17, "sg": 6.17 }
    },
    {
      "gust": { "noaa": 7.42, "sg": 7.42 },
      "pressure": { "ecmwf:aifs": 1004.83, "noaa": 1025.46, "sg": 1025.46 },
      "time": "2026-02-24T09:00:00+00:00",
      "waterTemperature": { "meto": 12.66, "sg": 12.66 },
      "waveHeight": { "meteo": 1.68, "noaa": 1.52, "sg": 1.68 },
      "windDirection": { "ecmwf:aifs": 145.85, "noaa": 129.15, "sg": 129.15 },
      "windSpeed": { "ecmwf:aifs": 1.93, "noaa": 6.02, "sg": 6.02 }
    },
    {
      "gust": { "noaa": 6.98, "sg": 6.98 },
      "pressure": { "ecmwf:aifs": 1004.91, "noaa": 1025.33, "sg": 1025.33 },
      "time": "2026-02-24T10:00:00+00:00",
      "waterTemperature": { "meto": 12.73, "sg": 12.73 },
      "waveHeight": { "meteo": 1.66, "noaa": 1.49, "sg": 1.66 },
      "windDirection": { "ecmwf:aifs": 152.96, "noaa": 134.29, "sg": 134.29 },
      "windSpeed": { "ecmwf:aifs": 2.0, "noaa": 5.82, "sg": 5.82 }
    },
    {
      "gust": { "noaa": 6.54, "sg": 6.54 },
      "pressure": { "ecmwf:aifs": 1004.98, "noaa": 1025.21, "sg": 1025.21 },
      "time": "2026-02-24T11:00:00+00:00",
      "waterTemperature": { "meto": 12.78, "sg": 12.78 },
      "waveHeight": { "meteo": 1.65, "noaa": 1.46, "sg": 1.65 },
      "windDirection": { "ecmwf:aifs": 160.08, "noaa": 139.42, "sg": 139.42 },
      "windSpeed": { "ecmwf:aifs": 2.08, "noaa": 5.62, "sg": 5.62 }
    },
    {
      "gust": { "noaa": 6.1, "sg": 6.1 },
      "pressure": { "ecmwf:aifs": 1005.06, "noaa": 1025.08, "sg": 1025.08 },
      "time": "2026-02-24T12:00:00+00:00",
      "waterTemperature": { "meto": 12.87, "sg": 12.87 },
      "waveHeight": { "meteo": 1.63, "noaa": 1.43, "sg": 1.63 },
      "windDirection": { "ecmwf:aifs": 167.19, "noaa": 144.56, "sg": 144.56 },
      "windSpeed": { "ecmwf:aifs": 2.15, "noaa": 5.42, "sg": 5.42 }
    },
    {
      "gust": { "noaa": 5.31, "sg": 5.31 },
      "pressure": { "ecmwf:aifs": 1004.75, "noaa": 1024.25, "sg": 1024.25 },
      "time": "2026-02-24T13:00:00+00:00",
      "waterTemperature": { "meto": 12.99, "sg": 12.99 },
      "waveHeight": { "meteo": 1.61, "noaa": 1.39, "sg": 1.61 },
      "windDirection": { "ecmwf:aifs": 176.26, "noaa": 156.73, "sg": 156.73 },
      "windSpeed": { "ecmwf:aifs": 1.91, "noaa": 4.83, "sg": 4.83 }
    },
    {
      "gust": { "noaa": 4.53, "sg": 4.53 },
      "pressure": { "ecmwf:aifs": 1004.45, "noaa": 1023.41, "sg": 1023.41 },
      "time": "2026-02-24T14:00:00+00:00",
      "waterTemperature": { "meto": 13.1, "sg": 13.1 },
      "waveHeight": { "meteo": 1.59, "noaa": 1.36, "sg": 1.59 },
      "windDirection": { "ecmwf:aifs": 185.33, "noaa": 168.91, "sg": 168.91 },
      "windSpeed": { "ecmwf:aifs": 1.67, "noaa": 4.25, "sg": 4.25 }
    },
    {
      "gust": { "noaa": 3.74, "sg": 3.74 },
      "pressure": { "ecmwf:aifs": 1004.14, "noaa": 1022.57, "sg": 1022.57 },
      "time": "2026-02-24T15:00:00+00:00",
      "waterTemperature": { "meto": 13.2, "sg": 13.2 },
      "waveHeight": { "meteo": 1.57, "noaa": 1.32, "sg": 1.57 },
      "windDirection": { "ecmwf:aifs": 194.4, "noaa": 181.08, "sg": 181.08 },
      "windSpeed": { "ecmwf:aifs": 1.44, "noaa": 3.66, "sg": 3.66 }
    },
    {
      "gust": { "noaa": 3.8, "sg": 3.8 },
      "pressure": { "ecmwf:aifs": 1003.83, "noaa": 1022.11, "sg": 1022.11 },
      "time": "2026-02-24T16:00:00+00:00",
      "waterTemperature": { "meto": 13.28, "sg": 13.28 },
      "waveHeight": { "meteo": 1.55, "noaa": 1.28, "sg": 1.55 },
      "windDirection": { "ecmwf:aifs": 203.47, "noaa": 190.42, "sg": 190.42 },
      "windSpeed": { "ecmwf:aifs": 1.2, "noaa": 3.73, "sg": 3.73 }
    },
    {
      "gust": { "noaa": 3.86, "sg": 3.86 },
      "pressure": { "ecmwf:aifs": 1003.52, "noaa": 1021.65, "sg": 1021.65 },
      "time": "2026-02-24T17:00:00+00:00",
      "waterTemperature": { "meto": 13.35, "sg": 13.35 },
      "waveHeight": { "meteo": 1.54, "noaa": 1.25, "sg": 1.54 },
      "windDirection": { "ecmwf:aifs": 212.54, "noaa": 199.75, "sg": 199.75 },
      "windSpeed": { "ecmwf:aifs": 0.96, "noaa": 3.81, "sg": 3.81 }
    },
    {
      "gust": { "noaa": 3.92, "sg": 3.92 },
      "pressure": { "ecmwf:aifs": 1003.21, "noaa": 1021.19, "sg": 1021.19 },
      "time": "2026-02-24T18:00:00+00:00",
      "waterTemperature": { "meto": 13.35, "sg": 13.35 },
      "waveHeight": { "meteo": 1.52, "noaa": 1.21, "sg": 1.52 },
      "windDirection": { "ecmwf:aifs": 221.61, "noaa": 209.09, "sg": 209.09 },
      "windSpeed": { "ecmwf:aifs": 0.72, "noaa": 3.88, "sg": 3.88 }
    },
    {
      "gust": { "noaa": 3.58, "sg": 3.58 },
      "pressure": { "ecmwf:aifs": 1003.29, "noaa": 1021.3, "sg": 1021.3 },
      "time": "2026-02-24T19:00:00+00:00",
      "waterTemperature": { "meto": 13.26, "sg": 13.26 },
      "waveHeight": { "meteo": 1.5, "noaa": 1.21, "sg": 1.5 },
      "windDirection": { "ecmwf:aifs": 200.63, "noaa": 201.4, "sg": 201.4 },
      "windSpeed": { "ecmwf:aifs": 0.85, "noaa": 3.52, "sg": 3.52 }
    },
    {
      "gust": { "noaa": 3.25, "sg": 3.25 },
      "pressure": { "ecmwf:aifs": 1003.38, "noaa": 1021.41, "sg": 1021.41 },
      "time": "2026-02-24T20:00:00+00:00",
      "waterTemperature": { "meto": 13.18, "sg": 13.18 },
      "waveHeight": { "meteo": 1.48, "noaa": 1.22, "sg": 1.48 },
      "windDirection": { "ecmwf:aifs": 179.65, "noaa": 193.71, "sg": 193.71 },
      "windSpeed": { "ecmwf:aifs": 0.99, "noaa": 3.15, "sg": 3.15 }
    },
    {
      "gust": { "noaa": 2.92, "sg": 2.92 },
      "pressure": { "ecmwf:aifs": 1003.46, "noaa": 1021.52, "sg": 1021.52 },
      "time": "2026-02-24T21:00:00+00:00",
      "waterTemperature": { "meto": 13.12, "sg": 13.12 },
      "waveHeight": { "meteo": 1.46, "noaa": 1.22, "sg": 1.46 },
      "windDirection": { "ecmwf:aifs": 158.67, "noaa": 186.02, "sg": 186.02 },
      "windSpeed": { "ecmwf:aifs": 1.12, "noaa": 2.79, "sg": 2.79 }
    },
    {
      "gust": { "noaa": 3.82, "sg": 3.82 },
      "pressure": { "ecmwf:aifs": 1003.54, "noaa": 1021.13, "sg": 1021.13 },
      "time": "2026-02-24T22:00:00+00:00",
      "waterTemperature": { "meto": 13.07, "sg": 13.07 },
      "waveHeight": { "meteo": 1.44, "noaa": 1.3, "sg": 1.44 },
      "windDirection": { "ecmwf:aifs": 137.7, "noaa": 167.0, "sg": 167.0 },
      "windSpeed": { "ecmwf:aifs": 1.25, "noaa": 3.31, "sg": 3.31 }
    },
    {
      "gust": { "noaa": 4.72, "sg": 4.72 },
      "pressure": { "ecmwf:aifs": 1003.62, "noaa": 1020.74, "sg": 1020.74 },
      "time": "2026-02-24T23:00:00+00:00",
      "waterTemperature": { "meto": 13.02, "sg": 13.02 },
      "waveHeight": { "meteo": 1.43, "noaa": 1.38, "sg": 1.43 },
      "windDirection": { "ecmwf:aifs": 116.72, "noaa": 147.97, "sg": 147.97 },
      "windSpeed": { "ecmwf:aifs": 1.39, "noaa": 3.82, "sg": 3.82 }
    }
  ],
  "meta": {
    "cost": 1,
    "dailyQuota": 10,
    "end": "2026-02-24 23:00",
    "lat": 41.683,
    "lng": -8.833,
    "params": [
      "waveHeight",
      "windSpeed",
      "gust",
      "windDirection",
      "waterTemperature",
      "pressure"
    ],
    "requestCount": 3,
    "start": "2026-02-15 00:00"
  }
}
```
