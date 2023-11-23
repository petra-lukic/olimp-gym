# Generated by Django 4.2.4 on 2023-10-11 13:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app", "0002_schedule"),
    ]

    operations = [
        migrations.AlterField(
            model_name="sport",
            name="type",
            field=models.CharField(
                choices=[
                    ("fitness", "Fitness"),
                    ("rugged", "Rugged"),
                    ("specialized", "Specialized"),
                    ("mind and body", "Mind and Body"),
                    ("age-specific", "Age-Specific"),
                ],
                max_length=100,
            ),
        ),
    ]