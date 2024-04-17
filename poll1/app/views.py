from django.shortcuts import render,HttpResponse, redirect,get_object_or_404
from .models import voter,poll,Contest,Count
# Create your views here.

def index(request):
    return render(request,'demo.html')

def voterid_verify(request):
    if request.method == 'POST':
        voter_i = request.POST.get('voter_id')
        if poll.objects.filter(voter_id=voter_i).exists():
            error ="You already voted"
            return render(request,'demo.html',{'error_message':error})
        else:
            voter_object = voter.objects.get(voter_id = voter_i)
            voter_id = voter_object.voter_id
            request.session['voter_id'] = voter_id
            voter_name = voter_object.voter_name
            return render(request,'voter_profile.html',{'profile':voter_name,'voter_id':voter_id})

def polling(request):
    id = Contest.objects.all()
    return render(request,'poll.html',{'data':id})

def vvpat(request):
    c_id =request.POST.get('c_id')
    request.session['c_id'] = c_id
    print(c_id)
    data =Contest.objects.get(contest_id = c_id)
    voter_id = request.session['voter_id']
    new_voter = poll(voter_id = voter_id)
    new_voter.save()
    return render(request,'vvpat.html',{'data':data})

def vote(request):
    c_id= request.session['c_id']  
    contest = Contest.objects.get(contest_id=c_id)
    count_object = Count.objects.get(contest=contest)

    count_object.count_vote += 1
    count_object.save()
        
    return redirect('index')

def demo(request):
    return render(request,'vvpat.html')

def ad(request):

    contests = Contest.objects.all()
    vote = Count.objects.all()
    merged_data = contests.union(vote)
    
    return render(request,'result.html',{'contests':contests,'vote':vote,'merged_data':merged_data})