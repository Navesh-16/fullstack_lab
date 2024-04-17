from django.db import models

# Create your models here.

class poll(models.Model):
    voter_id = models.IntegerField(primary_key=True,unique=True)
    
    
class voter(models.Model):
    voter_id = models.IntegerField(unique=True)
    voter_name = models.TextField(max_length=15)
    def __str__(self):
        return self.voter_name
     
class Contest(models.Model):
    contest_id = models.IntegerField(unique=True)
    contest_name = models.CharField(max_length=50)  
    contest_logo = models.URLField()  
    contest_party = models.CharField(max_length=50)  

    def __str__(self):
        return f'{self.contest_id}'

class Count(models.Model):
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE)  
    count_vote = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.contest.contest_name} - Votes: {self.count_vote}'