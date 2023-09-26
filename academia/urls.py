from django.urls import path

from academia import views
from academia.views import index

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', views.index),
    path('academia/', views.academia),
]   

