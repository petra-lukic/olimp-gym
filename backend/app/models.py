from django.db import models


class MyUUIDField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 36
        kwargs['unique'] = True
        kwargs['default'] = self.generate_uuid
        super().__init__(*args, **kwargs)

    def generate_uuid(self):
        import uuid
        return str(uuid.uuid4())


class Sport(models.Model):
    TYPE_OF_SPORT = [
        ('fitness', 'Fitness'),
        ('rugged', 'Rugged'),
        ('specialized', 'Specialized'),
        ('mind and body', 'Mind and Body'),
        ('age-specific', 'Age-Specific')
    ]
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()
    imgUrl = models.URLField(max_length=100)
    type = models.CharField(max_length=100, choices=TYPE_OF_SPORT)
    trainer = models.CharField(max_length=100)
    id = MyUUIDField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Schedule(models.Model):
    DAYS_OF_WEEK = [
        ('monday', 'Monday'),
        ('tuesday', 'Tuesday'),
        ('wednesday', 'Wednesday'),
        ('thursday', 'Thursday'),
        ('friday', 'Friday'),
        ('saturday', 'Saturday'),
        ('sunday', 'Sunday'),
    ]
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    day = models.CharField(max_length=20, choices=DAYS_OF_WEEK)
    time = models.TimeField()
    id = MyUUIDField(primary_key=True, editable=False)

    def __str__(self):
        return self.day
