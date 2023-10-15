from django.db import models
from django.contrib.auth.models import User

class Bug(models.Model):
    BugID = models.AutoField(primary_key=True)
    # ProjectID = models.ForeignKey(Project, on_delete=models.CASCADE, db_column='ProjectID')
    ReportedByUserID = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reported_bugs', db_column='ReportedByUserID')
    # AssignedToUserID = models.ForeignKey(User, on_delete=models.CASCADE, related_name='assigned_bugs', db_column='AssignedToUserID')
    Title = models.CharField(max_length=50)
    # Description = models.TextField()
    Status = models.CharField(max_length=20)
    # Severity = models.CharField(max_length=20)
    CreatedAt = models.DateTimeField(auto_now_add=True)
    UpdatedAt = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'Bugs'

# class Project(models.Model):
#     ProjectID = models.AutoField(primary_key=True)
#     ProjectName = models.CharField(max_length=50)
#     Description = models.TextField()
#     CreatedAt = models.DateTimeField(auto_now_add=True)
#     UpdatedAt = models.DateTimeField(auto_now=True)
    
#     class Meta:
#         db_table = 'Projects'

# class Comment(models.Model):
#     CommentID = models.AutoField(primary_key=True)
#     BugID = models.ForeignKey(Bug, on_delete=models.CASCADE, db_column='BugID')
#     UserID = models.ForeignKey(User, on_delete=models.CASCADE, db_column='UserID')
#     CommentText = models.TextField()
#     CreatedAt = models.DateTimeField(auto_now_add=True)
#     UpdatedAt = models.DateTimeField(auto_now=True)
    
#     class Meta:
#         db_table = 'Comments'

# class StatusUpdate(models.Model):
#     StatusUpdateID = models.AutoField(primary_key=True)
#     BugID = models.ForeignKey(Bug, on_delete=models.CASCADE, db_column='BugID')
#     UpdatedByUserID = models.ForeignKey(User, on_delete=models.CASCADE, db_column='UpdatedByUserID')
#     OldStatus = models.CharField(max_length=20)
#     NewStatus = models.CharField(max_length=20)
#     CreatedAt = models.DateTimeField(auto_now_add=True)
    
#     class Meta:
#         db_table = 'StatusUpdates'
