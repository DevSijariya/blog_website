from django.urls import path
from . import views
from .views import CustomTokenObtainPairView

urlpatterns = [
    path('', views.home, name='home'),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]

