from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def data(request):
    print(request.data)
    print("hello")