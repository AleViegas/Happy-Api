# Happy Api

A REST Api that provides information about orphanages in Happy application. As well, Happy api was created during NLW, an online event of Rocketseat. 
## Demo

https://aleviegas-happy-api.herokuapp.com/

## Technologys

- Typescript
- Express
- Sqlite

## Routes

#### Return a list of all orphanages

```http
  GET /api/orphanages
```
#### Return a orphanage

```http
  GET /api/orphanages/${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**|

#### Register the orphanage in database

```http
  POST /api/orphanages
```

| Request.body   | Type       |
| :---------- | :--------- |
| `name`      | `string` |
| `latitude`      | `number` |
| `longitude`      | `number` |
| `about`      | `string` |
| `instructions`      | `string` |
| `opening_hours`      | `string` |
| `open_on_weekends`      | `boolean` |
| `images`      | `array` |




