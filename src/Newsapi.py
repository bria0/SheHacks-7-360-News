from newsapi import NewsApiClient
from random import choice
import cohere

co = cohere.Client("aPZpyPjJZqmDPFZXosv6xPZvVxipmCb6piLBg2gF") #Set up cohere API connection
"""
param: none
returns: list of selected news sites that articles will be pulled from in the order from left, centre and right
"""
def select_left():
    #'The Huffington Post', 'New York Magazine', , 'Buzzfeed'
    left = ['cnn', 'Polygon','cbs-news','usa-today']
    return choice(left)

def select_centre():
    #'National Geographic','Google News', 'BBC News'
    centres = ['reuters','Buzzfeed', 'independent','financial-times','bbc-news']
    return choice(centres)

def select_right():
    #,
    rights = ['fox-news','national-review', 'the-american-conservative']
    return choice(rights)


"""
param: none
return: prompt that user enters
"""
def enter_query():
    # Use a breakpoint in the code line below to debug your script.
    article_topic = input('\n')  # \n ---> newline  ---> It causes a line break
    return article_topic


"""
param: none
return: prompt that user enters
"""
def get_news(topic):
    newsapi = NewsApiClient(api_key='36b75911cfce4a27952c6b48f09d4a8f')  # getting news api
    topic = topic
    content_list = []
    categories = ['left', 'centre', 'right']

    for i, cat in enumerate(categories):  # looping thru each article source in list, from left, centre and right
        found = False
        while found != True:
            if cat == 'left':
                source = select_left()
            elif cat == 'centre':
                source = select_centre()
            elif cat == 'right':
                source = select_right()
            top_new = newsapi.get_everything(q=topic, sources=source, language='en')
            if top_new['totalResults'] != 0:
                found = True
        content_list.append([top_new['articles'][0]['title'],top_new['articles'][0]['content'],top_new['articles'][0]['url'],top_new['articles'][0]['publishedAt']])
    return content_list


"""
param: A string with the topic for news articles
return: A list of summarized articles and its reference information
"""
def get_summary(topic):
    news = get_news(topic)
    return summarize(news)


"""
param: A list with articles and its reference information
return: A list of summarized articles and its reference information
"""
def summarize(news):
    count =0
    for article in news:
        # Uses Cohere text summarization to reduce the article into 100 words
        prompt="Please summarize the passage in 100 words: "+article[1].replace('\n', ' ')
        response = co.generate(
        model='command-xlarge-20221108',
        prompt=prompt,
        max_tokens=350,
       )
        article_summarized = response.generations[0].text
        #changes article content in the original dictionary to the summarized article
        news[count][1]=article_summarized
        count=count+1
    return news


if __name__ == '__main__':
    topic= enter_query()  # retrieving topic prompt from user
    summarized_news = get_summary(topic)
    print(summarized_news)


