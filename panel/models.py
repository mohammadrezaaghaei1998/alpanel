from django.db import models

class VideoHomePage(models.Model):
    video = models.FileField(upload_to='videos/', blank=True, null=True)
    
    def __str__(self):
        return f"Video for HomePage"
