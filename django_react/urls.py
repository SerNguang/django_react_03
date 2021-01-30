from django.urls import path, include

urlpatterns = [
    # path('', include('leads.urls')),
    path('', include('frontend.urls')),
    path('', include('leads.urls')),    
]