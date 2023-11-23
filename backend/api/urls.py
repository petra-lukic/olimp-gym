from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('sports/', views.getSports),
    path('sports/<str:pk>', views.getSport),
    path('schedule/', views.getSchedule),
]
