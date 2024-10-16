from django.urls import path
from .views import userDataViewSet
from rest_framework.routers import DefaultRouter

router  = DefaultRouter()
router.register('userdata',userDataViewSet,basename='userdata')

urlpatterns = router.urls
# urlpatterns=[
#     path('',home)
# ]