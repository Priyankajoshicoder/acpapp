"""ecommerce URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from frontend.views import main_view

admin.site.site_header="Ecommerce Admin"
admin.site.site_title="Ecommerce Admin Dashboard"
admin.site.index_title="Ecommerce"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("frontend.urls")),
    path('api/', include('api.urls')),
    re_path(r'^(?P<path>.*)/$', main_view),
    # Add this line to include the i18n URL patterns
    path('i18n/', include('django.conf.urls.i18n')),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

