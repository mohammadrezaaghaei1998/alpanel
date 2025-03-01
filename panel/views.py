from django.shortcuts import render
from .models import VideoHomePage

def index(request):
    # Fetch the first video from the database (or any logic you want)
    video = VideoHomePage.objects.first()
    return render(request, 'app/index.html', {'video': video})
