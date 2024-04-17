from django.urls import path
from . import views
urlpatterns = [
    path('',views.index, name="index"),
    path('verify/',views.voterid_verify, name="verify"),
    path('vote',views.polling, name="polling"),
    path('vc',views.vote,name="vote"),
    path('demo',views.demo, name="demo"),
    path('vvpat',views.vvpat, name="vvpat"),
    path('result',views.ad,name="result")
]