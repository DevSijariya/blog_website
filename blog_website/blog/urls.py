from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('api/posts/', PostListAPI.as_view(), name='post_list_api'),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]

