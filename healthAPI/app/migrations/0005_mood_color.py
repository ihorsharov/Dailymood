# Generated by Django 5.0.6 on 2024-05-24 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_remove_note_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='mood',
           # Generated by Django 5.0.6 on 2024-05-24 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_remove_note_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='mood',
            name='color',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
