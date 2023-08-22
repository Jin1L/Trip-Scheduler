from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

import os
from dotenv import load_dotenv, find_dotenv

_ = load_dotenv(find_dotenv())  # read local .env file
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

def processInputAI(location : str = "Montreal, Canada", start_date : str = "January 1 2024",
                end_date : str = "January 14 2024", budget : str = "3000$", num_travelers : str = "1"):
    ChatOpenAI.api_key = os.environ["OPENAI_API_KEY"]

    # template_string = """Based on the information delimited by triple backticks,
    # generate a detailed recommendation for the trip, including popular attractions, weather conditions,
    # recommended accommodations, transportation options, and any additional tips that might be need.
    # Information: ```
    # Location: {location}
    # Start Date: {start_date}
    # End Date: {end_date}
    # Number of Travelers: {num_travelers}
    # ```
    # """

    # template_string_2 = """Based on the information delimited by triple backticks,
    # generate a detailed recommendation for the trip, including popular attractions,
    # recommended accommodations, transportation options, and any additional tips that might be need.
    # Plan the trip from day 1 considering the budget is {budget} and considering the distances between
    # each location so that the traveller(s) travels in the most efficient way as possible.
    # Recommend three restaurants per day considering the traveller's location and the hotel that they are going to stay in.
    # Provide the restaurant's location and name as well as the hotel.
    # Information: ```
    # Location: {location}
    # Start Date: {start_date}
    # End Date: {end_date}
    # Number of Travelers: {num_travelers}
    # """

    example_prompt = """
    Based on the information given in the end, generate a detailed recommendation for the trip,
    including popular attractions, recommended accommodations, transportation options, and any additional tips that
    might be needed. Plan the trip from day 1 considering the budget is {budget} (consider using about 80%) and considering
    the distances between each location so that the traveler(s) travels in the most efficient way possible. Recommend
    three restaurants per day considering the traveler's location and the hotel that they are going to stay in. 
    Provide the restaurant's location and name. Moreover, provide the name and location of the hotel and the location
    where the traveler can stay. List three hotels that are not temporarily closed and their official website as well as their ratings on Google.
    Information: 
    '''
    Location: {location}
    Start Date: {start_date}
    End Date: {end_date}
    Number of Travelers: {num_travelers} 
    '''
    """

    llm = ChatOpenAI(
        temperature=0.0,
        model="gpt-3.5-turbo",
    )
    prompt_template = ChatPromptTemplate.from_template(template=example_prompt)

    # to modify prompt and pass user input
    input_prompt = prompt_template.format_messages(
        location=location,
        start_date=start_date,
        end_date=end_date,
        budget=budget,
        num_travelers=num_travelers,
    )

    # turn into chat response
    response = llm(input_prompt).content
    return response

@api_view(["POST"])
def gpt(request):
    data = processInputAI(request.data["location"], request.data["startDate"], request.data["endDate"], request.data["budget"], request.data["traveller"])
    
    msg = {
        "GPTSuggestion" : data
    }

    return Response(msg, status=200)
