from django import forms    

class ContactForm(forms.Form):
    email = forms.CharField(label="", widget=forms.TextInput(attrs={'placeholder': 'Email'}), max_length=60)
    
    def send_mail(self):
        'NewsLetter', #titulo
        'email', #corpo
        'piracemaETHOS@gmail.com', #emaildeenvio
        ['lnt@cin.ufpe.br'], #emaildestino #testando o meu
        fail_silently=False,
        
    