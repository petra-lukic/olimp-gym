from rest_framework import serializers
from app.models import Sport, Schedule


class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = '__all__'


class ScheduleSerializer(serializers.ModelSerializer):
    time = serializers.SerializerMethodField()
    sport = SportSerializer(many=False)

    class Meta:
        model = Schedule
        fields = '__all__'

    def get_time(self, obj):
        return obj.time.strftime("%H:%M")
