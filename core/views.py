from django.shortcuts import render
from django.views.generic import TemplateView
#from core.models import Post
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.core.mail import send_mail
from django.views.generic.edit import FormView

#from django.core.mail import send_mail


class HomeView(TemplateView):
    template_name = 'home.html'
#class ContactView(FormView):
    #template_name = 'forms.py'
    #form_class = ContactForm #####aaaaaaaaaah eu nao sei


    #def form_valid(self, form):
    #    email = form.cleaned_data['email']
    #    form.send_email()
    #    return super().form_valid(form)    

    
#return(render(request,'home.html')) 
   