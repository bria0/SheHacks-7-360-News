# 360° News

See current events from a 360° view.

![Home page image](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/344/873/datas/original.png)

## Inspiration

The current landscape of digital news and social media has both lowered attention spans and created echo chambers that limit our exposure to different views, further reinforcing existing biases.

Current text summarizers in the market are generally not geared towards news and do not place focus on expressing a wide range of angles. By providing small but informative paragraphs, our goal is to broaden perspectives on global events in an accessible manner for today's population.

## What it does

- You enter key words or explore a trending topic
- We summarize 3 relevant articles from centre, left leaning, and right leaning sources, that have been posted in a similar time frame

## How we built it

- We use News API to collect matching news articles that fit key words from a range of politically diverse news sources
- We use Cohere API to generate summaries of long articles into less than 100 words
- Backend was built in Python and connected to our React frontend using Flask

## What's next

- Date range selection
- More customization of news sources, such as filtering, browsing by categories, and setting a display amount
- Email newsletter
- Mobile app
- Podcast
- Improved performance

## How to run

- `npm start`
- `npm install --save styled-components`
- `npm install axios`
- `pip install cohere`
- `pip install newsapi-python`
- `python -m flask run`

## Demo
Check out our [YouTube video](https://youtu.be/9cZW91pytRc) to see 360 News in action.
