from django.contrib import admin
from .models import VideoHomePage

# Customize the admin interface for VideoHomePage
class VideoHomePageAdmin(admin.ModelAdmin):
    list_display = ('id', 'video')  # Display video ID and video field in the list
    search_fields = ('video',)  # Allow searching by video field

# Register the model with the custom admin class
admin.site.register(VideoHomePage, VideoHomePageAdmin)
