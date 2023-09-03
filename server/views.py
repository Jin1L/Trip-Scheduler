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
    Based on the given information, here is a detailed recommendation for your trip to Montreal, Canada:

    Accommodations:
    1. Hotel Bonaventure Montreal
    Location: 900 Rue de la Gauchetière O, Montréal, QC H5A 1E4, Canada
    Official Website: https://www.hotelbonaventure.com/
    Google Rating: 4.2/5

    2. Le Mount Stephen
    Location: 1440 Drummond St, Montréal, QC H3G 1V9, Canada
    Official Website: https://www.lemountstephen.com/
    Google Rating: 4.6/5

    3. Hotel William Gray
    Location: 421 Rue St Vincent, Montréal, QC H2Y 3A6, Canada
    Official Website: https://hotelwilliamgray.com/
    Google Rating: 4.7/5

    [
    (Only if they are renting a car)
    Rent Acoomodations:
    1. [Name of a company]
    Location:
    Official Website:
    Google Rating:

    2. [Name of a company]
    Location:
    Official Website:
    Google Rating:
    ]

    Day 1:
    - Start your day by visiting the iconic Notre-Dame Basilica, located at 110 Notre-Dame St W, Montréal, QC H2Y 1T2, Canada. The distance from your hotel is approximately 2.5 kilometers. You can reach there by taking a taxi or using a ridesharing service.
    - For lunch, head to Restaurant Bonaparte, located at 447 Rue Saint-François-Xavier, Montréal, QC H2Y 2T1, Canada. It is a fine dining restaurant offering French cuisine.
    - After lunch, explore the historic Old Montreal area, known for its cobblestone streets and charming architecture. You can visit attractions like Place Jacques-Cartier, Bonsecours Market, and Pointe-à-Callière Museum.
    - For dinner, try Gibbys, located at 298 Place d'Youville, Montréal, QC H2Y 2B6, Canada. It is a popular steakhouse known for its cozy atmosphere and delicious food.

    Day 2:
    - Start your day by visiting Mount Royal Park, located at 1260 Remembrance Rd, Montréal, QC H3H 1A2, Canada. The distance from your hotel is approximately 5 kilometers. You can drive there using your personal vehicle.
    - Enjoy a picnic or take a leisurely walk in the park while enjoying the beautiful views of the city.
    - For lunch, try Schwartz's Deli, located at 3895 Boulevard Saint-Laurent, Montréal, QC H2W 1X9, Canada. It is a famous deli known for its smoked meat sandwiches.
    - In the afternoon, explore the vibrant Plateau-Mont-Royal neighborhood, known for its trendy shops, cafes, and street art.
    - For dinner, visit Au Pied de Cochon, located at 536 Avenue Duluth E, Montréal, QC H2L 1A9, Canada. It is a popular restaurant specializing in Quebecois cuisine.

    Day 3:
    - Start your day by visiting the Montreal Museum of Fine Arts, located at 1380 Sherbrooke St W, Montréal, QC H3G 1J5, Canada. The distance from your hotel is approximately 3 kilometers. You can drive there using your personal vehicle.
    - Explore the museum's impressive collection of art and exhibitions.
    - For lunch, try L'Express, located at 3927 Rue Saint-Denis, Montréal, QC H2W 2M4, Canada. It is a classic French bistro known for its traditional dishes.
    - In the afternoon, take a stroll along Sainte-Catherine Street, one of Montreal's main shopping streets.
    - For dinner, visit Joe Beef, located at 2491 Notre-Dame St W, Montréal, QC H3J 1N6, Canada. It is a renowned restaurant offering a unique dining experience with a focus on local ingredients.

    Additional Tips:
    - Make sure to check the opening hours and availability of attractions and restaurants in advance, as some may have limited hours or require reservations.
    - Consider purchasing a Montreal Attraction Pass, which offers discounted access to multiple attractions in the city.
    - Use a navigation app or GPS to plan your routes and avoid traffic congestion.
    - Keep in mind that parking in downtown Montreal can be expensive, so consider using public transportation or parking in designated lots.
    - Take advantage of the city's bike-sharing program, BIXI, to explore the city on two wheels.

    With a budget of $6000, you can allocate approximately 80% ($4800) for accommodation, transportation, attractions, and meals. Make sure to adjust your expenses accordingly and keep track of your spending throughout the trip.

    Enjoy your trip to Montreal!
    """

    prompt = """
    Based on the information given in the end, generate a detailed recommendation for the trip,
    including popular attractions, recommended accommodations, and any additional tips that
    might be needed. Plan the trip from day 1 considering the budget is {budget} (consider using about 80%) and considering
    the distances between each location and their method of transportation, which is {transportation}, so that the traveler(s) travels in the most efficient way possible.
    Give the detail information about how the traveler(s) will use their choice of transportation to get to each destination by giving the accurate distance and the route.
    Recommend three restaurants per day considering the traveler's location with their location and name.
    List at least 3 different hotels in the beginning of the recommendation that are not temporarily closed
    with their name, location, official website link and Google rating. 
    If the means of transportation is renting a car, make sure to include two different rental companies that are available near the location
    right after listing the hotel with their official website and Google rating.
    Generate a recommendation that is similar to the following example. However, improve it with using the exact name of the hotel in the planning.
    Also, consider their transportation on the planning which means that if they choose renting or personal vehicle, they could cover more distance in their trip than the traveler(s)
    who will be using public transportation. If they choose public transit, make sure that you provide the routes using buses and metro strictly. Public transit does not include any taxi or riding services.
    Example : {example_prompt}
    ======================================================
    Information: 
    '''
    Location: {location}
    Start Date: {start_date}
    End Date: {end_date}
    Number of Travelers: {num_travelers} 
    transportation: {transportation}
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
            HumanMessagePromptTemplate.from_template(template=prompt)
        ]
    )

    # to modify prompt and pass user input
    input_prompt = template.format_messages(
        location=location,
        start_date=start_date,
        end_date=end_date,
        budget=budget,
        num_travelers=num_travelers,
        transportation=transportation,
        example_prompt=example_prompt
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
