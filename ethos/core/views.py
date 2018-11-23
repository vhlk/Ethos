from django.shortcuts import render
from django.views.generic import TemplateView
#from core.models import Post
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
#from templated_email import send_templated_mail

class HomeView(TemplateView):
    template_name = 'home.html'

   