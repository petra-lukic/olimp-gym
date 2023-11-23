from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SportSerializer, ScheduleSerializer
from app.models import Sport, Schedule


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {'GET': 'api/sports'},
        {'GET': 'api/schedules'},
    ]

    return Response(routes)


@api_view(['GET'])
def getSports(request):
    sports = Sport.objects.all()
    serializer = SportSerializer(sports, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSport(request, pk):
    sport = Sport.objects.get(id=pk)
    serializer = SportSerializer(sport, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getSchedule(request):
    sort_by = request.GET.get('sort_by')
    schedule = Schedule.objects.all()
    if sort_by == 'time':
        schedule = schedule.order_by('time')
    serializer = ScheduleSerializer(schedule, many=True)
    return Response(serializer.data)
