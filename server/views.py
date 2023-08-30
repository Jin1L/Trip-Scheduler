from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

import os
from dotenv import load_dotenv, find_dotenv

_ = load_dotenv(find_dotenv())  # read local .env file
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate
from langchain.schema import SystemMessage

def processInputAI(transportation: str = "public transit", location : str = "Montreal, Canada", start_date : str = "January 1 2024",
                end_date : str = "January 14 2024", budget : str = "3000$", num_travelers : str = "1"):
    ChatOpenAI.api_key = os.environ["OPENAI_API_KEY"]

    example_prompt = """
    Based on the information given in the end, generate a detailed recommendation for the trip,
    including popular attractions, recommended accommodations, and any additional tips that
    might be needed. Plan the trip from day 1 considering the budget is {budget} (consider using about 80%) and considering
    the distances between each location and their method of transportation, which is {transportation}, so that the traveler(s) travels in the most efficient way possible.
    Recommend three restaurants per day considering the traveler's location and the hotel that they are going to stay in. 
    Provide the restaurant's location and name. Moreover, provide the actual name and location of the open hotel and the location
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
        model="gpt-3.5-turbo-16k"
    )

    template = ChatPromptTemplate.from_messages(
        [
            SystemMessage(content="You are a helpful travel agency assistant that will inform the user with precise information of the instruction received. "),
            SystemMessage(content="Do not forget to include detailed explanations on how users can move accordingly based on given transportation"),
            HumanMessagePromptTemplate.from_template(template=example_prompt)
        ]
    )

    # to modify prompt and pass user input
    input_prompt = template.format_messages(
        location=location,
        start_date=start_date,
        end_date=end_date,
        budget=budget,
        num_travelers=num_travelers,
        transportation=transportation
    )
    print(f"This is the final prompt:\n {input_prompt}")
    # turn into chat response
    response = llm(input_prompt).content
    return response

@api_view(["POST"])
def gpt(request):
    data = processInputAI(request.data["transportation"], request.data["location"], request.data["startDate"], request.data["endDate"], request.data["budget"], request.data["traveller"])
    
    msg = {
        "GPTSuggestion" : data
    }

    print(data)

    return Response(msg, status=200)
